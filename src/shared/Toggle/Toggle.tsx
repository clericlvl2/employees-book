export interface ToggleProps {
  isChecked: boolean;
  text?: string;

  onChange: () => void;
}

const Toggle = ({ text, isChecked, onChange }: ToggleProps) => (
  <label
    htmlFor="toggle"
    className="flex cursor-pointer items-center"
    onMouseDown={e => e.preventDefault()}
  >
    <div className="relative">
      <input
        type="checkbox"
        id="toggle"
        className="peer sr-only"
        checked={isChecked}
        onChange={onChange}
      />
      <div className="block h-6 w-12 rounded-full bg-neutral-700 transition-colors duration-300 peer-checked:bg-green-900 peer-focus:ring-2 peer-focus:ring-white"></div>
      <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-neutral-800 transition-transform peer-checked:translate-x-6"></div>
    </div>
    <div className="ml-3  text-white">{text}</div>
  </label>
);

export default Toggle;
