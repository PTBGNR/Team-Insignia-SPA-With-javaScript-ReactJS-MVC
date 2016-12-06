/**
 * Created by Rumen Panchev on 12/5/2016.
 */
import React, {Component} from 'react';
import DeletePostForm from './DeletePostForm';
import {deletePost} from '../../../Models/post';
import {getCategories, createCategory} from '../../../Models/category';
import {showInfo} from '../../../Components/common/InfoBox';
import $ from 'jquery';


export default class DeletePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author: sessionStorage.getItem("username"),
            date: new Date(),
            category: '',
            categories: [],
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitTagsHandler = this.onSubmitTagsHandler.bind(this);
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
            case 'category':
                this.setState({ category: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        deletePost(this.state.title, this.state.body, this.state.author, this.state.date, this.state.category, this.onSubmitResponse);
        let categoriesName = [];
        for(let category of this.state.categories){
            categoriesName.push(category.name);
        }
        if(categoriesName.indexOf(this.state.category) === -1){
            createCategory(this.state.category)
        }
    }

    onSubmitTagsHandler(response) {
        this.setState({categories: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        getCategories(this.onSubmitTagsHandler);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            showInfo("Post deleted successful.");
            this.context.router.delete('/posts');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: false });
        }
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <DeletePostForm
                    title={this.state.title}
                    body={this.state.body}
                    categories={this.state.categories}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}


DeletePostPage.contextTypes = {
    router: React.PropTypes.object
};