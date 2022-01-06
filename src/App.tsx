import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes/routeConfig';
import { configureStore } from './redux/store';
import { store } from './rtkQuery/store';
import './globalStyles.scss';

const reduxStore = configureStore();

const App : React.FC = () => (
  <Provider store={reduxStore}>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </Provider>
);

export default App;
