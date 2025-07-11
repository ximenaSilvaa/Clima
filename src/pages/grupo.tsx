import StudentCard from '../componentes/Student';
import { StudentInformation } from '../types/types';
import { GroupInformation } from '../types/types';
import Navbar from '../componentes/Navbar';
import AddStudentCard from '../componentes/addStudentCard';
import { useState } from 'react';
import ModalAddStudent from '../componentes/modalAddStudent';
import StudentFilter from '../componentes/studentFilter';
import Hide from '../componentes/hide'

interface GrupoProps {
  group: GroupInformation;
}

function Grupo({ group }: GrupoProps) {
    const [modalAbierto, setModalAbierto] = useState(false)

    const [nameIncluded, setNameIncluded] = useState("");
    const [lastNameIncluded, setLastNameIncluded] = useState("");
    const [listIncluded, setListIncluded] = useState(0);

    // Filtro general
    function filterStudents(
    students: StudentInformation[],
    list?: number,
    name?: string,
    lastName?: string,
    ): StudentInformation[] {
        return students.filter(student => {
            const matchesList = list ? student.lista === list : true;
            const matchesName = name
            ? student.studentName.toLowerCase().includes(name.toLowerCase())
            : true;
            const matchesLastName = lastName
            ? student.studentLastName.toLowerCase().includes(lastName.toLowerCase())
            : true;
            return matchesList && matchesName && matchesLastName;
        });
    }

    function clearFilters() {
        setNameIncluded("");
        setLastNameIncluded("");
        setListIncluded(0);
    }

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Navbar/>

            <div className="text-center mt-20 mb-20">
                <h2 className="text-white text-4xl font-semibold">Te encuentras en el grupo {group.groupName} </h2>
            </div>

            {/* contenido centrado */}
            <div className="flex flex-row items-start justify-start min-h-screen w-full py-10 px-20">
                
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-4 min-w-2/3">
                    {
                        filterStudents(group.students, listIncluded, nameIncluded, lastNameIncluded).map((student: StudentInformation) => (
                            <StudentCard student={student}/>
                        ))
                    }

                    <AddStudentCard onClick={() => setModalAbierto(true)}/>
                </div>

                <div className="pl-20">
                    <StudentFilter
                        name={nameIncluded}
                        lastName={lastNameIncluded}
                        list={listIncluded}
                        onNameChange={setNameIncluded}
                        onLastNameChange={setLastNameIncluded}
                        onListChange={setListIncluded}
                        onClear={clearFilters}
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
