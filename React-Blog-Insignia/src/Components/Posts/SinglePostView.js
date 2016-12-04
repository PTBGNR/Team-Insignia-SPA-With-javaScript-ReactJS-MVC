/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

export default class SinglePostView extends Component {
    render() {
        let date = moment(new Date(this.props.post.date)).format('MM/DD/YYYY');
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
                                        <p><a>Views({this.props.post.rate})</a></p>
                                    </div>
                                </div>
                                <br/>
                                <button type="button" className="btn btn-primary" onClick={goBack}>Go Back</button>
                                <div className="border">
                                    <p>a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        function goBack() {
            window.history.back();
        }
    }
}