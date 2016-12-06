import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import {cutText} from '../../Components/common/Cuttext';

export default class PostsView extends Component {
    render() {
        this.props.posts.sort((a,b) => {return moment(new Date(b.date) - moment(new Date(a.date)))});
        let postAndRateData = [];

        for (let post of this.props.posts) {
            for (let rate of this.props.rates) {
                if(post._id === rate.postId){
                    postAndRateData.push([post, rate]);
                }
            }
        }
        let postsFirstCol = [];
        let postsSecondCol = [];
        for (let i = 0; i < postAndRateData.length; i += 2) {
            postsFirstCol.push(postAndRateData[i]);
        }
        for (let i = 1; i < postAndRateData.length; i += 2) {
            postsSecondCol.push(postAndRateData[i]);
        }

        let postRowsFirstCol = [];
            for(let postRate of postsFirstCol){
                postRowsFirstCol.push(<div key={postRate[0]._id}>
                    <div className="some-title">
                        <h3><Link to={"/posts/" + postRate[0]._id}>{postRate[0].title}</Link></h3>
                    </div>
                    <div className="clearfix"></div>
                    <div className="john">
                        <p><a>{postRate[0].author}</a><span>{moment(new Date(postRate[0].date)).format('DD/MM/YYYY')}</span></p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="tilte-grid">
                        <p className="Sed">
                            <span><label>{cutText(postRate[0].body)}</label></span></p>
                    </div>
                    <br/>
                    <div className="john">
                        <p><a>Comments(0)</a></p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="john">
                        <p><a>Views({postRate[1].rating})</a></p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="readMore">
                        <Link to={"/posts/" + postRate[0]._id}>Read More</Link>
                    </div>
                    <input type="button" value="Delete"/>
                    <input type="button" value="Edit"/>
                    <div className="border">
                        <p>a</p>
                    </div>
                </div>)
            }

        let postRowsSecondCol = [];
            for(let postRate of postsSecondCol){
            postRowsSecondCol.push(<div key={postRate[0]._id}>
                <div className="some-title">
                    <h3><Link to={"/posts/" + postRate[0]._id}>{postRate[0].title}</Link></h3>
                </div>
                <div className="clearfix"></div>
                <div className="john">
                    <p><a>{postRate[0].author}</a><span>{moment(new Date(postRate[0].date)).format('DD/MM/YYYY')}</span></p>
                </div>
                <div className="clearfix"></div>
                <div className="tilte-grid">
                    <p className="Sed">
                        <span><label>{cutText(postRate[0].body)}</label></span></p>
                </div>
                <br/>
                <div className="john">
                    <p><a>Comments(0)</a></p>
                </div>
                <div className="clearfix"></div>
                <div className="john">
                    <p><a>Views({postRate[1].rating})</a></p>
                </div>
                <div className="clearfix"></div>
                <div className="readMore">
                    <Link to={"/posts/" + postRate[0]._id}>Read More</Link>
                </div>
                <input type="button" value="Delete"/>
                <input type="button" value="Edit"/>
                <div className="border">
                    <p>a</p>
                </div>
            </div>)
        }

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
