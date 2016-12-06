import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import HomePage from './Components/Home/HomePage';
import LogoutPage from './Components/Logout/LogoutPage';
import PostsPage from './Components/Posts/PostsPage';
import CreatePostPage from './Components/Posts/Crud/CreatePostPage';
import DeletePostPage from './Components/Posts/Crud/DeletePostPage';
import EditPostPage from './Components/Posts/Crud/EditPostPage';
import SinglePostPage from './Components/Posts/SinglePostPage';
import postsByCategoryPage from './Components/Posts/PostsByCategoryPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {checkUser} from './Components/common/CheckUser'

import {IndexRoute, Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/singlePostView/:postId" component={SinglePostPage}/>
            <Route path="/deletePostView/:postId" component={DeletePostPage} onEnter={checkUser}/>
            <Route path="/editPostView/:postId" component={EditPostPage} onEnter={checkUser}/>
            <Route path="/postsByCategoryView/:category" component={postsByCategoryPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/logout" component={LogoutPage} onEnter={checkUser}/>
            <Route path="/posts" onEnter={checkUser}>
                <IndexRoute component={PostsPage}/>
                <Route path=":postId" component={SinglePostPage}/>
            </Route>
            <Route path="/createPost" component={CreatePostPage} onEnter={checkUser}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
