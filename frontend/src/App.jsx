import Navbar from "./components/navbar/Navbar";
import { Conteiner } from "./components/ui";

import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import TareasPage from "./pages/TareasPage";
import TareaFormPage from "./pages/TareaFormPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Conteiner className="py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/tareas/crear" element={<TareaFormPage />} />
          <Route path="/tareas/editar/:id" element={<TareaFormPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Conteiner>
    </>
  );
}

export default App;
