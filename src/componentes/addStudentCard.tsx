import { PlusCircleIcon } from '@heroicons/react/24/solid'

function AddStudentCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="flex flex-col bg-gray-200 rounded-xl text-gray-950 shadow-md overflow-hidden w-[100px] h-auto items-center justify-center cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <PlusCircleIcon className="h-16 w-16 text-gray-400" />
    </div>
  )
}

export default AddStudentCard
