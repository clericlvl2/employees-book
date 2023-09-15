import {
  ActiveWorkerIdContext,
  WorkersActionsContext,
  WorkersContext,
} from '../../context';
import { Table } from '../Table';
import { ControlPanel } from '../ControlPanel';
import { useWorkers } from '../../hooks';
import { Footer } from '../Footer';
import { Header } from '../Header';

// TODO адаптивность < 768px

const App = () => {
  const { workers, activeWorkerId, workersActions } = useWorkers();

  return (
    <WorkersContext.Provider value={workers}>
      <ActiveWorkerIdContext.Provider value={activeWorkerId}>
        <WorkersActionsContext.Provider value={workersActions}>
          <div className="flex min-h-screen flex-col gap-8 bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
            <Header />
            <main className="flex flex-grow justify-center gap-2 px-8">
              <ControlPanel />
              <Table />
            </main>
            <Footer />
          </div>
        </WorkersActionsContext.Provider>
      </ActiveWorkerIdContext.Provider>
    </WorkersContext.Provider>
  );
};

export default App;
