import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="fieldset">
                            <h4>Log in</h4>
                            <form className="form" onSubmit={this.props.submitForm}>
                                <div className="row">
                                    <label>Username</label>
                                    <input className="name" 
                                           type="text" placeholder="" 
                                           name="username" 
                                           required
                                           value={this.props.username}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div className="row">
                                    <label>Password</label>
                                    <input className="password"
                                           type="password"
                                           name="password"
                                           required
                                           value={this.props.password}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div>
                                    <input className="btnLogin"
                                           type="submit"
                                           value="Log in"
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
