import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Checkbox, NumberField, Toggle } from '../../shared';
import {
  ActiveWorkerIdContext,
  WorkersActionsContext,
  WorkersContext,
} from '../../context';
import { EmployeeForm, SUBSCRIPTION_OPTIONS } from '../../utils/types.ts';
import {
  DEFAULT_WORKER_FORM,
  FORM_ALERT_MESSAGE,
} from '../../utils/constants.ts';
import { checkSubscriptionValue, generateId } from '../../utils/helpers.ts';
import { validateForm } from '../../utils/validation.ts';
import { useDarkTheme } from '../../hooks';

const ControlPanel = () => {
  const [isDarkTheme, toggleDarkTheme] = useDarkTheme();
  const { addWorker, deleteWorker, pickWorker, editWorkerData } = useContext(
    WorkersActionsContext
  );
  const activeWorkerId = useContext(ActiveWorkerIdContext);
  const workers = useContext(WorkersContext);
  const [form, setForm] = useState<EmployeeForm>(DEFAULT_WORKER_FORM);

  const hasActiveWorker = activeWorkerId !== undefined;

  useEffect(() => {
    if (hasActiveWorker) {
      insertWorkerDataToForm(activeWorkerId);
    } else {
      resetForm();
    }
  }, [activeWorkerId, workers]);

  const insertWorkerDataToForm = (pickedWorkerId: number) => {
    const pickedWorker = workers.find(worker => worker.id === pickedWorkerId);

    if (!pickedWorker) {
      return;
    }

    const { id, ...formData } = pickedWorker;
    setForm(formData);
  };

  const resetForm = () => setForm(DEFAULT_WORKER_FORM);

  const handleFieldChange = <T extends keyof EmployeeForm>(
    key: T,
    value: EmployeeForm[T]
  ) => setForm(state => ({ ...state, [key]: value }));

  const handleSubscriptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;

    if (checkSubscriptionValue(newValue)) {
      handleFieldChange('subscription', newValue);
    }
  };

  const handleDelete = () => {
    if (hasActiveWorker && deleteWorker && pickWorker) {
      deleteWorker(activeWorkerId);
      pickWorker(undefined);
    }
  };

  const handleEdit = () => {
    if (hasActiveWorker && editWorkerData && pickWorker) {
      editWorkerData(activeWorkerId, form);
      pickWorker(undefined);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(form)) {
      alert(FORM_ALERT_MESSAGE);
      return;
    }

    if (addWorker) {
      addWorker({ ...form, id: generateId() });
    }
  };

  return (
    <div className="max-w-[236px]">
      <div className="flex flex-col gap-6 rounded-md border-[1px] border-neutral-400 p-2 pb-4 dark:border-neutral-600 dark:bg-neutral-800">
        <div>
          <div className="mb-4 w-full border-[1px] border-neutral-400 bg-neutral-300 px-2 dark:border-transparent dark:bg-neutral-600">
            <h2 className="text-l font-bold">Employee Form</h2>
          </div>
          <form
            className="mb-4 flex flex-col gap-4 text-black"
            onSubmit={handleSubmit}
          >
            <label>
              <input
                value={form.name ?? ''}
                onChange={e => handleFieldChange('name', e.target.value)}
                className="w-full rounded-md border-[1px] border-neutral-400 bg-neutral-200 px-2 py-1 text-black dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <NumberField
              value={form.age}
              onChange={value => handleFieldChange('age', value)}
              placeholder="Age"
              min={18}
              max={100}
            />
            <label>
              <select
                onChange={handleSubscriptionChange}
                value={form.subscription}
                name="subscription"
                className="w-full cursor-pointer rounded-md border-[1px] border-neutral-400 bg-neutral-200 px-2 py-1 text-black dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
              >
                {Object.values(SUBSCRIPTION_OPTIONS).map(option => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <Checkbox
              isChecked={form.isEmployed ?? false}
              onChange={e => handleFieldChange('isEmployed', e.target.checked)}
              text="Employed"
              name="isEmployed"
            />
            {!hasActiveWorker && (
              <div className="flex min-h-[4rem] flex-col gap-4">
                <button
                  className="cursor-pointer rounded bg-neutral-400 px-2 py-1 text-black transition-colors duration-200 hover:bg-neutral-400/80 focus:outline focus:outline-[2px] focus:outline-blue-700 active:bg-green-800 active:bg-green-800/60 disabled:pointer-events-none disabled:opacity-40 dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-600/80 dark:active:bg-green-800/50"
                  type="submit"
                >
                  Add
                </button>
              </div>
            )}
          </form>
          {hasActiveWorker && (
            <div className="flex min-h-[5rem] flex-col gap-4">
              <button
                disabled={!hasActiveWorker}
                onClick={handleEdit}
                className="cursor-pointer rounded bg-neutral-400 px-2 py-1 text-black transition-colors duration-200 hover:bg-neutral-400/80 active:bg-green-800 active:bg-green-800/60 disabled:pointer-events-none disabled:opacity-40 dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-600/80 dark:active:bg-green-800/50"
              >
                Edit
              </button>
              <button
                disabled={!hasActiveWorker}
                onClick={handleDelete}
                className="cursor-pointer rounded bg-neutral-400 px-2 py-1 text-black transition-colors duration-200 hover:bg-neutral-400/80 active:bg-green-800 active:bg-green-800/60 disabled:pointer-events-none disabled:opacity-40 dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-600/80 dark:active:bg-green-800/50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Toggle
            isChecked={isDarkTheme}
            onChange={toggleDarkTheme}
            text="Dark Mode"
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
