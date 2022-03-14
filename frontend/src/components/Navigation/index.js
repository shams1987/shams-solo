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
                <NavLink to="/signup"><button class="sign-up-btn" type="button">Sign Up</button></NavLink>
            </>
        );
    }

    return (
        <div className="topnav">

            <div>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </div>

            <div className="navbar-questions" >{(sessionUser) ? <Link to="/questions"><button type="button">Questions</button></Link> : null}</div>

        </div>
    );
}

export default Navigation;
