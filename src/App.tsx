import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes/routeConfig';
import { store } from './redux/storeRTK';
import './globalStyles.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  </Provider>
);

export default App;
