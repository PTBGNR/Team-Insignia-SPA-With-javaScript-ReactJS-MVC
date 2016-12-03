import React, {Component} from 'react';
import {Link} from 'react-router';
import {cutText} from '../common/Cuttext';
import moment from 'moment';
import Pager from '../../Components/common/Pager';

export default class HomeView extends Component {
    render() {
        this.props.posts.sort((a,b) => {return moment(new Date(b.date) - moment(new Date(a.date)))});
        let postRows = this.props.posts.map(post =>
                <div key={post._id}>
                    <div className="some-title">
                        <h3><Link to={"/singlePostView/" + post._id}>{post.title}</Link></h3>
                    </div>
                    <div className="john">
                        <p><a>{post.author}</a><span>{moment(new Date(post.date)).format('MM/DD/YYYY')}</span></p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="tilte-grid">
                        <p className="Sed">
            <span><label>{cutText(post.body)}</label></span></p>
                    </div>
                    <div className="read">
                        <Link to={"/singlePostView/" + post._id}>Read More</Link>
                    </div>
                    <div className="border">
                        <p>a</p>
                    </div>
                </div>
        );
        return (
            // <div className="home-view">
            //     <h1>Home</h1>
            //     { this.props.username ?
            //         <p>Welcome, {this.props.username}.</p> :
            //         <p>Welcome to the book library.</p>
            //     }
            // </div>

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
                        <div>
                            <Pager posts={postRows}/>
                            </div>
                        <div className="categories">
                            <div className="categ">
                                <div className="cat">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a href="single.html">DataMigration</a></li>
                                        <li><a href="single.html">Salesforce</a></li>
                                        <li><a href="single.html">REST</a></li>
                                        <li><a href="single.html">API</a></li>
                                        <li><a href="single.html">SWIFT</a></li>
                                        <li><a href="single.html">DesignforChildren</a></li>
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
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
