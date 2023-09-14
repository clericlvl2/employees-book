import { useContext } from 'react';
import { ActiveWorkerIdContext, WorkersActionsContext } from '../../../context';
import { Worker } from '../../../utils/types.ts';
import { clsx } from 'clsx';

export interface RowProps {
  worker: Worker;
}

export const Row = ({ worker }: RowProps) => {
  const activeWorkerId = useContext(ActiveWorkerIdContext);
  const { pickWorker } = useContext(WorkersActionsContext);
  const handlePick = () => {
    const newId = activeWorkerId !== worker.id ? worker.id : undefined;
    return pickWorker ? pickWorker(newId) : undefined;
  };

  return (
    <tr
      className={clsx(
        `cursor-pointer transition-colors duration-200 hover:bg-neutral-700`,
        activeWorkerId === worker.id && 'bg-neutral-700'
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
