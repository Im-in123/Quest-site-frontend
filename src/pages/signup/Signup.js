"use client";
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons
import './signup.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous errors
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        let hasError = false;

        // Email validation
        if (!email) {
            setEmailError('Email is required.');
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            hasError = true;
        }

        // Password validation
        if (!password) {
            setPasswordError('Password is required.');
            hasError = true;
        }

        // Confirm password validation
        if (!confirmPassword) {
            setConfirmPasswordError('Confirm password is required.');
            hasError = true;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            hasError = true;
        }

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
                    <h1>Join Us</h1>
                    <p>Create an account to get started</p>
                    <a href="#">www.yoursite.com</a>
                </div>
                <div className="rightSection">
                    <div className="signupBox">
                        <h2>Sign Up</h2>

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

                            <div className={`inputGroup ${confirmPasswordError ? 'error' : ''}`}>
                                <label>Confirm Password</label>
                                <div className="input-icon-container">
                                    <FaLock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Re-enter your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                {confirmPasswordError && <li className="error-message">{confirmPasswordError}</li>}
                            </div>

                            <button className="continueButton" type="submit">
                                Continue
                            </button>
                        </form>

                        <p>or Connect with Social Media</p>
                        <button className="socialButton twitter">Sign up with Twitter</button>
                        <button className="socialButton facebook">Sign up with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
