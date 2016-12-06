/**
 * Created by Hristo on 01.12.2016 г..
 */

import * as requester from './requester';
import observer from './observer';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess)
        .catch(loginFailed);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
    function loginFailed() {
        callback(false);
    }
}

// user/register
function register(username, password, firstName, lastName, role, callback) {
    let userData = {
        username,
        password,
        firstName,
        lastName,
        role
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess)
        .catch(registerFailed);

    function registerSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
    function registerFailed() {
        callback(false);
    }
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);

    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

export {login, register, logout};