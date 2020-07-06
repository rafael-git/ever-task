import React from 'react';

import './TextInput.scss';


const TextInput = (props) => {
    return(
        <div className="form__group">
            <input id={props.id} type={props.type} name={props.name} value={props.value} className="form__input" onChange={props.onChange} placeholder={props.placeHolder} required={props.required}/>
            <label className="form__label" htmlFor={props.for}>{props.label}</label>
        </div>
    );
}

export default TextInput;

