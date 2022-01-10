import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Routes } from './config/routeConfigs/routeConfig';
import 'assets/styles/globalStyles.scss';

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
