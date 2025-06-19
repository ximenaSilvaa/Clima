import React, { useState, useEffect } from 'react';
import { GroupInformation } from '../types/types';
import { TrashIcon } from '@heroicons/react/24/solid';

interface EditGroup {
  group: GroupInformation;
  onClose: () => void;
  onSave: (updatedGroup: GroupInformation) => void;
  onDelete: () => void; 
}

function EditGroupPopup({ group, onClose, onSave, onDelete }: EditGroup) {
  const [formData, setFormData] = useState<GroupInformation>(group);

  useEffect(() => {
    setFormData(group);
  }, [group]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave(formData);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] max-w-full shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Editar Grupo</h2>
        {/* Edit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label>
            Nombre del grupo
            <input
              type="text"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </label>
          <label>
            Profesor
            <input
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </label>
          <label>
            Descripción
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              rows={3}
            />
          </label>
          <label>
            URL Imagen perfil
            <input
              type="text"
              name="profileImageUrl"
              value={formData.profileImageUrl}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </label>
          <label>
            URL Imagen principal
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </label>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
      
            <button
              type="button"
              onClick={onDelete}
              className="flex items-center gap-1 text-red-600 hover:text-red-800"
            >
              <TrashIcon className="h-5 w-5" />
              Borrar
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditGroupPopup;


