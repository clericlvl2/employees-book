import { WorkerForm } from './types.ts';

// TODO добавить валидацию полей перед сабмитом
// для имени: цифры, совпадения, менее трех букв, пустая строка

export const validateForm = (
  workerForm: WorkerForm
): workerForm is Required<WorkerForm> =>
  Object.entries(workerForm).every(value => value !== undefined);
