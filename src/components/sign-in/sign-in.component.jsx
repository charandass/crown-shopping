import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styels.scss';

import { auth,signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }
        
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     type="email" 
                     name="email" 
                     value={this.state.email}
                     handgleChange={this.handleChange}
                     label="Email"
                     required
                     />
                    <FormInput 
                    type="password"
                     name="password" 
                     value={this.state.password}
                     handgleChange={this.handleChange}
                     label="Password"
                     required
                     />
                     <div className="button">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        Sign In With Google
                        {''}
                        </CustomButton>
                     </div>
                   
                </form>
            </div>
        )
    }
}

export default  SignIn;