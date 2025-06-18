import { Link } from 'react-router-dom';
import { StudentInformation } from '../types/types';

interface StudentCardProps {
    student: StudentInformation;
}

function StudentCard({student}:StudentCardProps) {

    return (
        <Link to="/Alumno" state={{ student }} className="no-underline">
            <div className='flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] h-auto'>
                {/* Header */}
                <div className="flex flex-row items-center gap-3 p-4">
                    <img 
                        src={student.profilePhoto}
                        alt="Avatar" 
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                        <div className='text-lg font-semibold'>{student.studentName}</div>
                        <div className='text-sm text-gray-600'>{student.lista}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StudentCard
