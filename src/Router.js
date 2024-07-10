import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import AddWaterIntake from './components/AddWaterIntake';
import ViewWaterIntake from './components/ViewWaterIntake';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/add-water-intake', element: <AddWaterIntake /> },
  { path: '/view-water-intake', element: <ViewWaterIntake /> },
]);

export default router;
