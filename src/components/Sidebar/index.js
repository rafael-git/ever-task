import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as Clock } from '../../assets/img/SVG/clock-o.svg';
import { ReactComponent as Done } from '../../assets/img/SVG/clipboard.svg';
import { ReactComponent as Home } from '../../assets/img/SVG/home.svg';
// import { ReactComponent as Login } from '../../assets/img/SVG/sign-in.svg';
import { ReactComponent as Logout } from '../../assets/img/SVG/sign-out.svg';
import { ReactComponent as All } from '../../assets/img/SVG/file-text-o.svg';

import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

import './Sidebar.scss';

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className={`${this.props.location.pathname === "/" ? "side-nav__item side-nav__item--active" : "side-nav__item"}`}>
                        <Link to="" className="side-nav__link">
                            <Home className="side-nav__icon" />
                            <span>Homepage</span>
                        </Link>
                    </li>
                    {/*  <li className={`${this.props.location.pathname === "/sign-in" ? "side-nav__item side-nav__item--active" : "side-nav__item"}`}>
                        <Link to="/sign-in" className="side-nav__link">
                            <Login className="side-nav__icon"/>
                            <span>Sign In</span>
                        </Link>
                    </li> */}
                    <li className={`${this.props.location.pathname === "/all" ? "side-nav__item side-nav__item--active" : "side-nav__item"}`}>
                        <Link to="/all" className="side-nav__link">
                            <All className="side-nav__icon" />
                            <span>All tasks</span>
                        </Link>
                    </li>

                    <li className={`${this.props.location.pathname === "/pending" ? "side-nav__item side-nav__item--active" : "side-nav__item"}`}>
                        <Link to="/pending" className="side-nav__link">
                            <Clock className="side-nav__icon" />
                            <span>Pending tasks</span>
                        </Link>
                    </li>
                    <li className={`${this.props.location.pathname === "/completed" ? "side-nav__item side-nav__item--active" : "side-nav__item"}`}>
                        <Link to="/completed" className="side-nav__link">
                            <Done className="side-nav__icon" />
                            <span>Completed tasks</span>
                        </Link>
                    </li>
                    {
                        this.props.currentUser ?
                            (
                                <li className="side-nav__item">
                                    <Link to="/" className="side-nav__link" onClick={() => auth.signOut()}>
                                        <Logout className="side-nav__icon" />
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            )

                            : null
                    }

                </ul>
                <div className="legal">
                    &copy; 2020. All rights reserved.
                </div>
            </nav>
        );
    }

}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps, {})(withRouter(Sidebar));