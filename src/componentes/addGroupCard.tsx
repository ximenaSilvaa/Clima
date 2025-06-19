import { PlusCircleIcon } from '@heroicons/react/24/solid'

function AddGroupCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-200 rounded-xl shadow-md text-gray-600 cursor-pointer hover:shadow-lg transition min-w-[360px] min-h-[480px]"
      onClick={onClick}
    >
      <PlusCircleIcon className="h-20 w-20 text-gray-400" />
      <span className="mt-4 text-lg font-medium">Agregar nuevo grupo</span>
    </div>
  )
}

export default AddGroupCard
