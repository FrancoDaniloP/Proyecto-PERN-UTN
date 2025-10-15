import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

function HomePage() {
  const data = useContext(AuthContext);

  return <div>HomePage</div>;
}

export default HomePage;
