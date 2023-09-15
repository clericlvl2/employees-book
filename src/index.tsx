import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
export { COLUMNS_COUNT } from './utils/constants.ts';
