import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './Views/LoginPage';
//import RegisterView from './Views/RegisterView';
//import SinglePostView from './Views/SinglePostView';

import './index.css';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
    </Router>,
    document.getElementById('app')
);
