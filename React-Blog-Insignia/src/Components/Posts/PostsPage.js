/**
 * Created by Hristo on 02.12.2016 г..
 */

import React, {Component} from 'react';
import {findHomePosts} from '../../Models/post';
import PostsView from './PostsView';
import $ from 'jquery';
import {showInfo} from '../common/InfoBox';

export default class PostPage extends Component {
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
        showInfo("Posts loaded.");
        this.setState({posts: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadSuccess);
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <PostsView posts={this.state.posts}/>
            </div>
        );
    }
}