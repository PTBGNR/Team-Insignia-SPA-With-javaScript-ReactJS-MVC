/**
 * Created by Hristo on 02.12.2016 г..
 */

import React, {Component} from 'react';
import SinglePostView from './SinglePostView';
import {showInfo} from '../../Components/common/InfoBox';
import $ from 'jquery';
import {findPostUpdatedRate} from '../../Models/post'

export default class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        //Display teams
        showInfo("Post loaded.");
        this.setState({post: response});
    }

    componentDidMount() {
        // Request list of teams from the server
        findPostUpdatedRate(this.props.params.postId, this.onLoadSuccess);
    }

    render() {
        $(window).scrollTop(0);
        if(this.state.post){
            return (
                <div>
                    <SinglePostView post={this.state.post}/>
                </div>
            );
        }
        return <div>Loading...</div>
    }
}