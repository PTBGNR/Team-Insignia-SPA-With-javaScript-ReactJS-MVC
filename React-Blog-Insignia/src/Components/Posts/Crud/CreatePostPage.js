/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import CreatePostForm from './CreatePostForm';
import {createPost} from '../../../Models/post';
import {showInfo} from '../../../Components/common/InfoBox';

export default class CreatePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author: sessionStorage.getItem("username"),
            date: new Date(),
            rate: 0,
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
        createPost(this.state.title, this.state.body, this.state.author, this.state.date, this.state.rate, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            showInfo("Post created successful.");
            this.context.router.push('/posts');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div>
                <CreatePostForm
                    title={this.state.title}
                    body={this.state.body}
                    author={this.state.author}
                    date={this.state.date}
                    rate={this.state.rate}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}


CreatePostPage.contextTypes = {
    router: React.PropTypes.object
};
