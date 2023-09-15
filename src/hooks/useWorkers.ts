import { useCallback, useMemo, useState } from 'react';
import { Employee, WorkerDataActions, EmployeeForm } from '../utils/types.ts';
import { useLocalStorage } from './useLocalStorage.ts';
import { MOCK_WORKERS, STORAGE_KEYS } from '../utils/constants.ts';

export const useWorkers = () => {
  const [workers, setWorkers] = useLocalStorage(
    STORAGE_KEYS.WORKERS,
    MOCK_WORKERS
  );
  const [activeWorkerId, setActiveWorkerId] = useState<number | undefined>();

  const addWorker = useCallback(
    (newWorker: Employee) => setWorkers(state => [...state, newWorker]),
    [setWorkers]
  );
  const loadWorkers = useCallback(
    (newWorkers: Employee[]) => setWorkers(newWorkers),
    [setWorkers]
  );
  const deleteWorker = useCallback(
    (workerId: number) =>
      setWorkers(state => state.filter(item => item.id !== workerId)),
    [setWorkers]
  );
  const editWorkerData = useCallback(
    (workerId: number, payload: EmployeeForm) =>
      setWorkers(state =>
        state.map(item =>
          item.id === workerId ? { ...item, ...payload } : item
        )
      ),
    [setWorkers]
  );
  const pickWorker = useCallback(
    (workerId: number | undefined) => setActiveWorkerId(workerId),
    [setActiveWorkerId]
  );
  const workersActions: WorkerDataActions = useMemo(
    () => ({
      loadWorkers,
      addWorker,
      deleteWorker,
      editWorkerData,
      pickWorker,
    }),
    [loadWorkers, addWorker, deleteWorker, editWorkerData, pickWorker]
  );

  return { workers, activeWorkerId, workersActions } as const;
};
