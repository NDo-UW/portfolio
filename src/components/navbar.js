import React, { useState, useEffect } from "react";
import { Popup } from "./popup";

export function Navbar(props) {
    // State to manage popup visibility
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [formattedTime, setFormattedTime] = useState('');
    const [period, setPeriod] = useState('');

    // Update the time every second
    useEffect(() => {
        const updateTime = () => {
            const time = new Date();
            const showTime = new Intl.DateTimeFormat('en-US', { 
                hour: 'numeric', 
                minute: 'numeric', 
                hour12: true, 
                timeZone: 'America/Los_Angeles'
            }).format(time);
            const [newFormattedTime, newPeriod] = showTime.split(' ');
            setFormattedTime(newFormattedTime);
            setPeriod(newPeriod);
        };

        updateTime(); // Set initial time
        const interval = setInterval(updateTime, 1000); // Update time every second

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    return (
        <nav className="navbar">
            <a href="#home-section">
                <p>ND</p>
            </a>
            <div>
                <p className="time">Seattle, WA <span>{formattedTime}</span> {period}</p>
                
                {/* Button to toggle popup */}
                <button onClick={() => setIsPopupVisible(true)}>
                    <img src="../img/burger-menu-svgrepo-com.svg" alt="menu"/>
                </button>
                
                
                {/* Popup component */}
                <Popup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
                    <a href='#home-section' onClick={() => setIsPopupVisible(false)}>
                        <h3 className="menu-link">HOME</h3>
                    </a>
                    <a href='#project-section' onClick={() => setIsPopupVisible(false)}>
                        <h3 className="menu-link">PROJECTS</h3>
                    </a>
                    <a href='#about-section' onClick={() => setIsPopupVisible(false)}>
                        <h3 className="menu-link">ABOUT</h3>
                    </a>
                    <a href='#contact-section' onClick={() => setIsPopupVisible(false)}>
                        <h3 className="menu-link">CONTACT</h3>
                    </a>
                    <a href="./img/NathanDo_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsPopupVisible(false)}>
                        <h3 className="menu-link">RESUME</h3>
                    </a>
                </Popup>
            </div>
        </nav>
    );
}
