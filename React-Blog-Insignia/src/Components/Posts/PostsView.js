import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import {cutText} from '../../Components/common/Cuttext';

export default class PostsView extends Component {
    render() {
        this.props.posts.sort((a,b) => {return moment(new Date(b.date) - moment(new Date(a.date)))});
        let posts = this.props.posts;
        let postsFirstCol = [];
        let postsSecondCol = [];
        for (let i = 0; i < posts.length; i += 2) {
            postsFirstCol.push(posts[i]);
        }
        for (let i = 1; i < posts.length; i += 2) {
            postsSecondCol.push(posts[i]);
        }

        let postRowsFirstCol = postsFirstCol.map(post =>
            <div key={post._id}>
                <div className="some-title">
                    <h3><Link to={"/posts/" + post._id}>{post.title}</Link></h3>
                </div>
                <div className="clearfix"></div>
                <div className="john">
                    <p><a>{post.author}</a><span>{moment(new Date(post.date)).format('MM/DD/YYYY')}</span></p>
                </div>
                <div className="clearfix"></div>
                <div className="tilte-grid">
                    <p className="Sed">
                        <span><label>{cutText(post.body)}</label></span></p>
                </div>
                <br/>
                <div className="john">
                    <p><a>Views({post.rate})</a></p>
                </div>
                <div className="clearfix"></div>
                <div className="readMore">
                    <Link to={"/posts/" + post._id}>Read More</Link>
                </div>
                <div className="border">
                    <p>a</p>
                </div>
            </div>
        );

        let postRowsSecondCol = postsSecondCol.map(post =>
            <div key={post._id}>
                <div className="some-title">
                    <h3><Link to={"/posts/" + post._id}>{post.title}</Link></h3>
                </div>
                <div className="clearfix"></div>
                <div className="john">
                    <p><a href="#">{post.author}</a><span>{moment(new Date(post.date)).format('MM/DD/YYYY')}</span></p>
                </div>
                <div className="clearfix"></div>
                <div className="tilte-grid">
                    <p className="Sed">
                        <span><label>{cutText(post.body)}</label></span></p>
                </div>  
                <br/>
                <div className="john">
                    <p><a>Views({post.rate})</a></p>
                </div>
                <div className="clearfix"></div>
                <div className="readMore">
                    <Link to={"/posts/" + post._id}>Read More</Link>
                </div>
                <div className="border">
                    <p>a</p>
                </div>
            </div>
        );

        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="row">
                            <div className="col-sm-6">
                                {postRowsFirstCol}
                            </div>
                            <div className="col-sm-6">
                                {postRowsSecondCol}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // getActions(post, userId) {
    //     if (post._acl.creator === userId)
    //         return (
    //             <td>
    //                 <input type="button" value="Edit"
    //                     onClick={this.props.editBookClicked.bind(this, book._id)} />
    //                 &nbsp;
    //                 <input type="button" value="Delete"
    //                    onClick={this.props.deleteBookClicked.bind(this, book._id)} />
    //             </td>
    //         );
    //     else
    //         return <td></td>;
    // }
}
