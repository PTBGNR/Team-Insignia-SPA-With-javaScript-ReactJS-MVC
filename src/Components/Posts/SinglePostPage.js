/**
 * Created by Hristo on 02.12.2016 г..
 */

import React, {Component} from 'react';
import SinglePostView from './SinglePostView';
import {showInfo} from '../../Components/common/InfoBox';
import $ from 'jquery';
import {findSinglePostPage, getRatesUpdateRate} from '../../Models/post'
import {getComments, createComment} from '../../Models/comment'

export default class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            rates: {},
            comments: [],
            commentBody: '',
            commentAuthorName: '',
            commentAuthorEmail: ''
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'commentBody':
                this.setState({commentBody: event.target.value});
                break;
            case 'commentAuthorName':
                this.setState({commentAuthorName: event.target.value});
                break;
            case 'commentAuthorEmail':
                this.setState({commentAuthorEmail: event.target.value});
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        createComment(this.state.commentBody, this.state.commentAuthorName, this.state.commentAuthorEmail, this.props.params.postId, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        showInfo("Comment created successful.");
        this.setState({commentBody: ''});
        this.setState({commentAuthorName: ''});
        this.setState({commentAuthorEmail: ''});
        findSinglePostPage(this.props.params.postId, this.onLoadSuccess);
        getComments(this.props.params.postId, this.onLoadCommentsSuccess);
    }

    onLoadSuccess(response) {
        //Display teams
        showInfo("Post loaded.");
        this.setState({post: response});
    }

    onLoadRateSuccess(response) {
        //Display teams
        this.setState({rates: response});
    }

    onLoadCommentsSuccess(response) {
        //Display teams
        this.setState({comments: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        getRatesUpdateRate(this.props.params.postId, this.onLoadRateSuccess);
        findSinglePostPage(this.props.params.postId, this.onLoadSuccess);
        getComments(this.props.params.postId, this.onLoadCommentsSuccess);
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <SinglePostView post={this.state.post}
                                rates={this.state.rates}
                                comments={this.state.comments}
                                commentBody={this.state.commentBody}
                                commentAuthorName={this.state.commentAuthorName}
                                commentAuthorEmail={this.state.commentAuthorEmail}
                                onChangeHandler={this.onChangeHandler}
                                onSubmitHandler={this.onSubmitHandler}/>
            </div>
        );
    }
}


SinglePostPage.contextTypes = {
    router: React.PropTypes.object
};