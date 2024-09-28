import {ReactTyped} from 'react-typed';

function HomePageText(props){
    return (
        <div className="hero-info">
            <div className="hero-name">
                <h1>Nathan Do</h1>
                <p>[nay-than-doe]</p>
            </div>
            <div className="hero-list">
                <p>web developer, product designer</p>
                <ol>
                    <li>attends the <span className='UW'>University of Washington</span> studying Informatics</li>
                    <li>web developer @ Ignite Robotics</li>
                    <li>also a{' '}
                        <span className='typed-wrapper'>
                            <ReactTyped
                                strings={[
                                    " digital and film photographer  📸",
                                    " UW club bowler 🎳",
                                    " car enthusiast 🏎️"
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
    )
}

function HomeToAboutButton(props){
    return (
        <a href="#about-section" className="hero-learn">
            <h2>learn more about me</h2>
            <img src="./img/arrow-right.svg"/>
        </a>
    )
}

export function HomePage(props) {
    return (
        <div className="hero-container"  id='home-section'>
            <div className="hero">
                <HomePageText/>
                <HomeToAboutButton/>
            </div>
        </div>
    )
}