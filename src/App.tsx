import React from 'react';
import { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/routeConfig';

import './styles/styles.scss';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Switch>{React.Children.toArray(routes.map((route: any) => <Route {...route} />))}</Switch>
            </BrowserRouter>
            <div className="red">
                hellow
                <h1> Hello world!!</h1>
            </div>
        </Suspense>
    );
};

export default App;
