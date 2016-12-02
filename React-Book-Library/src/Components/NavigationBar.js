import React, {Component} from 'react';
import './NavigationBar.css';
import {Link} from 'react-router';

export default class NavigationBar extends Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            // No user logged in
            return (
                <div className="header">
                    <div className="container">
                        <a href="#" onClick={this.props.homeClicked}><h4><b><i>"Тези, които са достатъчно луди да мислят, че могат да променят света, са тези, които го правят."</i></b></h4>
                            <div id="loadingBox">Loading ...</div>
                            <div id="infoBox">Info</div>
                            <div className="logo">
                                <img src="images/bloglogo.png" alt=" "/>
                                <h4><b><i>Стив Джобс</i></b></h4>
                            </div>
                            </a>
                        <div className="header-info">
                            <div className="logo-right">
                                <span className="menu"><img src="images/menu.png" alt=" "/></span>
                                <ul className="nav1">
                                    <li className="cap"><a href="#" onClick={this.props.homeClicked}>Home</a></li>
                                    <li><>Login</a></li>
                                    <li><a href="#" onClick={this.props.registerClicked}>Register</a></li>
                                </ul>
                                <div id="errorBox">Error</div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            // User logged in
            return (
                // <nav className="navigation-bar">
                //     <a href="#" onClick={this.props.homeClicked}>Home</a>
                //     <a href="#" onClick={this.props.booksClicked}>List Books</a>
                //     <a href="#" onClick={this.props.createBookClicked}>Create Book</a>
                //     <a href="#" onClick={this.props.logoutClicked}>Logout</a>
                //     <span className="loggedInUser">
                //         Welcome, {username}!
                //     </span>
                // </nav>
                <div className="header">
                    <div className="container"><a href="#" onClick={this.props.homeClicked}><h4><b><i>"Тези, които са достатъчно луди да мислят, че могат да променят света, са тези, които го правят."</i></b></h4>
                        <div id="loadingBox">Loading ...</div>
                        <div id="infoBox">Info</div>
                        <div className="logo">
                            <img src="images/bloglogo.png" alt=" "/>
                            <h4><b><i>Стив Джобс</i></b></h4>
                        </div>
                    </a>
                        <div className="header-info">
                            <div className="logo-right">
                                <span className="menu"><img src="images/menu.png" alt=" "/></span>
                                <ul className="nav1">
                                    <li className="cap"><a href="#" onClick={this.props.homeClicked}>Home</a></li>
                                    <li><a href="#" onClick={this.props.postsClicked}>List Posts</a></li>
                                    <li><a href="#" onClick={this.props.createPostClicked}>Create Post</a></li>
                                    <li><a href="#" onClick={this.props.logoutClicked}>Logout</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                            <div id="loadingBox">Loading ...</div>
                            <div id="infoBox">Info</div>
                            <div id="errorBox">Error</div>
                        </div>
                    </div>
                </div>

            );
        }
    }
}
