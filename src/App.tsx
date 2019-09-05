import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './app/component/nav';
import LoginForm from './app/login/login';
import user from './app/manage/user/user';
import Skill from './app/manage/skill/skill';
import FooterBar from './app/component/FooterBar';
import Paycheck from './app/paycheck/paycheck';
import Persoanl from './app/personal/personal';

const App: React.FC = (): JSX.Element => {
    return (
        <div>
            <Nav />
            <div className="contentsRouter">
                <Route exact path="/" component={LoginForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/user" component={user} />
                <Route path="/skill" component={Skill} />
                <Route path="/paycheck" component={Paycheck} />
                <Route path="/personal" component={Persoanl} />
            </div>
            <FooterBar />
        </div>
    );
};

export default App;
