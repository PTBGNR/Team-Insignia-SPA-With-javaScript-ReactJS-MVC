/**
 * Created by Hristo on 04.12.2016 г..
 */
import React, {Component} from 'react';
import PostsByCategoryView from './PostsByCategoryView';
import {showInfo} from '../../Components/common/InfoBox';
import $ from 'jquery';
import {findHomePosts, getRates} from '../../Models/post'
import {getCategories} from '../../Models/category';

export default class postsByCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: [],
            rates: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadPostsSuccess = this.onLoadPostsSuccess.bind(this);
        this.onLoadCategoriesSuccess = this.onLoadCategoriesSuccess.bind(this);
        this.onLoadRateSuccess = this.onLoadRateSuccess.bind(this);
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

    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadPostsSuccess);
        getCategories(this.onLoadCategoriesSuccess);
        getRates(this.onLoadRateSuccess);
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <PostsByCategoryView posts={this.state.posts}
                                     categories={this.state.categories}
                                     rates={this.state.rates}/>
            </div>
        );
    }
}