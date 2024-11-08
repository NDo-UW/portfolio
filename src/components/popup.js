// import React, { useEffect } from 'react';

// export function Popup(props) {
//     useEffect(() => {
//         if (props.trigger) {
//             // Disable scrolling
//             document.body.style.overflow = 'hidden';
//         } else {
//             // Enable scrolling
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [props.trigger]);

//     return (props.trigger) ? (
//         <div className="popup-overlay">
//             <button className="close-btn" onClick={() => props.setTrigger(false)}>
//                 <img src='./img/exit.svg' alt='return to previous'/>
//             </button>
//             <div className="popup-content">
//                 {props.children}
//             </div>
//         </div>
//     ) : "";
// }

import React, { useEffect, useRef } from 'react';

export function Popup(props) {
    const popupRef = useRef(null);

    // Handle outside click
    const handleOutsideClick = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            props.setTrigger(false); // Close the popup
        }
    };

    useEffect(() => {
        if (props.trigger) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';

            // Add click listener for outside clicks
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }

        return () => {
            // Cleanup on unmount or when popup closes
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [props.trigger]);

    return props.trigger ? (
        <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <img src='./img/exit.svg' alt='return to previous'/>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}
