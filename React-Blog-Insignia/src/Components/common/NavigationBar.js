import React, {Component} from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        // let username = this.props.username;
        // if (username == null) {
        //     // No user logged in
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
