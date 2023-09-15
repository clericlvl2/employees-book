import { EmployeeForm } from './types.ts';

// TODO добавить валидацию полей перед сабмитом
// для имени: цифры, совпадения, менее трех букв, пустая строка

export const validateForm = (
  workerForm: EmployeeForm
): workerForm is Required<EmployeeForm> =>
  Object.entries(workerForm).every(value => value !== undefined);
