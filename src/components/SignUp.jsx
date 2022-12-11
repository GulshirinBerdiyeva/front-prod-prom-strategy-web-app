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
                        <input
                            aria-label="Enter your username"
                            className="form-input"
                            type="text"
                            placeholder="Username"
                            onChange={({target}) => setUsername(target.value)}
                            value={username}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="form-input"
                            type="text"
                            placeholder="Full name"
                            onChange={({target}) => setFullName(target.value)}
                            value={fullName}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="form-input"
                            type="text"
                            placeholder="Email address"
                            onChange={({target}) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <div className="form-pass">
                            <input
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
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`form-button 
                            ${isInvalid && 'opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="form-foot">
                    <p>Have an account?{` `}
                        <a href="#Sign-in">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;