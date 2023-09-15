import { ChangeEvent } from 'react';

export interface CheckboxProps {
  isChecked: boolean;
  text?: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ text, isChecked, name, onChange }: CheckboxProps) => (
  <>
    <label className="hover: flex cursor-pointer items-center gap-2 text-black dark:text-white">
      <input
        checked={isChecked}
        onChange={onChange}
        name={name}
        className="h-5 w-5 rounded border-2 border-green-700 bg-neutral-200 checked:bg-green-700/80 checked:hover:bg-green-700/80 focus:checked:bg-green-700/80 dark:border-green-700/80 dark:bg-neutral-800 dark:checked:bg-green-800 dark:checked:hover:bg-green-800  dark:focus:ring-1 dark:focus:checked:bg-green-900"
        type="checkbox"
      />
      <span>{text}</span>
    </label>
  </>
);

export default Checkbox;
