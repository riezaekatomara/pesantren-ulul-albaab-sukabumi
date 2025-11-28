import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './lib/router.jsx';
import './styles/index.css';

/**
 * Main Entry Point for Pesantren Ulul Albaab Sukabumi Website
 * 
 * This file initializes the React application and sets up:
 * - React Router for navigation
 * - Global styles via Tailwind CSS
 * - Strict Mode for development checks
 * - Scroll to top on route change
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);