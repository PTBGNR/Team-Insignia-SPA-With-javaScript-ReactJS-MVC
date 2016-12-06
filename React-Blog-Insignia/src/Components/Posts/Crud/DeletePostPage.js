<<<<<<< HEAD
import React, {Component} from 'react';
import DeletePostView from './DeletePostView';
import {showInfo} from '../../../Components/common/InfoBox';
import $ from 'jquery';
import {findSinglePostPage, getRatesUpdateRate, deletePostMain} from '../../../Models/post'
import {getComments} from '../../../Models/comment'

export default class DeletePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            rates: {},
            comments: [],
            commentBody: '',
            commentAuthorName: '',
            commentDate: new Date()
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }


    onSubmitHandler(event) {
        event.preventDefault();
        deletePostMain(this.props.params.postId, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            showInfo("Post deleted successful.");
            this.context.router.push('/posts');
        } else {
            showInfo("Post not deleted, please try again later.");
            this.context.router.push('/posts');
        }
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
                <DeletePostView post={this.state.post}
                                rates={this.state.rates}
                                comments={this.state.comments}
                                commentBody={this.state.commentBody}
                                commentAuthorName={this.state.commentAuthorName}
                                onSubmitHandler={this.onSubmitHandler}/>
            </div>
        );
    }
}


DeletePostPage.contextTypes = {
    router: React.PropTypes.object
=======
import React, {Component} from 'react';
import DeletePostView from './DeletePostView';
import {showInfo} from '../../../Components/common/InfoBox';
import $ from 'jquery';
import {findSinglePostPage, getRatesUpdateRate} from '../../../Models/post'
import {getComments} from '../../../Models/comment'

export default class DeletePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            rates: {},
            comments: [],
            commentBody: '',
            commentAuthorName: '',
            commentDate: new Date()
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
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
                <DeletePostView post={this.state.post}
                                rates={this.state.rates}
                                comments={this.state.comments}
                                commentBody={this.state.commentBody}
                                commentAuthorName={this.state.commentAuthorName}/>
            </div>
        );
    }
}


DeletePostPage.contextTypes = {
    router: React.PropTypes.object
>>>>>>> origin/master
};