import React from 'react';

import TextInput from '../../components/TextInput/index';
import HeadingText from '../../components/HeadingText/index';
import Button from '../../components/Button/index';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';



class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state
        
        if(password !== confirmPassword){
            alert("Password don't match")
            return;
        }
        try{
             const {user} = await auth.createUserWithEmailAndPassword(email, password);

             await createUserProfileDocument(user, {displayName});

             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
             })
        } 
        catch(error){
            console.error(error);
        }
    }
    
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
         
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <form className="form" onSubmit={this.handleSubmit}>
                    <HeadingText text="Sing up"/>
    
                    <TextInput
                        required="required" 
                        id="name"
                        placeHolder="Display name" 
                        name="displayName"
                        value={displayName}
                        type="text" 
                        label="Full Name" 
                        for="name"
                        onChange={this.handleChange}
                    />
    
                    <TextInput
                        required="required" 
                        id="email"
                        name="email"
                        placeHolder="Email" 
                        value={email}
                        type="email" 
                        label="Email" 
                        for="email"
                        onChange={this.handleChange}
                    />
    
                    <TextInput
                        required="required" 
                        id="pass"
                        name="password"
                        placeHolder="Password" 
                        value={password}
                        type="password" 
                        label="Password" 
                        for="password"
                        onChange={this.handleChange}
                    />

                    <TextInput
                        required="required" 
                        id="password"
                        name="confirmPassword"
                        placeHolder="Confrim Password" 
                        type="password" 
                        value={confirmPassword}
                        label="Confrim Password" 
                        for="password"
                        onChange={this.handleChange}
                    />
                <Button text="Sign up" onClick={this.handleSubmit} type="submit"/>
    
                </form>
            </div>
    
            
        );
    }
    
}

export default SignUp;