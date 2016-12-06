import React, {Component} from 'react';
import {findHomePosts, getRates} from '../../Models/post';
import {getCategories} from '../../Models/category';
import {getAllComments} from '../../Models/comment';
import HomeView from './HomeView';
import $ from 'jquery';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: [],
            sortField: '',
            rates: [],
            comments: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onLoadPostsSuccess = this.onLoadPostsSuccess.bind(this);
        this.onLoadCategoriesSuccess = this.onLoadCategoriesSuccess.bind(this);
        this.onSortedPostsSuccess = this.onSortedPostsSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
    }

    onChangeHandler(event) {
        this.setState({sortField: event.target.value});
        findHomePosts(this.onSortedPostsSuccess);
    }

    onLoadPostsSuccess(response) {
        // Display teams
        this.setState({posts: response})
    }

    onLoadRateSuccess(response) {
        // Display teams
        this.setState({rates: response});
    }

    onSortedPostsSuccess(response) {
        // Display teams
        this.setState({posts: response})
    }

    onLoadCategoriesSuccess(response) {
        // Display teams
        this.setState({categories: response})
    }

    onLoadCommentsSuccess(response) {
        // Display teams
        this.setState({comments: response})
    }

    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadPostsSuccess);
        getCategories(this.onLoadCategoriesSuccess);
        getRates(this.onLoadRateSuccess);
        getAllComments(this.onLoadCommentsSuccess)
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <HomeView posts={this.state.posts}
                          categories={this.state.categories}
                          sortField={this.state.sortField}
                          rates={this.state.rates}
                          comments={this.state.comments}
                          onChangeHandler={this.onChangeHandler}
                          onSubmitHandler={this.onSubmitHandler}
                          submitDisabled={this.state.submitDisabled}
                />
            </div>
        );
    }
}