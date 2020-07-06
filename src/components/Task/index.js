import React from 'react';
import {Link} from 'react-router-dom';


import './Task.scss';

import {ReactComponent as Check} from '../../assets/img/SVG/check-square-o.svg'; 
import {ReactComponent as Edit} from '../../assets/img/SVG/edit.svg' 

const Task = (props) => {
    return(
        <div  className="task">
            <div className="task-elements t-check">
                {
                    props.isChecked ? <Check className="icon"/> : null
                }
            </div>
            <div className="task-elements t-name">{props.name}</div>
            <div className="task-elements t-duration">{props.duration}</div>
            <Link to="/" className="task-elements t-edit">
                <Edit className="i-edit" />
            </Link>
        </div>
    );
}



export default Task;