import { Dispatch, SetStateAction } from 'react';

export const SUBSCRIPTION_OPTIONS = {
  SUBSCRIBED: 'Subscribed',
  NOT_SUBSCRIBED: 'Not Subscribed',
  OTHER: 'Other',
} as const;
export type Subscription =
  (typeof SUBSCRIPTION_OPTIONS)[keyof typeof SUBSCRIPTION_OPTIONS];

export const THEME_OPTIONS = ['dark', 'light', 'normal'] as const;
export type Theme = (typeof THEME_OPTIONS)[number];

export type SetValue<T> = Dispatch<SetStateAction<T>>;
export type EmployeeForm = Partial<Omit<Employee, 'id'>>;

export interface Employee {
  id: number;
  name: string;
  age: number;
  subscription: Subscription;
  isEmployed: boolean;
}

export interface WorkerDataActions {
  loadWorkers?: (workers: Employee[]) => void;
  addWorker?: (workerInfo: Employee) => void;
  deleteWorker?: (workerId: number) => void;
  editWorkerData?: (workerId: number, payload: EmployeeForm) => void;
  pickWorker?: (workerId: number | undefined) => void;
}
