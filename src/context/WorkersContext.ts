import { createContext } from 'react';
import { Employee } from '../utils/types.ts';

export const WorkersContext = createContext<Employee[]>([]);
