import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-20 bg-gray-200 flex items-center justify-center space-x-8">
      <span
        className="relative px-6 py-2 text-[var(--azul)] font-semibold cursor-pointer transition-all duration-300 hover:text-white hover:bg-[var(--azul)] hover:rounded-full"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </span>
      <span
        className="relative px-6 py-2 text-[var(--azul)] font-semibold cursor-pointer transition-all duration-300 hover:text-white hover:bg-[var(--azul)] hover:rounded-full"
        onClick={() => navigate("/grupos")}
      >
        Grupos
      </span>
      <span
        className="relative px-6 py-2 text-[var(--azul)] font-semibold cursor-pointer transition-all duration-300 hover:text-white hover:bg-[var(--azul)] hover:rounded-full"
        onClick={() => navigate("/buscar")}
      >
        Alumnos
      </span>
      <span
        className="relative px-6 py-2 text-white font-semibold bg-[var(--azul)] rounded-full cursor-pointer transition-all duration-300 hover:bg-[var(--gris3)] hover:rounded-full"
        onClick={() => navigate("/login")}
      >
        Salir
      </span>
    </nav>
  );
};

export default Navbar;