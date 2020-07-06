import React from 'react';

import './Homepage.scss';

import { Link } from 'react-router-dom';
import '../../components/Button/Button.scss';



const Homepage = () => {
    return(
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Evertasks</span>
                <span className="heading-primary--sub">All your work in one place</span>
            </h1>
            <div className="btn-container">
                <Link className="link-button" to="/crud-task"> Add new task </Link>
            </div>
        </div> 
    );
}

export default Homepage;