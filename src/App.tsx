import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routeConfig';
import './globalStyles.scss';

const App: React.FC = () => (

  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Suspense>

);

export default App;
