/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class SinglePostView extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="title">
                            <div key={this.props.post._id}>
                                <div className="some-title">
                                    <h3><a href="single.html">{this.props.post.title}</a></h3>
                                </div>
                                <div className="john">
                                    <p><a href="#">{this.props.post.author}</a><span>{this.props.post.date}</span></p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="tilte-grid">
                                    <p className="Sed">
                                        <span><label>{this.props.post.body}</label></span></p>
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
