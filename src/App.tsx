import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
