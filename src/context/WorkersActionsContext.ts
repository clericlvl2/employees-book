import { createContext } from 'react';
import { WorkerDataActions } from '../utils/types.ts';

export const WorkersActionsContext = createContext<WorkerDataActions>({});
