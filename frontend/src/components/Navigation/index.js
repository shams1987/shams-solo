import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup"><button id="nav-sign-up-btn" type="button">Sign Up</button></NavLink>
            </>
        );
    }

    return (
        <div className="topnav">
            <div><p id="nibora">Nibora</p></div>
            <div className="nav-home">
                <Link exact to="/"><button id="nav-home-btn" type="button">Home</button></Link>
            </div>
            <div className="navbar-questions" >{(sessionUser) ? <Link to="/questions"><button id="nav-questions-btn" type="button">Questions</button></Link> : null}</div>
            <div>  {isLoaded && sessionLinks}</div>


        </div>
    );
}

export default Navigation;
