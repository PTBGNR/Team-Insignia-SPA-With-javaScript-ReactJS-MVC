/**
 * Created by Hristo on 04.12.2016 г..
 */
import React, {Component} from 'react';
import PostsByCategoryView from './PostsByCategoryView';
import {showInfo} from '../../Components/common/InfoBox';
import $ from 'jquery';
import {findHomePosts, getRates} from '../../Models/post'
import {getCategories} from '../../Models/category';
import {getAllComments} from '../../Models/comment';

export default class postsByCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            sortField: '',
            categories: [],
            comments: [],
            rates: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onLoadPostsSuccess = this.onLoadPostsSuccess.bind(this);
        this.onLoadCategoriesSuccess = this.onLoadCategoriesSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
    }

    onChangeHandler(event) {
        this.setState({sortField: event.target.value});
        findHomePosts(this.onSortedPostsSuccess);
    }

    onLoadPostsSuccess(response) {
        // Display teams
        let filteredPostsByCategory = [];
        for (let post of response) {
            if(this.props.params.category === post.category){
                filteredPostsByCategory.push(post);
            }
        }
        showInfo("Posts loaded.");
        this.setState({posts: filteredPostsByCategory})
    }


    onLoadRateSuccess(response) {
        // Display teams
        this.setState({rates: response});
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
    }

    componentWillReceiveProps(nextProps){
        findHomePosts(this.onLoadPostsSuccess);
        getCategories(this.onLoadCategoriesSuccess);
        getAllComments(this.onLoadCommentsSuccess)
        getRates(this.onLoadRateSuccess);
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <PostsByCategoryView posts={this.state.posts}
                                     categories={this.state.categories}
                                     rates={this.state.rates}
                                     sortField={this.state.sortField}
                                     comments={this.state.comments}
                                     onChangeHandler={this.onChangeHandler}/>
            </div>
        );
    }
}