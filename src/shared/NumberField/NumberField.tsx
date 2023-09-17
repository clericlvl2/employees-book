import { ArrowButton } from '../ArrowButton';

export interface NumberFieldProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  placeholder: string;
  min: number;
  max: number;
}

const NumberField = ({
  value,
  onChange,
  placeholder,
  min,
  max,
}: NumberFieldProps) => {
  const handleIncrement = () => {
    if (value === undefined) {
      onChange(min);
    } else if (value + 1 > max) {
      onChange(max);
    } else if (value + 1 < min) {
      onChange(min);
    } else {
      onChange(value + 1);
    }
  };
  const handleDecrement = () => {
    if (value === undefined) {
      onChange(min);
    } else if (value - 1 < min) {
      onChange(min);
    } else {
      onChange(value - 1);
    }
  };

  const handleFocus = (value: string) => {
    if (value === '') {
      return;
    } else if (Number(value) < min) {
      onChange(min);
    } else if (Number(value) > max) {
      onChange(max);
    }
  };

  return (
    <div className="grid-row-1 grid grid-flow-col grid-cols-[1fr_24px_24px] rounded-md p-0">
      <input
        onBlur={e => handleFocus(e.target.value)}
        value={value ?? ''}
        onChange={e => {
          const stringNum = e.target.value;
          if (!stringNum.match(/[^0-9]/)) {
            e.preventDefault();
            onChange(stringNum !== '' ? Number(stringNum) : undefined);
          }
        }}
        className="col-start-1 col-end-2 w-full rounded-l-md border-[1px] border-r-0 border-neutral-400 bg-inherit bg-neutral-200 px-2 py-1 text-black ring-0 focus:border-neutral-400 focus:ring-2 focus:ring-blue-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-neutral-600"
        inputMode="numeric"
        maxLength={2}
        minLength={2}
        placeholder={placeholder}
      />
      <ArrowButton
        type="button"
        className="col-start-2 col-end-3 border-r-[1px] border-neutral-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-neutral-200 focus-visible:outline-0 dark:border-neutral-700/80 dark:focus:ring-offset-neutral-800"
        onClick={handleIncrement}
      />
      <ArrowButton
        type="button"
        direction="down"
        className="col-start-3 col-end-4 rounded-r-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-neutral-200 focus-visible:outline-0 dark:focus:ring-offset-neutral-800"
        onClick={handleDecrement}
      />
    </div>
  );
};

export default NumberField;
