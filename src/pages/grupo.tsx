import StudentCard from '../componentes/Student';
import { StudentInformation } from '../types/types';
import { GroupInformation } from '../types/types';
import Navbar from '../componentes/Navbar';
import AddStudentCard from '../componentes/addStudentCard';
import { useState } from 'react';
import ModalAddStudent from '../componentes/modalAddStudent';
import GroupFilter from '../componentes/groupFilter';
import { Shift } from '../types/types';

interface GrupoProps {
  group: GroupInformation;
}

function Grupo({ group }: GrupoProps) {
    const [modalAbierto, setModalAbierto] = useState(false)
    const [currentShift, setCurrentShift] = useState<Shift | "">("");
    const [nameIncluded, setNameIncluded] = useState("");
    const [teacherIncluded, setTeacherIncluded] = useState("");

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Navbar/>

            <div className="text-center mt-20 mb-20">
                <h2 className="text-white text-4xl font-semibold">Te encuentras en el grupo A </h2>
            </div>

            {/* contenido centrado */}
            <div className="flex flex-row items-start justify-start min-h-screen w-full py-10 px-20">
                
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-4 min-w-2/3">
                    {
                        group.students.map((student: StudentInformation) => (
                            <StudentCard student={student}/>
                        ))
                    }

                    <AddStudentCard onClick={() => setModalAbierto(true)}/>
                </div>

                <div className="pl-20">
                    <GroupFilter
                        name={nameIncluded}
                        teacher={teacherIncluded}
                        shift={currentShift}
                        onNameChange={setNameIncluded}
                        onTeacherChange={setTeacherIncluded}
                        onShiftChange={setCurrentShift}
                        onClear={()=>{}}
                    />
                </div>
            </div>

            {modalAbierto && (
                <ModalAddStudent onClose={() => setModalAbierto(false)} />
            )}


        </div>
    )
}
  

export default Grupo
