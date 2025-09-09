import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "Bienvenidos" });
});

app.get("/test", (req, res) => {
  throw new Error("Error generado por el usuario");
  res.send("Test");
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
