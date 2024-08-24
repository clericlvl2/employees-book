import { Employee, EmployeeForm } from './types.ts';

export const COLUMNS_COUNT = 4;
export const MOCK_WORKERS: Employee[] = [
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
    age: 31,
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
export const FORM_FILES_NAMES = ['name', 'age', 'subscription', 'isEmployed'] as const;
export const DEFAULT_WORKER_FORM: EmployeeForm = {
  subscription: 'Subscribed',
  isEmployed: false,
};
export const STORAGE_KEYS = {
  WORKERS: 'workers',
  THEME: 'app-theme',
} as const;
export const FORM_ALERT_MESSAGE =
  'There are some blank or invalid fields (name should be 3 to 60 characters).\nTry once more, please.';
