import React, {Component} from 'react';
import observer from './Models/observer';
import './App.css';
import {Link} from 'react-router';
import Header from './Components/common/Header';
import NavigationBar from './Components/common/NavigationBar';
import $ from 'jquery';
import {showError} from './Components/common/ErrorBox';
import Footer from './Components/common/Footer'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, username: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show()
            },
            ajaxStop: function () {
                $("#loadingBox").hide()
            }
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError.bind(this));

        // Hide the info / error boxes when clicked
        $("#infoBox, #errorBox").click(function () {
            $(this).fadeOut();
        });
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({loggedIn: true, username: sessionStorage.getItem("username")});
        } else {
            this.setState({loggedIn: false, username: ''});
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                <NavigationBar>
                    <div className="header">
                        <div className="container">
                            <Link to="/"><h4><b><i>"Тези, които са достатъчно луди да мислят, че могат да променят
                                света, са тези, които го правят."</i></b></h4>
                                <div id="loadingBox">Loading ...</div>
                                <div id="infoBox">Info</div>
                                <div id="errorBox">Error</div>
                                <div className="logo">
                                    <img src="images/bloglogo.png" alt=" "/>
                                    <h4><b><i>Стив Джобс</i></b></h4>
                                </div>
                            </Link>
                            <div className="header-info">
                                <div className="logo-right">
                                    <span className="menu"><img src="images/menu.png" alt=" "/></span>
                                    <ul className="nav1">
                                        <li className="cap"><Link to="/">Home</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavigationBar>
            );
        } else {
            navbar = (
                <NavigationBar>
                    <div className="header">
                        <div className="container">
                            <Link to="/"><h4><b><i>"Тези, които
                                са достатъчно луди да мислят, че могат да променят света, са тези, които го правят."</i></b>
                            </h4>
                                <div id="loadingBox">Loading ...</div>
                                <div id="infoBox">Info</div>
                                <div id="errorBox">Error</div>
                                <div className="logo">
                                    <img src="images/bloglogo.png" alt=" "/>
                                    <h4><b><i>Стив Джобс</i></b></h4>
                                </div>
                            </Link>
                            <div className="header-info">
                                <div className="logo-right">
                                    <span className="menu"><img src="images/menu.png" alt=" "/></span>
                                    <ul className="nav1">
                                        <li className="cap"><Link to="/">Home</Link></li>
                                        <li><Link to="/posts">List Posts</Link></li>
                                        <li><Link to="/createPost">Create Post</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </NavigationBar>
            );
        }
        return (
            <div>
                <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                    {navbar}
                </Header>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}