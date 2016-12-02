import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import HomeView from './Views/HomeView';
import LoginPage from './Views/LoginPage';
import RegisterView from './Views/RegisterView';
import PostsView from './Views/PostsView';
import SinglePostView from './Views/SinglePostView';
import CreatePostView from './Views/CreatePostView';

import KinveyRequester from './Models/KinveyRequester';
import $ from 'jquery';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        };
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        homeClicked={this.showHomeView.bind(this)}
                        loginClicked={this.showLoginView.bind(this)}
                        registerClicked={this.showRegisterView.bind(this)}
                        logoutClicked={this.logout.bind(this)}
                        postsClicked={this.showPostsView.bind(this)}
                        createPostClicked={this.showCreatePostView.bind(this)}/>
                </header>
                <main id="main">
                </main>
                <Footer />
            </div>
        )
    }

    componentDidMount() {
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError.bind(this));

        // Hide the info / error boxes when clicked
        $("#infoBox, #errorBox").click(function() {
            $(this).fadeOut();
        });

        // Initially load the "Home" view when the app starts
        this.showHomeView();
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }

    showView(reactViewComponent) {
        ReactDOM.render(reactViewComponent,
            document.getElementById('main'));
        $('#errorBox').hide();
    }

    showHomeView() {
        KinveyRequester.findHomePosts()
            .then(loadHomePostsSuccess.bind(this));
    
        function loadHomePostsSuccess(posts) {
            this.showView(
                <HomeView
                    posts={posts}
                    currentPostClicked={this.currentPostView.bind(this)}
                />
            );
        }
    }

    currentPostView(postId){
        KinveyRequester.findPostById(postId)
            .then(loadCurrentPostSuccess.bind(this));

        function loadCurrentPostSuccess(post) {
            this.showInfo("Post loaded.");
            this.showView(
                <SinglePostView
                    post={post}
                    userId={this.state.userId}
                />
            );
        }
    }

    showLoginView() {
        this.showView(<LoginPage onsubmit={this.login.bind(this)} />);
    }

    showRegisterView() {
        this.showView(<RegisterView onsubmit={this.register.bind(this)} />);
    }


    register(username, password, confirmpassword, firstname, lastname) {
        if(password === confirmpassword){
            KinveyRequester.registerUser(username, password, firstname, lastname)
                .then(registerSuccess.bind(this));

            function registerSuccess(userInfo) {
                this.saveAuthInSession(userInfo);
                this.showHomeView();
                this.showInfo("User registration successful.");
            }
        }
        else{
            this.showError("Passwords mismatch!");
        }
    }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }

    logout() {
        KinveyRequester.logoutUser();
        sessionStorage.clear();
        this.setState({username: null, userId: null});
        this.showHomeView();
        this.showInfo('Logout successful.');
    }


    showPostsView() {
        KinveyRequester.findAllPosts()
            .then(loadPostsSuccess.bind(this));

        function loadPostsSuccess(posts) {
            this.showInfo("Posts loaded.");
            this.showView(
                <PostsView
                    posts={posts}
                    userId={this.state.userId}
                />
            );
        }
    }

    showCreatePostView() {
        this.showView(<CreatePostView onsubmit={this.createPost.bind(this)} />);
    }

    createPost(title, body) {
        let date = new Date();
        let rate = 0;
        let authorId = this.userId;
        alert(authorId)
        // KinveyRequester.createPost(title, body, date, rate, authorId)
        //     .then(createPostSuccess.bind(this));
        //
        // function createPostSuccess() {
        //     this.showPostsView();
        //     this.showInfo("Post created.");
        // }
    }


    editBook(bookId, title, author, description) {
        KinveyRequester.editBook(bookId, title, author, description)
            .then(editBookSuccess.bind(this));

        function editBookSuccess() {
            this.showPostsView();
            this.showInfo("Book created.");
        }
    }

    deleteBook(bookId) {
        KinveyRequester.deleteBook(bookId)
            .then(deleteBookSuccess.bind(this));

        function deleteBookSuccess() {
            this.showPostsView();
            this.showInfo("Book deleted.");
        }
    }
}
