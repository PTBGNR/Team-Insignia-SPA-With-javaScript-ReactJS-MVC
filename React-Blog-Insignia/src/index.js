import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import HomePage from './Components/Home/HomePage';
import LogoutPage from './Components/Logout/LogoutPage';
import PostsPage from './Components/Posts/PostsPage';
import CreatePostPage from './Components/Posts/Crud/CreatePostPage';
import SinglePostPage from './Components/Posts/SinglePostPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {IndexRoute, Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute authorize={['user', 'admin']} component={HomePage}/>
            <Route path="/singlePostView/:postId" component={SinglePostPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/logout" component={LogoutPage}/>
            <Route path="/posts">
                <IndexRoute component={PostsPage}/>
                <Route path=":postId" component={SinglePostPage}/>
            </Route>
            <Route path="/createPost" component={CreatePostPage}/>
        </Route>
    </Router>
,
document.getElementById('app')
);
