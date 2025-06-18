import GroupCard from '../componentes/GroupCard';
import { groups } from '../types/data';
import Navbar from '../componentes/Navbar';

function Grupos() {

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Navbar/>
            

            <div className='text-center mt-20 mb-20'>
                <h2 className="text-white text-4xl font-bold">Grupos </h2>
            </div>

            {/* contenido centrado */}
            <div className="flex flex-col items-center justify-start min-h-screen w-full py-10 px-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 w-full">
                    {
                    groups.map((group) => (
                        <GroupCard group={group} />
                    ))
                    }

                </div>
            </div>


        </div>
    )
}
  

export default Grupos
