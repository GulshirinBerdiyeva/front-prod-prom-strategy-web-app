import {useState, useEffect} from 'react';

import image from "../assets/images/sign-up-intro.png";
import logo from "../assets/images/header-logo.svg";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function SignUp() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    const [passwordType, setPasswordType] = useState("text");
    const [password, setPassword] = useState('');
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    };

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    return (
        <div className="sign-up sign-up-wrapper">
            <div className="left">
                <img className="img" src={image} alt="image"/>
            </div>
            <div className="right">
                <div className="form-wrapper">
                    <h1 className="form-header">
                        <img src={logo} alt="logo"/>
                        <p>Intelligent Product Promotion Platform</p>
                    </h1>

                    {error && <p className="sign-up-err">{error}</p>}

                    <form>
                        {/*<label onInput="first-name"><p>First name</p></label>*/}
                        {/*<input*/}
                        {/*    id="first-name"*/}
                        {/*    aria-label="Enter your first name"*/}
                        {/*    className="form-input"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="First name"*/}
                        {/*/>*/}
                        {/*<label onInput="last-name"><p>Last name</p></label>*/}
                        {/*<input*/}
                        {/*    id="last-name"*/}
                        {/*    aria-label="Enter your last name"*/}
                        {/*    className="form-input"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Last name"*/}
                        {/*/>*/}
                        {/*<label onInput="username"><p>Username</p></label>*/}
                        {/*<input*/}
                        {/*    id="username"*/}
                        {/*    aria-label="Enter your username"*/}
                        {/*    className="form-input"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Username"*/}
                        {/*    onChange={({target}) => setFullName(target.value)}*/}
                        {/*    value={fullName}*/}
                        {/*/>*/}
                        {/*<label onInput="birth-date"><p>Birth date</p></label>*/}
                        {/*<input*/}
                        {/*    id="birth-date"*/}
                        {/*    aria-label="Enter your birth date"*/}
                        {/*    className="form-input"*/}
                        {/*    type="date"*/}
                        {/*    placeholder="Birth date"*/}
                        {/*/>*/}
                        {/*<label onInput="url"><p>Social media url</p></label>*/}
                        {/*<input*/}
                        {/*    id="url"*/}
                        {/*    aria-label="Enter your social media url"*/}
                        {/*    className="form-input"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Social media url"*/}
                        {/*/>*/}
                        <label onInput="email"><p>Email</p></label>
                        <input
                            id="email"
                            aria-label="Enter your email address"
                            className="form-input"
                            type="text"
                            placeholder="Email address"
                            onChange={({target}) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <label onInput="password"><p>Password</p></label>
                        <div className="form-pass">
                            <input
                                id="password"
                                aria-label="Enter your password"
                                className="form-input pass-input"
                                placeholder="Password"
                                type={passwordType}
                                onChange={({target}) => setPassword(target.value)}
                                value={password}
                            />
                            {passwordType === "password" ?
                                <VisibilityOff className="pass-button" onClick={togglePassword}/> :
                                <Visibility className="pass-button" onClick={togglePassword}/>
                            }
                        </div>
                        {/*<label onInput="avatar">*/}
                        {/*    <span>Upload your avatar:</span>*/}
                        {/*    <input*/}
                        {/*        id="avatar"*/}
                        {/*        aria-label="Upload your avatar"*/}
                        {/*        className="form-input-file"*/}
                        {/*        type="file"*/}
                        {/*    />*/}
                        {/*</label>*/}
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`form-button 
                            ${isInvalid && 'opacity-50'}`}
                        >
                            Sign In
                            {/*Sign Up*/}
                        </button>
                    </form>
                </div>
                <div className="form-foot">
                    {/*<p>Have account already?{` `}*/}
                    {/*    <a href="#Sign-in">Sign in</a>*/}
                    {/*</p>*/}
                    <p>Haven't got an account?{` `}
                        <a href="#Sign-in">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;