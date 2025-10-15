import { Button, Input, Card, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signup, errors: setUserErrors } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate("/perfil");
    }
  });
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
        {setUserErrors &&
          setUserErrors.map((error, index) => (
            <p
              key={index}
              className="text-white bg-red-500 text-center text-sm mb-2 py-2"
            >
              {error}
            </p>
          ))}
        <h3 className="text-4xl font-bold  my-2">Registro</h3>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">El nombre es requerido</span>
          )}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">El email es requerido</span>
          )}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">La contraseña es requerida</span>
          )}
          <Button>Registrarse</Button>
        </form>
        <div className="flex justify-between my-4">
          <p className="text-sm text-gray-400 mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
