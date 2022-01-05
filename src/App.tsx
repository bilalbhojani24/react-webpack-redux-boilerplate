import { Suspense } from 'react';
import { BrowserRouter, } from "react-router-dom";
import { Routes } from "./routes/routeConfig";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import './globalStyles.scss';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
