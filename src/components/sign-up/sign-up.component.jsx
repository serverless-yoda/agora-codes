import React, { Component } from 'react'
import FormButton from '../form-button/form-button.component'
import FormInput from '../form-input/form-input.component'
import { auth } from '../firebase/firebase.utils'

import './sign-up.style.scss'

class SignUp extends Component {
    constructor() {
        super() 

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            displayName,
            email,
            password,
            confirmPassword
        } = this.state;

        if(password.toLowerCase() !== confirmPassword.toLowerCase()) {
            console.log('password dont match')
            return
        }

        try {
            const { user, firebaseCreateDocument } = await auth.createUserWithEmailAndPassword(email,password)
            await firebaseCreateDocument(user, {displayName})

        }catch (error) {
         console.log(error)
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword
        } = this.state;

        return (
            <div className="sign-up">
                <h2 className='title'>I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label = 'Display name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label = 'Passwprd'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <FormButton type="submit">Sign Up</FormButton>
                </form>
            </div>
        )
    }
}

export default SignUp