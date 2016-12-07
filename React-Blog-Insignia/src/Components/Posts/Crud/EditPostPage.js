/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import EditPostForm from './EditPostForm';
import {updatePost, findSinglePostPage} from '../../../Models/post';
import {getCategories} from '../../../Models/category';
import {showInfo} from '../../../Components/common/InfoBox';
import $ from 'jquery';

export default class EditPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            title: '',
            body: '',
            author: sessionStorage.getItem("username"),
            date: new Date(),
            category: '',
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitPostHandler = this.onSubmitPostHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'body':
                this.setState({ body: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        updatePost(this.state.title, this.state.body, this.state.post.author, this.state.date, this.state.post.category, this.props.params.postId, this.onSubmitResponse);
    }

    onSubmitPostHandler(response) {
        this.setState({title: response.title});
        this.setState({body: response.body});
        this.setState({post: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        getCategories(this.onSubmitTagsHandler);
        findSinglePostPage(this.props.params.postId, this.onSubmitPostHandler);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            showInfo("Post edited successful.");
            this.context.router.push('/posts');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: false });
        }
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <EditPostForm
                    title={this.state.title}
                    body={this.state.body}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}


EditPostPage.contextTypes = {
    router: React.PropTypes.object
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/master
