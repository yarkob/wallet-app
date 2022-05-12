import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import {AppContextProvider} from './providers';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AppContextProvider>
    <App/>
  </AppContextProvider>
);
