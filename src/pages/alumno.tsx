import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StudentInformation } from '../types/types';
import {
  FolderIcon,
  UserCircleIcon,
  PlusCircleIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

function Alumno() {
  const location = useLocation();
  const navigate = useNavigate();
  const { student }: { student: StudentInformation } = location.state || {};  


  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const folders = ['Reportes', 'PEI', 'Expediente', 'Pagos'];

  if(student){
      return (
      <div className="min-h-screen bg-[#135078] text-white font-sans w-full overflow-x-hidden relative">

        {/* Barra de navegación - más alta */}
        <div className="w-full h-20 bg-gray-200" />

        <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-20 py-12">

          {/* Título */}
          <h1 className="text-center text-4xl font-serif mt-10 mb-20">
            Alumno: {student?.studentName}
          </h1>

          {/* Línea superior */}
          <div className="border-t border-white mb-10" />

          {/* Sección principal */}
          <div className="flex flex-col lg:flex-row items-stretch w-full gap-14 min-h-[300px]">

            {/* Izquierda: Avatar y botones */}
            <div className="flex flex-col items-center lg:items-center gap-6 w-full lg:w-[240px]">

              {/* Icono de usuario */}
              <UserCircleIcon className="w-80 h-50 text-white" />

              {/* Botones */}
              <div className="flex gap-10 mt-2">
                <div className="flex flex-col items-center text-xs">
                  <PlusCircleIcon className="w-8 h-8 text-[#00b2ff] mb-1" />
                  Agregar
                </div>
                <div className="flex flex-col items-center text-xs">
                  <PencilSquareIcon className="w-8 h-8 text-[#00b2ff] mb-1" />
                  Editar
                </div>
              </div>
            </div>

            {/* Línea vertical visible */}
            <div className="hidden lg:block w-px bg-white self-stretch" />

            {/* Derecha: Datos del alumno */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="font-serif text-xl font-bold mb-1">Matrícula</p>
                <p className="text-lg">AO178666</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold mb-1">Condición</p>
                <p className="text-lg">Regular</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold mb-1">Fecha de nacimiento</p>
                <p className="text-lg">03/25/1980</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold mb-1">Estatus de pago</p>
                <div className="bg-purple-600 px-4 py-1 rounded-full w-fit text-sm mt-1">
                  Aceptado
                </div>
              </div>
              <div>
                <p className="font-serif text-xl font-bold mb-1">Grupo</p>
                <p className="text-lg">5B</p>
              </div>
            </div>
          </div>

          {/* Línea inferior */}
          <div className="border-t border-white mt-10 mb-6" />

          {/* Carpetas */}
          <div className="flex justify-center gap-20 flex-wrap">
            {folders.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFolder(label)}
                className="flex flex-col items-center focus:outline-none"
              >
                <div className="w-16 h-14 mb-2 text-white">
                  <FolderIcon className="w-full h-full" />
                </div>
                <span className="text-sm sm:text-base">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeFolder && (
          <div className="absolute inset-0 bg-[#135078]/95 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded shadow-lg w-80 text-center">
              <h2 className="text-xl font-bold mb-4">{activeFolder}</h2>
              <p>Contenido del documento "{activeFolder}"</p>
              <button
                onClick={() => setActiveFolder(null)}
                className="mt-6 bg-[#135078] text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    );

  } else {
    return(
      <>
        <h1>No hay suficiente data</h1>
        {/* Verificar aqui si hay sesion iniciada para regresar a grupos sino regresar a login */}
        {setTimeout(() => {
            navigate('/login');  // Redirige a la página de login después de un retraso
        }, 1000)}
      </>
    );
  }
}

export default Alumno;
