import { createContext } from 'react';

export const ActiveWorkerIdContext = createContext<number | undefined>(
  undefined
);
