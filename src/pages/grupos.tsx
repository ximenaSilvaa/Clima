import GroupCard from '../componentes/GroupCard';
import Header from '../componentes/Header';
import { groups } from '../types/data';


function Grupos() {
    
    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Header />

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
