import React from 'react';
import './sign-in.styles.scss'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton} from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
export class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    }
    catch(err){
      console.error(err);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]: value});
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput type="email" name = "email" value = {this.state.email} label = {'Email'} required handleChange = {this.handleChange}/>
          <FormInput type="password" name = "password" value = {this.state.password} label = {'Password'} required handleChange = {this.handleChange}/>
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} googlesignin="true">SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}