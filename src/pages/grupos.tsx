import { useState } from 'react'
import GroupCard from '../componentes/GroupCard'
import { groups } from '../types/data'
import Navbar from '../componentes/Navbar'
import AddGroupCard from '../componentes/addGroupCard'
import ModalAddGrupo from '../componentes/modalAddGroup'

function Grupos() {
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <div className="h-auto w-auto bg-primary flex flex-col">
      <Navbar />

      <div className="text-center mt-20 mb-20">
        <h2 className="text-white text-4xl font-bold">Grupos</h2>
      </div>

      <div className="flex flex-row items-start justify-start min-h-screen w-full py-10">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10">
          {groups.map((group) => (
            <GroupCard group={group} />
          ))}

          <AddGroupCard onClick={() => setModalAbierto(true)} />
        </div>

        <div className="pr-10">
          {/* Aqui tengo que agregar todo lo de bajar y asi */}
          <AddGroupCard onClick={() => setModalAbierto(true)} />
        </div>

      </div>

      {modalAbierto && (
        <ModalAddGrupo onClose={() => setModalAbierto(false)} />
      )}
    </div>
  )
}

export default Grupos
