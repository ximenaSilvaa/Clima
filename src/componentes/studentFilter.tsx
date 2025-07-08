
type Props = {
  name: string;
  lastName: string;
  list: number;
  onNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onListChange: (value: number) => void;
  onClear: () => void;
};

function StudentFilter({
  name,
  lastName,
  list,
  onNameChange,
  onLastNameChange,
  onListChange,
  onClear
}: Props) {
  return (
    <div className="flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] h-auto pb-4">
      {/* Header */}
      <div className="flex flex-row items-center gap-3 p-4 justify-between">
        <div className="text-2xl font-semibold">Filtros</div>
        <button className="cursor-pointer text-sm text-red-600 hover:underline" onClick={onClear}>
          Clear All
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-300 w-full" />

      {/* Cuerpo */}
      <div className="flex flex-col flex-grow justify-between p-4">
        {/* Input: Nombre */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del alumno</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
            placeholder="Ej. 25M1"
          />
        </div>

        {/* Input: Maestro */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Apellido del alumno</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
            placeholder="Ej. Miss Pérez"
          />
        </div>

        {/* Input: Numero de lista */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">No. Lista</label>
          <input
            type="number"
            value={list}
            onChange={(e) => onListChange(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
            placeholder="4"
          />
        </div>
      </div>
    </div>
  );
}

export default StudentFilter;
