import { XCircleIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

interface StudentData {
  nombre: string;
  matricula: string;
  edad: string;
  estatus: string;
  fechaNacimiento: string;
  foto: string | null;
}

function ModalAddStudent({ onClose, onAddStudent }: { onClose: () => void; onAddStudent: (student: StudentData) => void }) {
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [estatus, setEstatus] = useState("");
  const [edad, setEdad] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const [descripcion, setDescripcion] = useState("");

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!nombre.trim() || !matricula.trim()) {
      alert('Por favor, completa al menos el nombre y la matrícula');
      return;
    }

    const studentData: StudentData = {
      nombre: nombre.trim(),
      matricula: matricula.trim(),
      edad: edad.trim(),
      estatus: estatus,
      fechaNacimiento: descripcion,
      foto: foto
    };

    onAddStudent(studentData);
    onClose();
  };

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

          {/* Foto del estudiante */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="text-lg text-gray-600">Foto del estudiante:</div>
            <div className="flex flex-col items-center gap-2">
              {foto ? (
                <img 
                  src={foto} 
                  alt="Preview" 
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                  <PhotoIcon className="w-10 h-10 text-gray-400" />
                </div>
              )}
              <label className="bg-[#00b2ff] text-white px-3 py-1 rounded cursor-pointer hover:bg-[#008ecc] transition-colors text-sm">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                Subir Foto
              </label>
            </div>
          </div>

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

        {/* Edad */}
        <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Edad:</div>
            <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                placeholder="Ingresa la edad"
                min="0"
                max="120"
                className="flex-1 bg-white text-black px-2 py-1 rounded border border-gray-300 h-7"
            />
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
            className="bg-[#00b2ff] text-white border border-[#00b2ff] px-4 py-2 rounded cursor-pointer hover:bg-[#008ecc] transition w-1/2"
            onClick={handleSubmit}
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
