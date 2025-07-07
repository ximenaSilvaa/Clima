import { useState } from 'react'
import GroupCard from '../componentes/GroupCard'
import { groups } from '../types/data'
import { GroupInformation } from '../types/types'
import { Shift } from '../types/types'
import Navbar from '../componentes/Navbar'
import AddGroupCard from '../componentes/addGroupCard'
import ModalAddGrupo from '../componentes/modalAddGroup'
import GroupFilter from '../componentes/groupFilter'

function Grupos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [currentShift, setCurrentShift] = useState<Shift | "">("");
  const [nameIncluded, setNameIncluded] = useState("");
  const [teacherIncluded, setTeacherIncluded] = useState("");

  // Filtro general
  function filterGroups(
    groups: GroupInformation[],
    shift?: Shift | "",
    nameIncludes?: string,
    teacherIncludes?: string,
  ): GroupInformation[] {
    return groups.filter(group => {
      const matchesShift = shift ? group.shift === shift : true;
      const matchesName = nameIncludes
        ? group.groupName.toLowerCase().includes(nameIncludes.toLowerCase())
        : true;
      const matchesTeacher = teacherIncludes
        ? group.teacher.toLowerCase().includes(teacherIncludes.toLowerCase())
        : true;
      return matchesShift && matchesName && matchesTeacher;
    });
  }

  function handleClearFilters() {
    setCurrentShift("");
    setNameIncluded("");
    setTeacherIncluded("");
  }

  return (
    <div className="h-auto w-auto bg-primary flex flex-col">
      <Navbar />

      <div className="text-center mt-20 mb-20">
        <h2 className="text-white text-4xl font-bold">Grupos</h2>
      </div>

      <div className="flex flex-row items-start justify-start min-h-screen w-full py-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10">
          {filterGroups(groups, currentShift, nameIncluded, teacherIncluded).map((group) => (
            <GroupCard key={group.groupName} group={group} />
          ))}
          <AddGroupCard onClick={() => setModalAbierto(true)} />
        </div>

        <div className="pr-10">
          <GroupFilter
            name={nameIncluded}
            teacher={teacherIncluded}
            shift={currentShift}
            onNameChange={setNameIncluded}
            onTeacherChange={setTeacherIncluded}
            onShiftChange={setCurrentShift}
            onClear={handleClearFilters}
          />
        </div>
      </div>

      {modalAbierto && (
        <ModalAddGrupo onClose={() => setModalAbierto(false)} />
      )}
    </div>
  );
}

export default Grupos;
