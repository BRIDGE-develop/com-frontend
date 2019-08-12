import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './app/component/nav';
import LoginForm from './app/login/login';
import Dashboard from './app/dashboard/dashboard';
import user from './app/manage/user/user';
import Skill from './app/manage/skill/skill';
import FooterBar from './app/component/FooterBar';

const App: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="contentsRouter">
                <Route exact path="/" component={LoginForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/user" component={user} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/skill" component={Skill} />
            </div>
            <FooterBar />
        </div>
    );
};

export default App;
