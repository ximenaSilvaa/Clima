import StudentCard from '../componentes/Student';
import { useLocation } from 'react-router-dom'
import { StudentInformation } from '../types/types';
import Navbar from '../componentes/Navbar';
import AddStudentCard from '../componentes/addStudentCard';
import { useState } from 'react';
import ModalAddStudent from '../componentes/modalAddStudent';

interface StudentData {
  nombre: string;
  matricula: string;
  edad: string;
  estatus: string;
  fechaNacimiento: string;
  foto: string | null;
}

function Grupo() {
    const location = useLocation();
    const { students: initialStudents } = location.state || {};
    const [students, setStudents] = useState<StudentInformation[]>(initialStudents || []);
    const [modalAbierto, setModalAbierto] = useState(false);

    const handleAddStudent = (studentData: StudentData) => {
        // Convert StudentData to StudentInformation format
        const newStudent: StudentInformation = {
            studentName: studentData.nombre,
            studentLastName: '', // We don't have lastName in the form, so keeping empty
            lista: students.length + 1, // Assign next number
            profilePhoto: studentData.foto || '/default-avatar.png' // Use uploaded photo or default
        };
        
        setStudents([...students, newStudent]);
    };

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Navbar/>

            <div className='text-center mt-20 mb-20'>
                <h2 className="text-white text-4xl font-semibold">Te encuentras en el grupo A </h2>
            </div>

            {/* contenido centrado */}
            <div className="flex flex-col items-center justify-start min-h-screen w-full py-10 px-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-4 w-full">
                    {
                    students.map((student: StudentInformation) => (
                        <StudentCard student={student}/>
                    ))
                    }

                    <AddStudentCard onClick={() => setModalAbierto(true)}/>


                </div>
            </div>

            {modalAbierto && (
                <ModalAddStudent 
                    onClose={() => setModalAbierto(false)} 
                    onAddStudent={handleAddStudent}
                />
            )}


        </div>
    )
}
  

export default Grupo
