import React from 'react';
import { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { routes } from './config/routeConfig';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Switch>{React.Children.toArray(routes.map((route: any) => <Route {...route} />))}</Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
