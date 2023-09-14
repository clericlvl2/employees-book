export const SUBSCRIPTION_OPTIONS = {
  SUBSCRIBED: 'Subscribed',
  NOT_SUBSCRIBED: 'Not Subscribed',
  OTHER: 'Other',
} as const;

export type Subscription =
  (typeof SUBSCRIPTION_OPTIONS)[keyof typeof SUBSCRIPTION_OPTIONS];
export type WorkerForm = Partial<Omit<Worker, 'id'>>;

export interface Worker {
  id: number;
  name: string;
  age: number;
  subscription: Subscription;
  isEmployed: boolean;
}

export interface WorkerDataActions {
  addWorker?: (workerInfo: Worker) => void;
  deleteWorker?: (workerId: number) => void;
  editWorkerData?: (workerId: number, payload: WorkerForm) => void;
  pickWorker?: (workerId: number | undefined) => void;
}
