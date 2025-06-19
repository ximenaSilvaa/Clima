import { XCircleIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { useState, useRef } from 'react';

function ModalAddGrupo({ onClose }: { onClose: () => void }) {
  const [nombre, setNombre] = useState("");
  const [encargado, setEncargado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenPreview, setImagenPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-auto shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">Crear nuevo grupo</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <XCircleIcon className="h-10 w-10 text-gray-400" />
        </button>

        <div className="flex flex-col gap-3">

          {/* Nombre */}
          <div className="flex flex-row items-center w-full">
            <div className="text-lg text-gray-600 mr-4 whitespace-nowrap">Nombre del grupo:</div>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1 bg-white text-black px-2 py-1 rounded border border-gray-300 h-7"
            />
          </div>

          {/* Encargado */}
          <div className="flex flex-row gap-3">
            <div className='text-lg text-gray-600'>Nombre del encargado:</div>
            <input
              type="text"
              value={encargado}
              onChange={(e) => setEncargado(e.target.value)}
              className="bg-white text-black px-2 py-1 rounded border border-gray-300 h-7"
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-0">
            <div className='text-lg text-gray-600'>Descripción:</div>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="bg-white text-black px-2 py-1 rounded border border-gray-300 resize-none h-32 overflow-y-auto"
            />
          </div>

          {/* Imagen */}
          <div className="flex flex-col gap-0">
            <div className="text-lg text-gray-600 mb-1">Imágen:</div>

            <div className="w-full flex justify-center">
                <div
                className="border border-gray-300 rounded flex items-center justify-center cursor-pointer aspect-square max-w-sm"
                onClick={handleIconClick}
                >
                {imagenPreview ? (
                    <img
                    src={imagenPreview}
                    alt="Vista previa"
                    className="object-cover w-full h-full rounded"
                    />
                ) : (
                    <PhotoIcon className="h-24 w-24 text-gray-300" />
                )}
                </div>
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
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

export default ModalAddGrupo;
