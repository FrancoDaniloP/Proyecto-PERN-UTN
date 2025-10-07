import Router from "express-promise-router";
import {
  listarTareas,
  listarTareaId,
  actualizarTarea,
  crearTarea,
  eliminarTarea,
} from "../controllers/tareas.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/tareas", isAuth, listarTareas);

router.get("/tareas/:id", isAuth, listarTareaId);

router.post("/tareas", isAuth, crearTarea);

router.put("/tareas/:id", isAuth, actualizarTarea);

router.delete("/tareas/:id", isAuth, eliminarTarea);

export default router;
