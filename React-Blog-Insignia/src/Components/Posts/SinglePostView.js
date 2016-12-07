/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import {goBack} from '../../Components/common/GoBack';
import '../../App.css';

export default class SinglePostView extends Component {
    render() {
        let date = moment(new Date(this.props.post.date)).format('DD/MM/YYYY');
        let rate = 0;
        for (let i = 0; i < this.props.rates.length; i++) {
            if (this.props.rates[i].postId === this.props.post._id) {
                rate += Number(this.props.rates[i].rating);
            }
        }
        let comments = this.props.comments;
        comments = comments.sort((a, b) => {
            return moment(new Date(b.date)) - moment(new Date(a.date))
        });
        if (comments.length > 0) {
            comments = comments.map(comment =>
                <li key={comment._id}>
                        <h4>{comment.author} <a>says:</a></h4>
                        <div className="clearfix"></div>
                        <div className="johnAuthorDate">
                            <p><span>{moment(new Date(comment.date)).format('DD MMMM YYYY')}</span></p>
                        </div>
                        <br/>
                    <div id={comment._id}>
                        <p className="SedComment">
                            <span><label>{comment.text}</label></span></p>
                    </div>
                    <div className="clearfix"></div>
                </li>
            );
        }
        else {
            comments = "No comments!"
        }
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="title">
                            <div key={this.props.post._id}>
                                <div className="some-title">
                                    <h3><a>{this.props.post.title}</a></h3>
                                </div>
                                <div className="clearfix"></div>
                                <div className="johnAuthorDate">
                                    <p><a>{this.props.post.author}</a><span>{date}</span></p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="tilte-grid">
                                    <p className="Sed">
                                        <span><label>{this.props.post.body}</label></span></p>
                                </div>
                                <div className="read">
                                    <div className="john">
                                        <p><a>Views({rate})</a></p>
                                    </div>
                                </div>
                                <br/>
                                <button type="button" className="btn btn-primary" onClick={goBack}>Go Back</button>
                                <div className="border">
                                    <p>a</p>
                                </div>
                                <label>Create Comment</label>
                                <div className="clearfix"></div>
                                <form onSubmit={this.props.onSubmitHandler}>
                                    <textarea className="body"
                                              name="commentBody"
                                              rows="6"
                                              cols="80"
                                              required
                                              value={this.props.commentBody}
                                              onChange={this.props.onChangeHandler}
                                    />
                                    <div className="clearfix"></div>
                                    <label className="comments">Name</label>
                                    <div className="clearfix"></div>
                                    <input size="79"
                                           onChange={this.props.onChangeHandler}
                                           value={this.props.commentAuthorName}
                                           name="commentAuthorName"/>
                                    <div className="clearfix"></div>
                                    <label className="comments"></label>
                                    <div className="clearfix"></div>
                                    <button type="submit" className="btn btn-primary">Create</button>
                                </form>
                                <div className="clearfix"></div>
                                <div>
                                    <br/>
                                    <h2><b>Comments</b></h2>
                                    <ul className="comments">
                                        {comments}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}