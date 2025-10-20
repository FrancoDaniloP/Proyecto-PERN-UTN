import { Button, Card, Input, Label, Textarea } from "../components/ui";
import { useForm } from "react-hook-form";
import { useTareas } from "../context/TareasContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TareaFormPage() {
  const { crearTarea } = useTareas();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [postError, setPostError] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    const res = await crearTarea(data);
    if (res) {
      navigate("/tareas");
    }
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {postError.map((error, index) => (
          <div key={index} className="text-red-500 font-bold">
            {error}
          </div>
        ))}
        <h2 className="font-bold my-4 text-3xl">Formulario de Tareas</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="titulo">Titulo</Label>
          <Input
            type="text"
            label="Titulo"
            placeholder="Escribe el titulo"
            autoFocus
            {...register("titulo", { required: true })}
          />
          {errors.titulo && (
            <span className="text-red-500">El titulo es requerido</span>
          )}

          <Label htmlFor="descripcion">Descripcion</Label>
          {errors.descripcion && (
            <span className="text-red-500">La descripcion es requerida</span>
          )}
          <Textarea
            id="descripcion"
            label="Descripcion"
            placeholder="Escribe la descripcion"
            rows={3}
            {...register("descripcion", { required: true })}
          />

          <Button type="submit">Crear Tarea</Button>
        </form>
      </Card>
    </div>
  );
}

export default TareaFormPage;
