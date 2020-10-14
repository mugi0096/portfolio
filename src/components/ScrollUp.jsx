import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Icon from '@material-ui/core/Icon';

function ScrollUp() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const bounce = {
        animation: "bonce 2s ifinite",
        color: "#fff",
    };

    return (
        <div className="container">
            <div className="scroll scroll-up">
                <div className="arrow bounce" style={{ bounce }}>
                    <Icon 
                        onClick={ scrollToTop } 
                        style={{cursor: "pointer", fontSize: 30, color: "#1e366a"}}>arrow_circle_up</Icon>
                </div>
            </div>
        </div>
    );
}

export default ScrollUp;
