import { useState } from 'react';
import {
  FolderIcon,
  UserCircleIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import Navbar from '../componentes/Navbar';

function Alumno() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(true);
  const [archivosPorCarpeta, setArchivosPorCarpeta] = useState<{ [key: string]: File[] }>({});
  const [matricula, setMatricula] = useState("AO178666");
  const [edad, setEdad] = useState("15");
  const [fechaNacimiento, setFechaNacimiento] = useState("03/25/1980");
  const [estatusPago, setEstatusPago] = useState("Pagado");
  const [turno, setTurno] = useState("Matutino");
  const [grupo, setGrupo] = useState("5B");
  const [studentName, setStudentName] = useState("AlumnoA");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [folderNames, setFolderNames] = useState(['Reportes', 'PEI', 'Expediente', 'Pagos']);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteFileInfo, setDeleteFileInfo] = useState<{carpeta: string, index: number, fileName: string} | null>(null);

  const folders = folderNames;

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
    setShowDeleteConfirm(false);
    setDeleteFileInfo(null);
  };

  const handleDeleteClick = (carpeta: string, index: number, fileName: string) => {
    setDeleteFileInfo({ carpeta, index, fileName });
    setShowDeleteConfirm(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteFileInfo(null);
  };

  const handleAbrirArchivo = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
    // Limpiamos el URL después de un tiempo para liberar memoria
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFolderNameChange = (index: number, newName: string) => {
    const updatedNames = [...folderNames];
    updatedNames[index] = newName;
    setFolderNames(updatedNames);
  };

  const handleAddFolder = () => {
    if (newFolderName.trim()) {
      setFolderNames([...folderNames, newFolderName.trim()]);
      setNewFolderName("");
      setShowAddFolderModal(false);
    }
  };

  const handleCancelAddFolder = () => {
    setNewFolderName("");
    setShowAddFolderModal(false);
  };

  return (
    <div className="min-h-screen bg-[#135078] text-white font-sans w-full overflow-x-hidden relative">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-20 py-12">
        {/* Título */}
        <h1 className="text-center text-4xl font-serif mt-10 mb-20">
          Alumno: {editMode ? (
            <input 
              type="text" 
              value={studentName} 
              onChange={(e) => setStudentName(e.target.value)} 
              className="bg-white text-black px-2 py-1 rounded border border-gray-300 text-4xl font-serif"
            />
          ) : (
            studentName
          )}
        </h1>

        {/* Línea superior */}
        <div className="border-t border-white mb-10" />

        {/* Sección principal */}
        <div className="flex flex-col lg:flex-row items-stretch w-full gap-14 min-h-[300px]">
          {/* Izquierda: Avatar y botones */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-[240px]">
            <div className="relative">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-80 h-80 rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="w-80 h-80 text-white" />
              )}
              {editMode && (
                <label className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#00b2ff] text-white px-3 py-1 rounded cursor-pointer hover:bg-[#008ecc] transition-colors text-sm">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  Upload Image
                </label>
              )}
            </div>

            <button
              onClick={() => setEditMode(!editMode)}
              className="flex flex-col items-center text-xs mt-2 focus:outline-none transition-transform hover:scale-110 hover:text-[#00b2ff]"
            >
              <PencilSquareIcon className="w-8 h-8 mb-1 text-[#00b2ff] transition-transform" />
              <span>{editMode ? "Guardar" : "Editar"}</span>
            </button>
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
              <p className="font-serif text-xl font-bold mb-1">Edad</p>
              {editMode ? (
                <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300" />
              ) : <p className="text-lg">{edad}</p>}
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
              <p className="font-serif text-xl font-bold mb-1">Turno</p>
              {editMode ? (
                <select value={turno} onChange={(e) => setTurno(e.target.value)} className="bg-white text-black px-2 py-1 rounded border border-gray-300">
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Terapia Individual">Terapia Individual</option>
                </select>
              ) : (
                <p className="text-lg">{turno}</p>
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

        {/* Sección de carpetas */}
        <div className="flex flex-col lg:flex-row items-stretch w-full gap-14 mt-10 min-h-[300px]">
          {/* Izquierda: Botón Agregar */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-[240px]">
            <button
              onClick={() => setShowAddFolderModal(true)}
              className="flex flex-col items-center text-xs mt-2 focus:outline-none transition-transform hover:scale-110 hover:text-[#00b2ff]"
            >
              <PlusCircleIcon className="w-8 h-8 text-[#00b2ff] mb-1 transition-transform" />
              <span>Agregar</span>
            </button>
          </div>
            
          {/* Derecha: Carpetas */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {folders.map((label, index) => (
              <div key={label} className="flex flex-col items-center">
                <button
                  onClick={() => setActiveFolder(label)}
                  className="flex flex-col items-center focus:outline-none transition-transform hover:scale-110 hover:text-[#00b2ff]"
                >
                  <div className="w-16 h-14 mb-5 text-white transition-transform">
                    <FolderIcon className="w-full h-full transition-transform hover:scale-110 hover:text-[#00b2ff]" />
                  </div>
                </button>
                {editMode ? (
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => handleFolderNameChange(index, e.target.value)}
                    className="bg-white text-black px-2 py-1 rounded border border-gray-300 text-sm sm:text-base text-center w-full max-w-[100px]"
                  />
                ) : (
                  <span className="text-sm sm:text-base">{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para agregar carpeta */}
      {showAddFolderModal && (
        <div className="absolute inset-0 bg-[#135078]/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold mb-6">Agregar Nueva Carpeta</h2>
            <p className="text-gray-600 mb-4">¿Cuál quieres que sea el nombre de la carpeta?</p>
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Nombre de la carpeta"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#00b2ff] focus:border-transparent"
              autoFocus
            />
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleCancelAddFolder}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddFolder}
                className="px-6 py-2 bg-[#00b2ff] text-white rounded-lg hover:bg-[#008ecc] transition-colors"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}

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
                onClick={() => handleDeleteClick(activeFolder, index, file.name)}
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

      {/* Popup de confirmación de eliminación */}
      {showDeleteConfirm && deleteFileInfo && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60]">
          <div className="bg-white text-black p-6 rounded-xl shadow-2xl w-80 text-center mx-4">
            <div className="mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <XMarkIcon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Eliminar archivo?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Esta acción no se puede deshacer
              </p>
              <p className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border truncate">
                {deleteFileInfo.fileName}
              </p>
            </div>
            
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => deleteFileInfo && handleEliminarArchivo(deleteFileInfo.carpeta, deleteFileInfo.index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Alumno;