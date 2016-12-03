/**
 * Created by Hristo on 30.11.2016 г..
 */
import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../Models/user';
import {showInfo} from '../common/InfoBox';
import {showError} from '../common/ErrorBox';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            case 'confirmPassword':
                this.setState({ confirmPassword: event.target.value });
                break;
            case 'firstName':
                this.setState({ firstName: event.target.value });
                break;
            case 'lastName':
                this.setState({ lastName: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            showError('Passwords mismatch!');
            return;
        }
        this.setState({ submitDisabled: true });
        register(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            showInfo("User registration successful.");
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}


RegisterPage.contextTypes = {
    router: React.PropTypes.object
};
