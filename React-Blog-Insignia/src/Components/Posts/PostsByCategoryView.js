/**
 * Created by Hristo on 04.12.2016 г..
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {cutText} from '../../Components/common/Cuttext'
import moment from 'moment';

export default class PostsByCategoryView extends Component {
    render() {
        let categories = this.props.categories.map(category =>
            <li key={category._id}><Link to={"/postsByCategoryView/" + category.name}>{category.name}</Link></li>
        );
        categories = categories.slice(0, 6);
        this.props.posts.sort((a, b) => {
            return moment(new Date(b.date) - moment(new Date(a.date)))
        });
        let postRows = this.props.posts.map(post =>
            <div key={post._id}>
                <div className="some-title">
                    <h3><Link to={"/singlePostView/" + post._id}>{post.title}</Link></h3>
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
                <div className="read">
                    <div className="john">
                        <p><a>Views({post.rate})</a></p>
                    </div>
                    <Link to={"/singlePostView/" + post._id}>Read More</Link>
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
                        <div className="title">
                            {postRows}
                            <div className="border1">
                                <div className="pre">
                                    <a href="#">Prev</a>
                                </div>
                                <div className="number">
                                    <ul>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">6</a></li>
                                        <li><a href="#">7</a></li>
                                        <li><a href="#">8</a></li>
                                        <li><a href="#">9</a></li>
                                        <li><a href="#">10</a></li>
                                        <li><a href="#">11</a></li>
                                        <li><a href="#">12</a></li>
                                    </ul>
                                </div>
                                <div className="next">
                                    <a href="#">Next</a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="categories">
                            <div className="categ">
                                <div className="cat">
                                    <h3>Categories</h3>
                                    <ul>
                                        {categories};
                                    </ul>
                                </div>
                                <div className="recent-com">
                                    <h3>Recent Comments</h3>
                                    <ul>
                                        <li><a href="single.html">Comment1</a>
                                        </li>
                                        <li><a href="single.html">Comment2</a>
                                        </li>
                                        <li><a href="single.html">Comment3</a></li>
                                        <li><a href="single.html">Comment4</a>
                                        </li>
                                        <li><a href="single.html">Comment5</a></li>
                                    </ul>
                                </div>
                                <div className="view">
                                    <a href="single.html">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
