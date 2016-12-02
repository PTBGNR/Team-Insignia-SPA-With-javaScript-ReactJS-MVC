/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';

export default class RegisterView extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-text">
                        <div className="fieldset">
                            <h4>Register</h4>
                            <form className="form" onSubmit={this.submitForm.bind(this)}>
                                <div className="row">
                                    <label>Username</label>
                                    <input className="name" type="text" name="username" required
                                           ref={e => this.usernameField = e}/>
                                </div>
                                <div className="row">
                                    <label>Password</label>
                                    <input className="password" type="password" name="password" required
                                           ref={e => this.passwordField = e}/>
                                </div>
                                <div className="row">
                                    <label>Confirm Password</label>
                                    <input className="confirmPassword" type="password" name="confirmPassword" required
                                           ref={e => this.confirmPasswordField = e}/>
                                </div>
                                <div className="row">
                                    <label>First name</label>
                                    <input className="firstName" type="text" name="firstName" required
                                           ref={e => this.firstNameField = e}/>
                                </div>
                                <div className="row">
                                    <label>Last name</label>
                                    <input className="lastName" type="text" name="lastName" required
                                           ref={e => this.lastNameField = e}/>
                                </div>
                                <div>
                                    <input className="btnRegister" type="submit" value="Register"/>
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
            this.usernameField.value, this.passwordField.value, this.confirmPasswordField.value, this.firstNameField.value, this.lastNameField.value);
    }
}
