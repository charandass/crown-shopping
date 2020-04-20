import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'

import './sign-in-and-sign-out.style.scss';
import SignUp from '../../components/sign-up-component/sign-up.component';


const SignInAndSingnUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

);

export default SignInAndSingnUpPage;