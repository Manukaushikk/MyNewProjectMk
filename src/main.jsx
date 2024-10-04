import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../dist/css/adminlte.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../../dist/js/adminlte.js';
// import '../dist/js/pages/dashboard.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)