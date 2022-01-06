import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes/routeConfig';
import { configureStore } from './redux/store';
import './globalStyles.scss';

const store = configureStore();

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
