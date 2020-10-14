import React, { useState } from 'react';
import lottery from '../lottery.png';
import portfolioSNS from '../portfolioSNS.png';
import './Work.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Work() {

    const [isVisibleLottery, setVisibleLottery] = useState(false);
    const [isVisiblePortfolio, setVisiblePortfolio] = useState(false);
    
    function onMouseLottery(e) {
        e.preventDefault();
        setVisibleLottery(!isVisibleLottery);
    }

    function onMousePortfolio(e) {
        e.preventDefault();
        setVisiblePortfolio(!isVisiblePortfolio);
    }

    const textLottery = "ナンバーズ３、４の当選番号を予測するサービス[Python, Flask]";
    const textPortfolio = "ポートフォリオを簡単に作り、他の人と比較できるサービス[Ruby on Rails]";

    const urlLottery = "https://github.com/mugi0096/lottery_app";
    const urlPortfolio = "https://github.com/mugi0096/portfolio";

    return (
        <div id="work" className="work-wrapper">
            <ScrollAnimation
                offset={300} 
                animateIn="fadeIn"
                animateOnce={true}>
                <div className="container">
                    <h2>Works</h2>
                    <div className="work-list">
                        <div 
                            className="work-wrap" 
                            onMouseEnter={onMouseLottery}
                            onMouseLeave={onMouseLottery}
                            >
                            <p>{isVisibleLottery ? textLottery : ""}</p>
                            <a href={urlLottery} target="_blank" rel="noopener noreferrer">
                                <img src={lottery} alt="宝くじ"/>
                            </a>
                        </div>
                        <div 
                            className="work-wrap"
                            onMouseEnter={onMousePortfolio}
                            onMouseLeave={onMousePortfolio}
                            >
                            <p>{isVisiblePortfolio ? textPortfolio : ""}</p>
                            <a href={urlPortfolio} target="_blank" rel="noopener noreferrer">
                            <img src={portfolioSNS} alt="ポートフォリオ"/>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}
export default Work;