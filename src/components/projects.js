import React, { useState, useEffect } from 'react';
import { PasswordProtectedPopup } from './passwordProtected'; // Import the password popup component
import projectsData from '../projects.json'; // Import the projects JSON data

export function Projects() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = projectsData;

    const handleProjectClick = (project) => {
        if (project.protected) {
            setCurrentProject(project);
            setIsPopupVisible(true);
        } else {
            if (project.link) {
                window.open(project.link, '_blank');
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
                <div className='project-text'>
                    <p className="project-title" style={{ color: project['text-color']}}>{project.title}</p>
                    <h2 className="project-type" style={{ color: project['text-color']}}>{project.type}</h2>
                    <p className='project-description' style={{ color: project['text-color']}}>{project.description}</p>
                </div>
            </div>
        ));
    };
    
    return (
        <div id="project-section" className="work-container">
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
