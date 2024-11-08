import React, { useState, useEffect, useRef } from 'react';

export function PasswordProtectedPopup({ isOpen, onClose }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const popupRef = useRef(null); // Reference to the popup content

    useEffect(() => {
        if (isOpen) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';

            // Add event listener for outside clicks
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const handleOutsideClick = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose(); // Close popup when clicking outside
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const correctPassword = "lhs1920XF91!";

        if (password === correctPassword) {
            onClose(); // Close the popup
            window.open('/path-to-your-case-study', '_blank'); // Open the case study in a new tab
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    if (!isOpen) return null; // If popup is not open, render nothing

    return (
        <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
                <button className="close-btn" onClick={onClose}>
                    <img src='./img/exit.svg' alt='return to previous'/>
                </button>
                <h1 className='password-title'>This case study is locked.
                    <br/>Please enter the password to view it.
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className='password-input'
                    />
                    <button type="submit" className='password-submit'>Submit</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}
