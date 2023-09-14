import { Worker, WorkerForm } from './types.ts';

export const MOCK_WORKERS: Worker[] = [
  {
    id: 1,
    name: 'Jaden Smith',
    age: 32,
    subscription: 'Not Subscribed',
    isEmployed: true,
  },
  {
    id: 2,
    name: 'Elena Malkovich',
    age: 21,
    subscription: 'Not Subscribed',
    isEmployed: true,
  },
  {
    id: 3,
    name: 'Greg Stafford',
    age: 11,
    subscription: 'Subscribed',
    isEmployed: true,
  },
  {
    id: 4,
    name: 'Michael Wayne',
    age: 44,
    subscription: 'Not Subscribed',
    isEmployed: false,
  },
];

export const DEFAULT_WORKER_FORM: WorkerForm = {
  subscription: 'Subscribed',
  isEmployed: false,
};
