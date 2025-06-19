import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GroupInformation } from '../types/types';
import EditGroup from './EditGroup';

interface GroupCardProps {
  group: GroupInformation;
}

function GroupCard({ group }: GroupCardProps) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<GroupInformation>(group);

  function handleSave(updatedGroup: GroupInformation) {
    setCurrentGroup(updatedGroup);
  }
    function handleDelete() {
    setIsEditing(false);
    alert(`Grupo "${currentGroup.groupName}" borrado`);
  }

  return (
    <>
      <div className="flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] min-h-[480px]">
        {/* Header */}
        <div className="flex flex-row items-center gap-3 p-4">
          <img
            src={currentGroup.profileImageUrl}
            alt="Avatar"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-semibold">{currentGroup.groupName}</div>
            <div className="text-sm text-gray-600">{currentGroup.teacher}</div>
          </div>
        </div>

        {/* Imagen */}
        <img
          src={currentGroup.imageUrl}
          alt="Main"
          className="w-full h-50 object-cover"
        />

        {/* Cuerpo */}
        <div className="flex flex-col flex-grow justify-between p-4">
          <div>
            <div className="text-lg font-semibold">{currentGroup.groupName}</div>
            <div className="text-sm text-gray-600">{currentGroup.teacher}</div>
            <p className="mt-2 text-sm">{currentGroup.description}</p>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="bg-white text-cyan-600 border border-cyan-400 px-4 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => navigate('/grupo', { state: { students: currentGroup.students } })}
            >
              Visualizar
            </button>
            <button
              className="bg-white text-cyan-600 border border-cyan-400 px-4 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <EditGroup
          group={currentGroup}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
           onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default GroupCard;
