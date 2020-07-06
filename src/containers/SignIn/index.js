import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import TextInput from '../../components/TextInput/index';
import HeadingText from '../../components/HeadingText/index';
import Button from '../../components/Button/index';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error);
        }


    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <form className="form">
                    <HeadingText text="Sing in" />

                    <TextInput
                        required="required"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeHolder="Email"
                        type="email"
                        label="Email"
                        for="email"
                    />

                    <TextInput
                        required="required"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeHolder="Password"
                        type="password"
                        label="Password"
                        for="password"
                    />
                    <Button text="Sign in" type="submit" onClick={this.handleSubmit}/>

                    <span className="or">-- or --</span>

                    <Button text="Sign in with Google" type="submit" onClick={signInWithGoogle} />

                </form>

                <Link to="/sign-up" className="new-account">Create a new account</Link>

            </div>

        );
    }

}

export default withRouter(SignIn);