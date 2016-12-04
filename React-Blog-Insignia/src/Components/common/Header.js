/**
 * Created by Hristo on 01.12.2016 г..
 */

import React, {Component} from 'react';
import '../../App.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}