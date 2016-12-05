/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import {goBack} from '../../Components/common/GoBack';

export default class SinglePostView extends Component {
    render() {
        let date = moment(new Date(this.props.post.date)).format('MM/DD/YYYY');
        let rate = 0;
        for (let i = 0; i < this.props.rates.length; i++) {
            if (this.props.rates[i].postId === this.props.post._id) {
                rate += Number(this.props.rates[i].rating);
            }
        }
        let comments = this.props.comments.map(comment =>
            <li key={comment._id}>
                <h4>{comment.author}</h4>
                <div><i>{comment.email}</i></div>
                <br/>
                <p>{comment.text}</p>
            </li>
        )
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
                                <div className="john">
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
                                    <label className="comments">Email</label>
                                    <div className="clearfix"></div>
                                    <input size="79"
                                           name="commentAuthorEmail"
                                           value={this.props.commentAuthorEmail}
                                           onChange={this.props.onChangeHandler}/>
                                    <button type="submit" className="btn btn-primary">Create</button>
                                </form>
                                <div className="clearfix"></div>
                                <div>
                                    <br/>
                                    <h3>Comments</h3>
                                    <ul className="comments">
                                        {comments};
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