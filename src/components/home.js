// import {ReactTyped} from 'react-typed';
// import React, { useState, useEffect } from 'react';

// function HomePageText(props){
//     return (
//         <div className="hero-info">
//             <div className="hero-name">
//                 <h1>Nathan Do</h1>
//                 <p>[nā-then dō]</p>
//             </div>
//             <div className="hero-list">
//                 <p>web developer, product designer</p>
//                 <ol>
//                     <li>attends the <span className='UW'>University of Washington</span> studying Informatics</li>
//                     <li>web developer @ Ignite Robotics</li>
//                     <li>also a{' '}
//                         <span className='typed-wrapper'>
//                             <ReactTyped
//                                 strings={[
//                                     " digital and film photographer  📸",
//                                     " UW Club bowler 🎳",
//                                     " car enthusiast 🏎️"
//                                 ]}
//                                 typeSpeed={90}
//                                 backSpeed={40}
//                                 backDelay={1250}
//                                 loop
//                             />
//                         </span>
//                     </li>
//                 </ol>
//             </div>
//         </div>
//     )
// }

// function HomeToAboutButton(props){
//     return (
//         <a href="#about-section" className="hero-learn">
//             <h2>learn more about me</h2>
//             <img src="./img/arrow-right.svg" alt='link to about'/>
//         </a>
//     )
// }

// export function HomePage(props) {

//     return (
//         <div className="hero-container"  id='home-section'>
//             <div className="hero">
//                 <HomePageText/>
//                 <HomeToAboutButton/>
//             </div>
//         </div>
//     )
// }

import { ReactTyped } from 'react-typed';
import React, { useState, useEffect } from 'react';

function HomePageText(props) {
    return (
        <div className="hero-info">
            <div className="hero-name">
                <h1>Nathan Do</h1>
                <p>[nā-then dō]</p>
            </div>
            <div className="hero-list">
                <p>product designer</p>
                <ol>
                    <li>attends the <span className="UW">University of Washington</span> studying Informatics-HCI</li>
                    <li>web developer @ Ignite Robotics</li>
                    <li>
                        also a{' '}
                        <span className="typed-wrapper">
                            <ReactTyped
                                strings={[
                                    ' digital and film photographer  📸',
                                    ' UW Club bowler 🎳',
                                    ' car enthusiast 🏎️',
                                ]}
                                typeSpeed={90}
                                backSpeed={40}
                                backDelay={1250}
                                loop
                            />
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

function HomeToAboutButton(props) {
    return (
        <a href="#about-section" className="hero-learn">
            <h2>learn more about me</h2>
            <img src="./img/arrow-right.svg" alt="link to about" />
        </a>
    );
}

export function HomePage(props) {
    const [animate, setAnimate] = useState(false); // State for animation trigger

    useEffect(() => {
        setAnimate(true); // Trigger animation when the component mounts
    }, []);

    return (
        <div className="hero-container" id="home-section">
            <div className="hero">
                <div className={`hero-info-wrapper ${animate ? 'animate' : ''}`}>
                    <HomePageText />
                </div>
                <div className={`hero-button-wrapper ${animate ? 'animate' : ''}`}>
                    <HomeToAboutButton />
                </div>
            </div>
        </div>
    );
}
