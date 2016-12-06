/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import {goBack} from '../../../Components/common/GoBack';

export default class DeletePostView extends Component {
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
                    <p className="SedComment">
                        <span><label>{comment.text}</label></span></p>

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
                            <div id="deleteBox"><b><i>Are you sure want to delete this post!</i></b></div>
                            <button type="submit" className="btn btn-primary" id="btnDelete">Delete</button>
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
                                <h2><b>Comments</b></h2>
                                <ul className="comments">
                                    {comments}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}