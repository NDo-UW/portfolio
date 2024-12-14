// import React, { useEffect } from 'react';
// import ReactGA from 'react-ga4';
// import { useLocation } from 'react-router-dom';


// import { Navbar } from './navbar';
// import { HomePage } from './home';
// import { Projects } from './projects';
// import { About } from './about';
// import { ContactForm } from './contact';
// import { Footer } from './footer';

// import '../style.css';

// export default function App(props) {
//     const location = useLocation();

//     useEffect(() => {
//         ReactGA.initialize("G-4ZLWQE5DV8"); // Replace with your GA4 Tracking ID
//     }, []);

//     useEffect(() => {
//         // Track pageviews on route changes
//         ReactGA.send("pageview", {
//             page: location.pathname + location.search,
//         });
//     }, [location]);

//     return (
//         <div className='home-page'>
//             <Navbar/>
//             <HomePage/>
//             <div className='project-about-container'>
//                 <Projects/>
//                 <About />
//             </div>
//             <ContactForm />
//             <Footer />
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { Navbar } from './navbar';
import { HomePage } from './home';
import { Projects } from './projects';
import { About } from './about';
import { ContactForm } from './contact';
import { Footer } from './footer';

import '../style.css';

export default function App(props) {
    const location = useLocation();
    const [animate, setAnimate] = useState(false); // State to trigger animation

    useEffect(() => {
        ReactGA.initialize("G-4ZLWQE5DV8"); // Replace with your GA4 Tracking ID
    }, []);

    useEffect(() => {
        // Track pageviews on route changes
        ReactGA.send("pageview", {
            page: location.pathname + location.search,
        });
    }, [location]);

    useEffect(() => {
        // Trigger the animation when the component mounts
        setAnimate(true);
    }, []);

    return (
        <div className='home-page'>
            <Navbar />
            <HomePage />
            <div className={`project-about-container ${animate ? 'animate-up' : ''}`}>
                <Projects />
                <About />
            </div>
            <ContactForm />
            <Footer />
        </div>
    );
}
