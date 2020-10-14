import React from 'react';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-scroll';
import './Nav.css';

function Nav() {

    const headerStyle = {
        width: '100%',
        fontWeight: 'bold',
        fontSize: '45px',
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    };

    const linkStyle = {
        cursor: 'pointer'
    };

    return (
        <div class="nav-wrapper">
            <Layout>
                <Header className="header" style={ headerStyle } title="Tsukasa Ueno" scroll>
                    <Navigation className="navigation">
                        <Link 
                            activeClass="active"
                            style={ linkStyle }
                            to="top"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >Top</Link>
                        <Link 
                            activeClass="active"
                            style={ linkStyle }
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >About</Link>
                        <Link 
                            activeClass="active"
                            style={ linkStyle }
                            to="skill"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >Skills</Link>
                        <Link 
                            activeClass="active"
                            style={ linkStyle }
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >Works</Link>
                        <Link 
                            activeClass="active"
                            style={ linkStyle }
                            to="intern"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >Intern</Link>
                    </Navigation>
                </Header>
                <Drawer title="Tsukasa Ueno">
                    <Navigation>
                            <Link 
                                activeClass="active"
                                style={ linkStyle }
                                to="top"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                            >Top</Link>
                            <Link 
                                activeClass="active"
                                style={ linkStyle }
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                            >About</Link>
                            <Link 
                                activeClass="active"
                                style={ linkStyle }
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                            >Skills</Link>
                            <Link 
                                activeClass="active"
                                style={ linkStyle }
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                            >Work</Link>
                            <Link 
                                activeClass="active"
                                style={ linkStyle }
                                to="intern"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                            >Intern</Link>
                        </Navigation>
                </Drawer>
            </Layout>
        </div>
    );
}
export default Nav;