import React, { useEffect } from 'react';

export function Popup(props) {
    useEffect(() => {
        if (props.trigger) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [props.trigger]);

    return (props.trigger) ? (
        <div className="popup-overlay">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
                <img src='./img/exit.svg' alt='return to previous'/>
            </button>
            <div className="popup-content">
                {props.children}
            </div>
        </div>
    ) : "";
}
