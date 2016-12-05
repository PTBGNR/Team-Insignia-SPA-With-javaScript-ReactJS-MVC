import React, {Component} from 'react';
import {Link} from 'react-router';
import {cutText} from '../../Components/common/Cuttext'
import moment from 'moment';
import {goBack} from '../../Components/common/GoBack';
export default class HomeView extends Component {
    render() {
        let categories = this.props.categories.map(category =>
            <li key={category._id}><Link to={"/postsByCategoryView/" + category.name}>{category.name}</Link></li>
        );
        categories = categories.slice(0, 6);
        let sortedPosts = this.props.posts;
        if (this.props.sortField === "Rating") {
            sortedPosts = sortedPosts.sort((a, b) => {
                return Number(b.rate) - Number(a.rate);
            });
        }
        else {
            sortedPosts = sortedPosts.sort((a, b) => {
                return moment(new Date(b.date) - moment(new Date(a.date)));
            });
        }
        let postAndRateData = [];

        for (let post of sortedPosts) {
            for (let rate of this.props.rates) {
                if(post._id === rate.postId){
                    postAndRateData.push([post, rate]);
                }
            }
        }

        let postRows = postAndRateData.map(postAndRate =>
            <div key={postAndRate[0]._id}>
                <div className="some-title">
                    <h3><Link to={"/singlePostView/" + postAndRate[0]._id}>{postAndRate[0].title}</Link></h3>
                </div>
                <div className="clearfix"></div>
                <div className="john">
                    <p><a>{postAndRate[0].author}</a><span>{moment(new Date(postAndRate[0].date)).format('MM/DD/YYYY')}</span></p>
                </div>
                <div className="clearfix"></div>
                <div className="tilte-grid">
                    <p className="Sed">
                        <span><label>{cutText(postAndRate[0].body)}</label></span></p>
                </div>
                <div className="read">
                    <div className="john">
                        <p><a>Comments(0)</a></p>
                    </div>
                    <div className="john">
                        <p><a>Views({postAndRate[1].rating})</a></p>
                    </div>
                    <div className="clearfix"></div>
                    <Link to={"/singlePostView/" + postAndRate[0]._id}>Read More</Link>
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
                            <button type="button" className="btn btn-primary" onClick={goBack}>Go Back</button>
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
                                    <h4>Sort By Criteria</h4>
                                    <select type='text'
                                            className="form-control"
                                            name="sortField"
                                            onChange={this.props.onChangeHandler}>
                                        <option>Recent</option>
                                        <option>Rating</option>
                                    </select>
                                    <div className="clearfix"></div>
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
