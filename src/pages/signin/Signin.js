"use client";
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import './signin.css';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        // Clear previous errors
        setEmailError('');
        setPasswordError('');

        // Validate email
        if (!email) {
            setEmailError('Email is required.');
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            hasError = true;
        }

        // Validate password
        if (!password) {
            setPasswordError('Password is required.');
            hasError = true;
        }

        // If no errors, proceed
        if (!hasError) {
            alert('Form submitted successfully!');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="sectionWrapper">
                <div className="leftSection">
                    <h1>Questy</h1>
                    <p>Sign in to continue access</p>
                    <a href="#">www.yoursite.com</a>
                </div>
                <div className="rightSection">
                    <div className="signinBox">
                        <h2>Sign In</h2>

                        <form onSubmit={handleSubmit}>
                            <div className={`inputGroup ${emailError ? 'error' : ''}`}>
                                <label>Email Address</label>
                                <div className="input-icon-container">
                                    <FaEnvelope className="input-icon" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {emailError && <li className="error-message">{emailError}</li>}
                            </div>

                            <div className={`inputGroup ${passwordError ? 'error' : ''}`}>
                                <label>Password</label>
                                <div className="input-icon-container">
                                    <FaLock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span onClick={togglePasswordVisibility} className="password-toggle">
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {passwordError && <li className="error-message">{passwordError}</li>}
                            </div>

                            <button className="continueButton" type="submit">
                                Continue
                            </button>
                        </form>
                        
                        <p>or Connect with Social Media</p>
                        <button className="socialButton twitter">Sign in with Twitter</button>
                        <button className="socialButton facebook">Sign in with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
