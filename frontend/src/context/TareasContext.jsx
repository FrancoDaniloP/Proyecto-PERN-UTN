import { createContext, useContext, useState } from "react";
import {
  listarTareasRequest,
  eliminarTareaRequest,
  crearTareaRequest,
} from "../api/tareas.api";

const TareasContext = createContext();

export const useTareas = () => {
  const context = useContext(TareasContext);
  if (!context) {
    throw new Error("useTareas debe estar dentro del proveedor TareasProvider");
  }
  return context;
};

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  const [errors, setErrors] = useState([]);

  const listarTareas = async () => {
    const res = await listarTareasRequest();
    setTareas(res.data);
  };

  const crearTarea = async (tarea) => {
    try {
      const res = await crearTareaRequest(tarea);
      if (res.status === 201) {
        setTareas([...tareas, res.data]);
        navigate("/tareas");
      }
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const eliminarTarea = async (id) => {
    const res = await eliminarTareaRequest(id);
    if (res.status === 204) {
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    }
  };

  return (
    <TareasContext.Provider
      value={{ tareas, listarTareas, eliminarTarea, crearTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
};

export default TareasContext;
