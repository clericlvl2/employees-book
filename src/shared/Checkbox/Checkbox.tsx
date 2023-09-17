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
        className="h-5 w-5 rounded border-2 border-neutral-400 bg-neutral-200 checked:bg-green-700/80 checked:hover:bg-green-700/80 focus:ring-offset-2 focus:ring-offset-neutral-200 focus:checked:bg-green-700/80 dark:border-green-800 dark:bg-neutral-800 dark:checked:bg-green-800 dark:checked:hover:bg-green-800  dark:focus:ring-offset-neutral-800 dark:focus:checked:bg-green-800"
        type="checkbox"
      />
      <span>{text}</span>
    </label>
  </>
);

export default Checkbox;
