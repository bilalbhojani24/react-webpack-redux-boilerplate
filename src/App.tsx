import React from 'react';
import { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/routeConfig';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './styles/styles.scss';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Switch>
                        {React.Children.toArray(
                            routes.map((route: any, index: number) => <Route key={index} {...route} />),
                        )}
                    </Switch>
                </BrowserRouter>
                <div className="red">
                    hello world
                    <h1> Hello world!!</h1>
                </div>
            </Suspense>
        </Provider>
    );
};

export default App;
