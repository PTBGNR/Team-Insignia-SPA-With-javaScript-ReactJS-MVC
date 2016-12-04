/**
 * Created by Hristo on 01.12.2016 г..
 */
import React, {Component} from 'react';

export default class CreatePostForm extends Component {
    render() {
        let categories = this.props.categories.map(category =>
            <option key={category._id} value={category.name}/>
        );
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="fieldset">
                            <h4>Create Post</h4>
                            <form className="form" onSubmit={this.props.onSubmitHandler}>
                                <div className="row">
                                    <label>Title</label>
                                    <input className="title"
                                           type="text"
                                           name="title"
                                           required
                                           value={this.props.title}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div className="row">
                                    <label>Body</label>
                                    <textarea className="body"
                                              name="body"
                                              rows="10"
                                              required
                                              value={this.props.body}
                                              disabled={this.props.submitDisabled}
                                              onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div className="row">
                                    <label>Category</label>
                                    <input type='text'
                                           name="category"
                                           list='listid'
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}/>
                                    <datalist id='listid'>
                                        {categories};
                                    </datalist>
                                </div>
                                <div>
                                    <input className="btnCreatePost"
                                           type="submit"
                                           value="Create"
                                           disabled={this.props.submitDisabled}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}