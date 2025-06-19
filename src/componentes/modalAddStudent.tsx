import { XCircleIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

function ModalAddStudent({ onClose }: { onClose: () => void }) {
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [estatus, setEstatus] = useState("");
  const [condicion, setCondicion] = useState("");

  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-auto shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">Añadir Alumno</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <XCircleIcon className="h-10 w-10 text-gray-400" />
        </button>

        <div className="flex flex-col gap-3">

          {/* Nombre */}
          <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Nombre:</div>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1 bg-white text-black px-2 py-1 rounded border border-gray-300 h-7"
            />
          </div>

          {/* Matricula */}
          <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Matrícula:</div>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="flex-1 bg-white text-black px-2 py-1 rounded border border-gray-300 h-7"
            />
          </div>

        {/* Condición */}
        <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Condición:</div>
            <select
                value={condicion}
                onChange={(e) => setCondicion(e.target.value)}
                className="flex-1 bg-white text-gray-600 px-2 py-1 rounded border border-gray-300 h-7"
            >
                <option value="">Selecciona una opción</option>
                <option value="Excelente">Excelente</option>
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
                <option value="Otra">Otra</option>
            </select>
        </div>

        {/* Estatus de pago */}
        <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Estatus de pago:</div>
            <select
                value={estatus}
                onChange={(e) => setEstatus(e.target.value)}
                className="flex-1 bg-white text-gray-600 px-2 py-1 rounded border border-gray-300 h-7"
            >
                <option value="">Selecciona una opción</option>
                <option value="Excelente">Aceptado</option>
                <option value="Regular">Rechazado</option>
                <option value="Irregular">En Proceso</option>
                <option value="Otra">Otra</option>
            </select>
        </div>


        {/* Fecha de nacimiento */}
        <div className="flex flex-col gap-0">
            <div className="text-lg text-gray-600">Fecha de nacimiento:</div>
            <input
                type="date"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="bg-white text-black px-2 py-1 rounded border border-gray-300"
            />
        </div>

        {/* Botón Agregar */}
        <div className="flex items-center justify-center mt-10">
        <button
            className="bg-white text-gray-500 border border-gray-400 px-4 py-2 rounded cursor-pointer hover:bg-gray-100 transition w-1/2"
            onClick={onClose}
        >
            Agregar
        </button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default ModalAddStudent;
