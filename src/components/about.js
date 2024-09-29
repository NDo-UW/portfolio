export function About(props){
    const skills = [
        "React",
        "Flask",
        "Javascript",
        "Python",
        "Java",
        "HTML",
        "CSS",
        "User Research",
        "Bowling"
    ];

    const tools = [
        "Github",
        "Figma",
        "SolidWorks",
        "Cameras"
    ];
    
    const renderSkills = (skills) => {
        return skills.map((skill, index) => (
            <div className="attribute" key={index}>
                <h2>{skill}</h2>
            </div>
        ));
    };
    
    return (
        <div id="about-section" className="about-container">
                <h1>About Me</h1>
                <div className="about-info-container">
                    <img src="./img/about.jpg" alt="Nathan Do" className="about-photo"/>
                    <div className="about-description">
                        <div className="about-content">
                            <p className="about-text-header">Who Am I?</p>
                            <p>
                                I’m a third-year undergraduate student at the University of Washington studying Informatics.
                                Currently, a web developer @ Ignite Robotics and a UX research assistant @ KidsTeam UW.    
                            </p>
                            <p>
                                Since I was young, I’ve had a passion for building things, starting with endless hours of playing with Lego. 
                                Today, that same passion has evolved into creating digital projects. I now spend countless days (and nights) 
                                developing web applications, designing new ways to bring ideas to life and solve real-world problems.
                            </p>
                            <p>
                                Outside of school, you’ll find me locked in at the gym, using my cameras to capture my favorite moments, 
                                hitting strikes at the bowling alley, discovering new restaurants to add to my <a href="https://app.beliapp.com/lists/ndo?_branch_match_id=1263600956067652150&utm_medium=profile_link_to_webapp&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0rNyUwsKNBLztfPySwuKdbPS8m3rytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA4dFp%2BzYAAAA%3D" target="_blank" rel="noopener noreferrer" className="beli">Beli</a>, or simply getting lost in photos of my dog, Toby.
                            </p>
                            <img src="./img/beli-arrow.svg" alt="press me" className="beli-arrow"/>
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="about-text-header">Skills</p>
                        <div className="skills">
                            {renderSkills(skills)}
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="about-text-header">Tools</p>
                        <div className="skills">
                            {renderSkills(tools)}
                        </div>
                    </div>
                </div>
            </div>
    )
}