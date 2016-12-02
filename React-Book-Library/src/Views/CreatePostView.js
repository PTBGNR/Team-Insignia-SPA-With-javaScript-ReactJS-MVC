/**
 * Created by Hristo on 01.12.2016 г..
 */
import React, {Component} from 'react';

export default class CreatePostView extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="fieldset">
                            <h4>Create Post</h4>
                            <form className="form" onSubmit={this.submitForm.bind(this)}>
                                <div className="row">
                                    <label>Title</label>
                                    <input className="title" type="text" placeholder="" name="title" required
                                           ref={e => this.titleField = e}/>
                                </div>
                                <div className="row">
                                    <label>Content</label>
                                    <textarea className="content" rows="10" name="content" required
                                           ref={e => this.contentField = e}/>
                                </div>
                                <div>
                                    <input className="btnCreatePost" type="submit" value="Create"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.titleField.value, this.contentField.value);
    }
}