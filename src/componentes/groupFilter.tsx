import { Shift } from "../types/types";

type Props = {
  name: string;
  teacher: string;
  shift: Shift | "";
  onNameChange: (value: string) => void;
  onTeacherChange: (value: string) => void;
  onShiftChange: (value: Shift | "") => void;
  onClear: () => void;
};

function GroupFilter({
  name,
  teacher,
  shift,
  onNameChange,
  onTeacherChange,
  onShiftChange,
  onClear
}: Props) {
  return (
    <div className="flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] h-auto pb-4">
      {/* Header */}
      <div className="flex flex-row items-center gap-3 p-4 justify-between">
        <div className="text-2xl font-semibold">Filters</div>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del grupo</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del maestro</label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => onTeacherChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
            placeholder="Ej. Miss Pérez"
          />
        </div>

        {/* Picker: Turno */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Turno</label>
          <select
            value={shift}
            onChange={(e) => onShiftChange(e.target.value as Shift)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
          >
            <option value="">Selecciona un turno</option>
            <option value={Shift.Morning}>Matutino</option>
            <option value={Shift.Evening}>Vespertino</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default GroupFilter;
