import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import FormButton from '../form-button/form-button.component'
import { signInWithGoogle } from '../../components/firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email:'',
            password: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="email"
                        type="text"
                        name="email" 
                        value={this.state.email} required 
                        handleChange={this.handleChange}/>
                   
                    <FormInput 
                        label="password"
                        type="password"
                        name="password" 
                        value={this.state.password}
                        required 
                        handleChange={this.handleChange}/>
                   

                    <FormButton type="submit">Sign In</FormButton>
                    <FormButton onClick={signInWithGoogle}>
                        {' '}
                        Google Sign In
                    </FormButton>
                </form>
            </div>
        )
    }

}

export default SignIn