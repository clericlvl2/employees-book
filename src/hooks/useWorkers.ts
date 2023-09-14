import { useCallback, useMemo, useState } from 'react';
import { Worker, WorkerDataActions, WorkerForm } from '../utils/types.ts';

export const useWorkers = (initialWorkers: Worker[]) => {
  const [workers, setWorkers] = useState(initialWorkers);
  const [activeWorkerId, setActiveWorkerId] = useState<number | undefined>();

  const addWorker = useCallback(
    (newWorker: Worker) => setWorkers(state => [...state, newWorker]),
    []
  );
  const deleteWorker = useCallback(
    (workerId: number) =>
      setWorkers(state => state.filter(item => item.id !== workerId)),
    []
  );
  const editWorkerData = useCallback(
    (workerId: number, payload: WorkerForm) =>
      setWorkers(state =>
        state.map(item =>
          item.id === workerId ? { ...item, ...payload } : item
        )
      ),
    []
  );
  const pickWorker = useCallback(
    (workerId: number | undefined) => setActiveWorkerId(workerId),
    []
  );
  const workersActions: WorkerDataActions = useMemo(
    () => ({
      addWorker,
      deleteWorker,
      editWorkerData,
      pickWorker,
    }),
    []
  );

  return { workers, activeWorkerId, workersActions } as const;
};
