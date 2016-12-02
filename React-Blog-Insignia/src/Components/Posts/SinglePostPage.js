// /**
//  * Created by Hristo on 02.12.2016 г..
//  */
//
// import React, {Component} from 'react';
// import {findSinglePostPage} from '../../Models/post';
// import SinglePostView from './SinglePostView';
//
// export default class SinglePostPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.bindEventHandlers();
//     }
//
//     bindEventHandlers() {
//         alert();
//         this.onLoadSuccess = this.onLoadSuccess.bind(this);
//     }
//
//     onLoadSuccess(response) {
//         // Display teams
//         alert();
//         this.setState({post: response});
//     }
//
//     componentDidMount() {
//         // Request list of teams from the server
//         alert()
//         findSinglePostPage(this.props.params.postId, this.onLoadSuccess);
//     }
//
//     render() {
//         console.dir(this.state.post);
//         return (
//             <div>
//                 <SinglePostView post={this.state.post}/>
//             </div>
//         );
//     }
// }