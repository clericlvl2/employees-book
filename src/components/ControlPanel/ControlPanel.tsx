import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Checkbox, Toggle } from '../../shared';
import {
  ActiveWorkerIdContext,
  WorkersActionsContext,
  WorkersContext,
} from '../../context';
import { SUBSCRIPTION_OPTIONS, WorkerForm } from '../../utils/types.ts';
import { DEFAULT_WORKER_FORM } from '../../utils/constants.ts';
import { generateId } from '../../utils/helpers.ts';
import { validateForm } from '../../utils/validation.ts';

// TODO не проверяет поля которые вообще не добавлялись
// TODO сделать новый select
// TODO сделать новый input number
// TODO добавить тултип для пояснения

const ControlPanel = () => {
  const { addWorker, deleteWorker, pickWorker, editWorkerData } = useContext(
    WorkersActionsContext
  );
  const activeWorkerId = useContext(ActiveWorkerIdContext);
  const workers = useContext(WorkersContext);
  const [form, setForm] = useState<WorkerForm>(DEFAULT_WORKER_FORM);
  const [isDark, setIsDark] = useState(true);

  const hasActiveWorker = activeWorkerId !== undefined;

  useEffect(() => {
    if (hasActiveWorker) {
      updateFormFields(activeWorkerId);
    } else {
      setForm(DEFAULT_WORKER_FORM);
    }
  }, [activeWorkerId]);

  const updateFormFields = (pickedWorkerId: number) => {
    const pickedWorker = workers.find(worker => worker.id === pickedWorkerId);

    if (!pickedWorker) {
      return;
    }

    const { id, ...formData } = pickedWorker;
    setForm(formData);
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const handleEmploymentChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm(state => ({ ...state, ['isEmployed']: e.target.checked }));

  const toggleDarkMode = () => setIsDark(state => !state);

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
      alert('Some fields are not filled. Please, try again.');
      return;
    }

    if (addWorker === undefined) {
      alert('Error. Please, try again.');
      return;
    }

    addWorker({ ...form, id: generateId() });
  };
  return (
    <div>
      <div className="flex w-fit flex-col gap-6 rounded-md border-2 border-neutral-600 p-2 pb-4">
        <div>
          <div className="mb-4 w-full bg-neutral-600 px-2">
            <h2 className="text-l font-bold">Employee Form</h2>
          </div>
          <form
            className="mb-4 flex flex-col gap-4 text-black"
            onSubmit={handleSubmit}
          >
            <label>
              <input
                value={form.name ?? ''}
                onChange={handleFormChange}
                className="w-full rounded-md border-2 border-neutral-600 bg-neutral-800 px-2 py-1 text-white"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label>
              <input
                value={form.age ?? ''}
                onChange={handleFormChange}
                className="w-full rounded-md border-2 border-neutral-600 bg-neutral-800 px-2 py-1 text-white"
                type="number"
                name="age"
                placeholder="Age"
                min={18}
                max={100}
              />
            </label>
            <label>
              <select
                className="w-full rounded-md border-2 border-neutral-600 bg-neutral-800 px-2 py-1 text-white"
                name="subscription"
                onChange={handleFormChange}
                value={form.subscription}
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
              onChange={handleEmploymentChange}
              text="Employed"
              name="isEmployed"
            />
            {!hasActiveWorker && (
              <div className="flex min-h-[4rem] flex-col gap-4">
                <button
                  className="rounded-md border-none bg-neutral-600 px-2 py-1 text-white"
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
                className="rounded-md border-none bg-neutral-600 px-2 py-1 text-white transition-opacity disabled:pointer-events-none disabled:opacity-40"
              >
                Edit
              </button>
              <button
                disabled={!hasActiveWorker}
                onClick={handleDelete}
                className="rounded-md border-none bg-neutral-600 px-2 py-1 text-white transition-opacity disabled:pointer-events-none disabled:opacity-40"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Toggle
            isChecked={isDark}
            onChange={toggleDarkMode}
            text="Dark Mode"
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
