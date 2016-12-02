/**
 * Created by Hristo on 02.12.2016 г..
 */

import React, {Component} from 'react';
import {findHomePosts} from '../../Models/post';
import PostsView from './PostsView';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display teams
        this.setState({posts: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadSuccess);
    }

    render() {
        return (
            <div>
                <PostsView posts={this.state.posts}/>
            </div>
        );
    }
}