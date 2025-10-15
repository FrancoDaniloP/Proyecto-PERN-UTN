import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js";
import authRoutes from "./router/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "Bienvenidos" });
});
app.use("/api", tareasRoutes);
app.use("/api", authRoutes);

//Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
