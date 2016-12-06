/**
 * Created by Hristo on 02.12.2016 г..
 */

import React, {Component} from 'react';
import {findHomePosts, getRates} from '../../Models/post';
import {getUserById} from '../../Models/user';
import {getAllComments} from '../../Models/comment';
import PostsView from './PostsView';
import $ from 'jquery';
import {showInfo} from '../common/InfoBox';

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            rates: [],
            comments: [],
            userRole: ''
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
        this.onLoadUserSuccess = this.onLoadUserSuccess.bind(this);
    }


    onLoadCommentsSuccess(response) {
        // Display teams
        this.setState({comments: response})
    }
    
    onLoadSuccess(response) {
        // Display teams
        showInfo("Posts loaded.");
        this.setState({posts: response});
    }

    onLoadRateSuccess(response) {
        // Display teams
        this.setState({rates: response});
    }

    onLoadUserSuccess(response) {
        // Display teams
        let role = response.role;
        this.setState({userRole: role});
    }

    componentDidMount() {
        // Request list of teams from the server
        let userId = sessionStorage.getItem("userId");
        findHomePosts(this.onLoadSuccess);
        getRates(this.onLoadRateSuccess);
        getAllComments(this.onLoadCommentsSuccess);
        getUserById(userId, this.onLoadUserSuccess)
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <PostsView posts={this.state.posts}
                           rates={this.state.rates}
                           comments={this.state.comments}
                           role={this.state.userRole}/>
            </div>
        );
    }
}