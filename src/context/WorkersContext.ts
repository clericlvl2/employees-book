import { createContext } from 'react';
import { Worker } from '../utils/types.ts';

export const WorkersContext = createContext<Worker[]>([]);
