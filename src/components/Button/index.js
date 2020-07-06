import React from 'react';


import './Button.scss';

const Button = (props) => {
    return(
        <div className="btn-container">
            <button className="btn" type={props.type} onClick={props.onClick}>
                <span className="btn__visible">{props.text}</span>
                <span className="btn__invisible">{props.text}</span>
            </button>
        </div>
        
    );
}

export default Button;