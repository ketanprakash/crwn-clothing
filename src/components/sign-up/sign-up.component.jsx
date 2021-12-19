import React from 'react'

import { FormInput } from "../form-input/form-input.component";

import { CustomButton } from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

class SignUp extends React.Component{
  constructor(){
    super();

    this.state = {
      displayName: '',
      email: '', 
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
      await createUserProfileDocument(user, {displayName: this.state.displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
    catch(err){
      console.error(err);
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit ={this.handleSubmit}>
          <FormInput
            type = 'text'
            name = 'displayName'
            value = {this.state.displayName}
            label = 'Display Name'
            onChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'email'
            name = 'email'
            value = {this.state.email}
            label = 'Email'
            onChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'password'
            name = 'password'
            value = {this.state.password}
            label = 'Password'
            onChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'password'
            name = 'confirmPassword'
            value = {this.state.confirmPassword}
            label = 'Confirm Password'
            onChange = {this.handleChange}
            required
          />
          <CustomButton type = 'submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;