import React from 'react';

import { Navbar } from './navbar';
import { HomePage } from './home';
import { Projects } from './projects';
import { About } from './about';
import { ContactForm } from './contact';
import { Footer } from './footer';
import FlowbiteCarousel from './carousel';

import '../style.css';

export default function App(props) {
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