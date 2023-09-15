import { useContext } from 'react';
import { ActiveWorkerIdContext, WorkersActionsContext } from '../../../context';
import { Employee } from '../../../utils/types.ts';
import { clsx } from 'clsx';

export interface RowProps {
  worker: Employee;
}

export const Row = ({ worker }: RowProps) => {
  const activeWorkerId = useContext(ActiveWorkerIdContext);
  const { pickWorker } = useContext(WorkersActionsContext);
  const isActive = activeWorkerId && activeWorkerId === worker.id;

  const handlePick = () => {
    const newId = isActive ? undefined : worker.id;
    return pickWorker?.(newId);
  };

  return (
    <tr
      className={clsx(
        `cursor-pointer transition-colors duration-200`,
        isActive
          ? 'bg-green-700/40 dark:bg-green-900/80'
          : 'hover:bg-neutral-700/20 dark:hover:bg-neutral-700'
      )}
      onClick={handlePick}
    >
      <td className="my-1 whitespace-nowrap px-2 align-text-top">
        {worker.name}
      </td>
      <td className="my-1 px-2 align-text-top">{worker.age}</td>
      <td className="my-1 whitespace-nowrap px-2 align-text-top">
        {worker.subscription}
      </td>
      <td className="my-1 whitespace-nowrap px-2 align-text-top">
        {worker.isEmployed ? 'Employed' : 'Not Employed'}
      </td>
    </tr>
  );
};

export default Row;
