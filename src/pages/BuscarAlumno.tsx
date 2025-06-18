import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../componentes/Navbar';

interface Student {
  id: number;
  name: string;
}

const studentsDB: Student[] = [
  { id: 1, name: "Alumno 1" },
  { id: 2, name: "Alumno 2" },
  { id: 3, name: "Alumno 3" },
  { id: 4, name: "Alumno 4" },
  { id: 5, name: "Alumno 5" },
  { id: 6, name: "Alumno 6" },
  { id: 7, name: "Xime" },
  { id: 8, name: "David" },
  { id: 9, name: "Kei" },
];

const StudentRow = ({ student }: { student: Student }) => (
  <div 
    className="w-full p-2 border-b border-[var(--gris3)] flex items-center cursor-pointer hover:bg-[var(--gris2)] transition"
    // onClick={() => navigate(`/perfil${student.id}`)}
  >
    <span className="text-[var(--gris3)] text-xs">{student.name}</span>
  </div>
);

const BuscarAlumno = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar alumnos en función del término de búsqueda
  const filteredStudents = studentsDB.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen w-screen bg-primary flex flex-col">
      {/* Header */}
      <Navbar/>

      <div className="text-center mt-20">
        <h2 className="text-white text-4xl font-bold">Hola, busca al alumno de tu interés</h2>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-sm h-12 bg-[var(--azul6)] bg-opacity-60 flex items-center rounded-full px-4 shadow-lg border border-gray-400 hover:bg-opacity-80 transition-all">
          <input 
            type="text" 
            placeholder="Busca al usuario por nombre" 
            className="w-full bg-transparent outline-none text-white text-sm"
            aria-label="Buscar usuario"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-white text-2xl font-bold">Alumnos</h2>
      </div>

      {/* Lista alumnos*/}
      <div className="mx-auto mt-4 p-4 bg-[var(--gris)] rounded-lg shadow-md w-full max-w-md border border-gray-300 overflow-y-auto max-h-40 ">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <StudentRow key={student.id} student={student} />
          ))
        ) : (
          <p className="text-center text-[var(--gris3)] text-xs">No hay resultados</p>
        )}
      </div>
    </div>
  );
};

export default BuscarAlumno;