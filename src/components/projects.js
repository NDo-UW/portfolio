import React, { useState } from 'react';
import { PasswordProtectedPopup } from './passwordProtected'; // Import the password popup component

export function Projects(props) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
        {
            title: "Ignite Robotics",
            type: "Web Development • UI/UX • Internship",
            description: "Website redesign and development of a student and administrative portal.",
            attributes: ["Ongoing"],
            imgSrc: './img/ignite.png',
            link: "",
            protected: true,
        },
        {
            title: "Build Genie",
            type: "Web Development",
            description: "A web application that organizes and manages PC build parts in one place.",
            attributes: ["React", "Javascript", "Firebase"],
            imgSrc: './img/buildgenie.png',
            link: "",
            protected: true,
        },
        {
            title: "Foodie Fun",
            type: "Web Development",
            description: "A web application that recommends, filters, and users to track and save their dining wishlist.",
            attributes: ["Flask", "Python", "SQLAlchemy"],
            imgSrc: './img/foodie.png',
            link: "",
            protected: true,
        },
        {
            title: "Mylo",
            type: "Product Design",
            description: "Helping international students stay connected with their families, regardless of the distance.",
            attributes: ["User Research", "Prototyping", "SolidWorks"],
            imgSrc: './img/mylo.png',
            link: "",
            protected: true,
        },
        {
            title: "Eco-Eye",
            type: "UI/UX",
            description: "A Google Chrome extension that helps users make informed, sustainable shopping decisions.",
            attributes: ["User Research", "UI/UX", "Prototyping"],
            imgSrc: './img/ecoeye.png',
            link: "",
            protected: true,
        },
    ];

    const handleProjectClick = (project) => {
        if (project.protected) {
            setCurrentProject(project);
            setIsPopupVisible(true);
        } else {
            if (project.link) {
                window.open(project.link, '_blank'); // Open the link if it's not password-protected
            }
        }
    };

    const renderProjects = (projects) => {
        return projects.map((project, index) => (
            <div 
                key={index} 
                className={`project ${project.link ? '' : 'disabled'}`} 
                onClick={() => handleProjectClick(project)}
                style={{ cursor: project.link || project.protected ? 'pointer' : 'default' }}
            >
                <div className="project-img-container">
                    <img src={project.imgSrc} className="project-img" alt={project.title}/>
                </div>
                <h2 className="project-type">{project.type}</h2>
                <p className="project-title">{project.title}</p>
                <p>{project.description}</p>
                <div className="project-attribute">
                    {project.attributes.map((attribute, attrIndex) => (
                        <div className="attribute" key={attrIndex}>
                            <h2>{attribute}</h2>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    return (
        <div id="project-section" className="work-container">
            <h1>My Work</h1>
            <div className="project-container">
                {renderProjects(projects)}
            </div>
            
            {/* Popup for password protection */}
            {isPopupVisible && (
                <PasswordProtectedPopup
                    isOpen={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)}
                    correctPassword="yourPasswordHere"
                >
                    <p>Accessing {currentProject?.title} Case Study</p>
                </PasswordProtectedPopup>
            )}
        </div>
    );
}
