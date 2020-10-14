import React from 'react';
import icon from '../icon.JPG';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

function About() {

    return (
        <div id="about" className="about-wrapper">
            <ScrollAnimation 
                offset={300}
                animateIn="fadeIn"
                animateOnce={true}
                >
                <div className="container">
                    <h2>About</h2>
                    <div className="about-content">
                        <div className="about-left">
                            <img className="icon" alt="icon" src={icon} width="150" height="150" />
                            <p>上野　司（22)</p>
                        </div>
                        <div className="about-right">
                            はじめまして。Webエンジニアを目指している修士１年です。
                            将来的にはフルスタックエンジニアを目指していますが、どちらかというと
                            フロントエンドの方が興味あります。またアメリカ移住を考えているので２年目以降
                            フルリモートで働ける企業を探しています。
                            <p></p>
                            <p>ブログ: <a href="https://note.com/mugi_cat" target="_blank" rel="noopener noreferrer">
                                note</a></p>
                            <p>github: <a href="https://github.com/mugi0096" target="_blank" rel="noopener noreferrer">
                                mugi0096</a></p>
                            <p>趣味: ゲーム（Apex、パワプロ、CoD）、漫画（刃牙、ジョジョ）、etc.</p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default About;