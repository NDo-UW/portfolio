import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';


import { Navbar } from './navbar';
import { HomePage } from './home';
import { Projects } from './projects';
import { About } from './about';
import { ContactForm } from './contact';
import { Footer } from './footer';
import FlowbiteCarousel from './carousel';

import '../style.css';

export default function App(props) {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize("G-4ZLWQE5DV8"); // Replace with your GA4 Tracking ID
    }, []);

    useEffect(() => {
        // Track pageviews on route changes
        ReactGA.send("pageview", {
            page: location.pathname + location.search,
        });
    }, [location]);

    return (
        <div className='home-page'>
            <Navbar/>
            <HomePage/>
            <div className='project-about-container'>
                <Projects/>
                <About />
            </div>
            <ContactForm />
            <Footer />
        </div>
    )
}