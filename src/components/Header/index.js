import React from 'react';

import './Header.scss';

import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import User from '../../assets/img/user-6.jpg';
import {ReactComponent as Bookmark} from '../../assets/img/SVG/bookmark.svg';
import {ReactComponent as Notification} from '../../assets/img/SVG/chat.svg';
import {connect} from 'react-redux';


import { auth } from "../../firebase/firebase.utils";





const Header = ({currentUser, user}) => {
    return(
        <header className="header">
          <img src={Logo} alt="Logo" className="logo"/>
           <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <Bookmark className="user-nav__icon"/>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <Notification className="user-nav__icon"/>
                    <span className="user-nav__notification">53</span>
                </div>
                <div className="user-nav__icon-box">
                    {
                        currentUser ? 
                        <span className="user-nav__user-name link" onClick={() => auth.signOut()}>Sign out</span>
                        :
                        <Link className="user-nav__user-name link" to="/sign-in">Sign In</Link>
                    }
                
                </div>   
                <div className="user-nav__user">
                        <img src={User} alt="User" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">{user}</span>
                </div>  
            </nav>

        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {})(Header);