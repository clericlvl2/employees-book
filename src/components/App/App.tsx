import Table from '../Table/Table.tsx';
import ControlPanel from '../ControlPanel/ControlPanel.tsx';
import { WorkersActionsContext, WorkersContext } from '../../context';
import { MOCK_WORKERS } from '../../utils/constants.ts';
import { useWorkers } from '../../hooks';
import { ActiveWorkerIdContext } from '../../context';
import { Footer } from '../Footer';
import { Header } from '../Header';

// TODO продумать адаптивность
// TODO добавить хранение в localstorage
// TODO добавить переключение темы
// TODO добавить брейкпоинт на 1280 как макс ширину

const App = () => {
  const { workers, activeWorkerId, workersActions } = useWorkers(MOCK_WORKERS);

  return (
    <WorkersContext.Provider value={workers}>
      <ActiveWorkerIdContext.Provider value={activeWorkerId}>
        <WorkersActionsContext.Provider value={workersActions}>
          <div className="flex min-h-screen flex-col gap-8">
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
