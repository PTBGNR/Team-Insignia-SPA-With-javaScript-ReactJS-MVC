import React, {Component} from 'react';
import {findHomePosts} from '../../Models/post';
import HomeView from './HomeView';

export default class HomePage extends Component {
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
        this.setState({posts: response})
    }

    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadSuccess);
    }

    render() {
        return (
            <div>
                <HomeView posts={this.state.posts}/>
            </div>
        );
    }
}