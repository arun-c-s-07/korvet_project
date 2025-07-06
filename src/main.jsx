import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>       {/* ✅ WRAP YOUR APP */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
