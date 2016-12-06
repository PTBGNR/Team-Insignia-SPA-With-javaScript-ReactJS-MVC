import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="fieldset">
                            <h4>Register</h4>
                            <form className="form" onSubmit={this.props.onSubmitHandler}>
                                <div className="row">
                                    <label>Username</label>
                                    <input className="name"
                                           type="text"
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
                                <div className="row">
                                    <label>Confirm Password</label>
                                    <input className="confirmPassword"
                                           type="password"
                                           name="confirmPassword"
                                           required
                                           value={this.props.confirmPassword}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div className="row">
                                    <label>First name</label>
                                    <input className="firstName"
                                           type="text"
                                           name="firstName"
                                           value={this.props.firstName}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div className="row">
                                    <label>Last name</label>
                                    <input className="lastName"
                                           type="text"
                                           name="lastName"
                                           value={this.props.lastName}
                                           disabled={this.props.submitDisabled}
                                           onChange={this.props.onChangeHandler}
                                    />
                                </div>
                                <div>
                                    <input className="btnRegister"
                                           type="submit"
                                           value="Register"
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
