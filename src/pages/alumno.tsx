import { useState } from 'react';
import {
  FolderIcon,
  UserCircleIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import Hide from '../componentes/hide';

function Alumno() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(true);
  const [archivosPorCarpeta, setArchivosPorCarpeta] = useState<{ [key: string]: File[] }>({});
  const [matricula, setMatricula] = useState("AO178666");
  const [condicion, setCondicion] = useState("Regular");
  const [fechaNacimiento, setFechaNacimiento] = useState("03/25/1980");
  const [estatusPago, setEstatusPago] = useState("Aceptado");
  const [grupo, setGrupo] = useState("5B");

  const folders = ['Reportes', 'PEI', 'Expediente', 'Pagos', 'Hola', 'Que hace'];

  const handleAgregarArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = e.target.files;
    if (archivos && activeFolder) {
      setArchivosPorCarpeta((prev) => ({
        ...prev,
        [activeFolder]: [...(prev[activeFolder] || []), ...Array.from(archivos)],
      }));
    }
  };

  const handleEliminarArchivo = (carpeta: string, index: number) => {
    setArchivosPorCarpeta((prev) => ({
      ...prev,
      [carpeta]: prev[carpeta].filter((_, i) => i !== index)
    }));
  };

  const handleAbrirArchivo = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
    // Limpiamos el URL después de un tiempo para liberar memoria
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="min-h-screen bg-[#135078] text-white font-sans w-full overflow-x-hidden relative">
      {/* Barra de navegación */}
      <div className="w-full h-20 bg-gray-200" />

      {/* Contenido principal */}
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-20 py-12">
        {/* Título */}
        <h1 className="text-center text-4xl font-serif mt-10 mb-20">
          Alumno: AlumnoA
        </h1>

        {/* Línea superior */}
        <div className="border-t border-white mb-10" />

        {/* Sección principal */}
        <div className="flex flex-col lg:flex-row items-stretch w-full gap-14 min-h-[300px]">
          {/* Izquierda: Avatar y botón editar */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-[240px]">
            <UserCircleIcon className="w-80 h-50 text-white" />
            <Hide>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex flex-col items-center text-xs mt-2 focus:outline-none transition-transform hover:scale-110 hover:text-[#00b2ff]"
            >
              <PencilSquareIcon className="w-8 h-8 mb-1 transition-transform" />
              <span>{editMode ? "Guardar" : "Editar"}</span>
            </button> </Hide>
          </div>

          {/* Línea vertical */}
          <div className="hidden lg:block w-px bg-white self-stretch" />

          {/* Derecha: Datos */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <p className="font-serif text-xl font-bold mb-1">Matrícula</p>
              {editMode ? (
                <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300" />
              ) : <p className="text-lg">{matricula}</p>}
            </div>
            <div>
              <p className="font-serif text-xl font-bold mb-1">Condición</p>
              {editMode ? (
                <input type="text" value={condicion} onChange={(e) => setCondicion(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300" />
              ) : <p className="text-lg">{condicion}</p>}
            </div>
            <div>
              <p className="font-serif text-xl font-bold mb-1">Fecha de nacimiento</p>
              {editMode ? (
                <input type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300" />
              ) : <p className="text-lg">{fechaNacimiento}</p>}
            </div>
            <div>
              <p className="font-serif text-xl font-bold mb-1">Estatus de pago</p>
              {editMode ? (
                <select value={estatusPago} onChange={(e) => setEstatusPago(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300">
                  <option value="Pagado">Pagado</option>
                  <option value="Pago parcial">Pago parcial</option>
                  <option value="Adeudo">Adeudo</option>
                  <option value="Becado">Becado</option>
                </select>
              ) : (
                <div className={`px-4 py-1 rounded-full w-fit text-sm mt-1 ${
                  estatusPago === "Pagado" || estatusPago === "Becado"
                    ? "bg-green-500"
                    : estatusPago === "Pago parcial"
                    ? "bg-yellow-500"
                    : estatusPago === "Adeudo"
                    ? "bg-red-500"
                    : "bg-purple-600"
                }`}>
                  {estatusPago}
                </div>
              )}
            </div>
            <div>
              <p className="font-serif text-xl font-bold mb-1">Grupo</p>
              {editMode ? (
                <input type="text" value={grupo} onChange={(e) => setGrupo(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300" />
              ) : <p className="text-lg">{grupo}</p>}
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-white mt-10 mb-6" />

        {/* Agregar */}
        <div className="flex flex-col lg:flex-row items-stretch w-full gap-14 mt-10 min-h-[300px]">
            {/* <div className="flex flex-col items-center gap-6 w-full lg:w-[240px]"> */}
            {/* Espacio reservado para mantener el diseño */}
            {/* </div> */}
            
         {/* Carpetas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full justify-items-center">
            {folders.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFolder(label)}
                className="flex flex-col items-center focus:outline-none transition-transform hover:scale-110 hover:text-[#00b2ff]"
              >
                <div className="w-16 h-14 mb-5 text-white transition-transform">
                  <FolderIcon className="w-full h-full transition-transform hover:text-[#00b2ff]" />
                </div>
                <span className="text-sm sm:text-base">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeFolder && (
        <div className="absolute inset-0 bg-[#135078]/60 flex items-center justify-center z-50 overflow-y-auto py-12">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[40rem] text-center max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">{activeFolder}</h2>

            {/* Botón para seleccionar documentos siempre visible */}
            <label className="inline-block mb-6">
              <span className="bg-[#00b2ff] text-white px-4 py-2 rounded shadow transition-transform hover:bg-[#008ecc] hover:scale-105 cursor-pointer inline-block">
                Seleccionar documento
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleAgregarArchivo}
                  className="hidden"
                />
              </span>
            </label>

            {archivosPorCarpeta[activeFolder]?.length > 0 ? (
              <ul className="text-left text-sm max-h-60 overflow-y-auto space-y-2 border-t border-gray-200 pt-4">
                {archivosPorCarpeta[activeFolder].map((file, index) => (
                  <li key={index} className="flex items-center justify-between gap-2 p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <DocumentIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span 
                        className="break-words cursor-pointer hover:text-blue-600 flex-1"
                        onClick={() => handleAbrirArchivo(file)}
                        title="Click para abrir el archivo"
                      >
                        {file.name}
                      </span>
                    </div>
                    {/* Botón eliminar siempre visible */}
                    <button
                      onClick={() => handleEliminarArchivo(activeFolder, index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors flex-shrink-0"
                      title="Eliminar archivo"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic text-gray-600 mt-4">No hay archivos en esta carpeta.</p>
            )}

            <button
              onClick={() => setActiveFolder(null)}
              className="mt-8 bg-[#135078] text-white px-6 py-2 rounded hover:bg-[#0e3f5f] hover:scale-105 transition-transform"
            >
              Cerrar
            </button>
          </div>
        </div>
    )}

    </div>
  );
}

export default Alumno;