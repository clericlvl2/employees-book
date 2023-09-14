import { ChangeEvent } from 'react';

export interface CheckboxProps {
  isChecked: boolean;
  text?: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ text, isChecked, name, onChange }: CheckboxProps) => (
  <>
    <label className="hover: flex cursor-pointer items-center gap-2">
      <input
        checked={isChecked}
        onChange={onChange}
        name={name}
        className="checked::hover:bg-neutral-800 h-5 w-5 rounded border-2 border-green-900 bg-neutral-800 checked:bg-green-900 checked:hover:bg-green-900 focus:ring-1 focus:ring-white focus:checked:bg-green-900"
        type="checkbox"
      />
      <span className="text-white">{text}</span>
    </label>
  </>
);

export default Checkbox;
