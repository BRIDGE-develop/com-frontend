import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

import './App.css';

import Nav from './app/component/nav';
import user from './app/manage/user/user';
import Skill from './app/manage/skill/skill';
import FooterBar from './app/component/FooterBar';
import Paycheck from './app/paycheck/paycheck';
import Persoanl from './app/personal/personal';
import Notice from './components/Notice/Notice';
import NoticeDetail from './components/Notice/NoticeDetail';
import NoticeWrite from './components/Notice/NoticeWrite';

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/user" component={user} />
                <Route path="/skill" component={Skill} />
                <Route path="/paycheck" component={Paycheck} />
                <Route path="/personal" component={Persoanl} />
                <Route path="/notice" component={Notice} />
                <Route path="/noticedetail" component={NoticeDetail} />
                <Route path="/noticewrite" component={NoticeWrite} />
            </Switch>
            <FooterBar />
        </BrowserRouter>
    );
};

export default hot(App);
