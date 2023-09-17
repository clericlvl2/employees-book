import { EmployeeForm } from './types.ts';

export const validateForm = (
  workerForm: EmployeeForm
): workerForm is Required<EmployeeForm> => {
  const { name, age } = workerForm;
  return (
    name !== undefined &&
    name !== '' &&
    age !== undefined &&
    age !== 0 &&
    name.length > 3 &&
    name.length < 60
  );
};
