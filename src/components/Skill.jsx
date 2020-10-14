import React from 'react';
import './Skill.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Skill() {

    return (
        <div id="skill" className="skill-wrapper">
            <ScrollAnimation 
                offset={300}
                animateIn="fadeIn"
                animateOnce={true}
                >
                <div className="container">
                    <h2>Skills</h2>
                    <div className="skill-content">
                        <ul>
                            <li>HTML&CSS</li>
                            <li>JavaScript(React)</li>
                            <li>Python</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Skill;