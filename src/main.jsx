import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import RoomProvider from './context.jsx';
createRoot(document.getElementById('root')).render(
  <RoomProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </RoomProvider>
);
