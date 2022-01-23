import React from 'react';
import '../../components/form-input/form-input.component';
import '../../components/custom-button/custom-button.component';

import './sign-up.styles.scss'
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, { displayName });

        }
        catch (error) {
            console.error(error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (<div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput type='text' name='displayName' value={displayName} label='Display Name' handleChange={this.handleChange} required />
                <FormInput type='email' name='email' value={email} label='Email' handleChange={this.handleChange} required />
                <FormInput type='password' name='password' value={password} label='Password' handleChange={this.handleChange} required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' handleChange={this.handleChange} required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>

        </div>)
    }
}

export default SignUp;