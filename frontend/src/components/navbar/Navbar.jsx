import { Link, useLocation } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./navigation";
import { Conteiner } from "../ui";
import { useAuth } from "../../context/authContext";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth();
  return (
    <nav className="bg-zinc-950 ">
      <Conteiner className="flex justify-between px-20 py-3">
        <Link to="/">
          <h1 className="text-2xl font-bold text-sky-500">PROYECT PERN</h1>
        </Link>
        <ul className="flex gap-x-3">
          {isAuth ? (
            <>
              {PrivateRoutes.map(({ name, path }) => (
                <li
                  key={name}
                  className={`text-slate-300 ${
                    location.pathname === path && "bg-sky-500 px-3 py-1"
                  }`}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}
              <li
                onClick={() => signout()}
                className="text-slate-300 bg-red-400 cursor-pointer hover:bg-red-600 px-3 py-1"
              >
                Salir
              </li>
            </>
          ) : (
            PublicRoutes.map(({ name, path }) => (
              <li
                key={name}
                className={`text-slate-300 ${
                  location.pathname === path && "bg-sky-500 px-3 py-1"
                }`}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Conteiner>
    </nav>
  );
}

export default Navbar;
