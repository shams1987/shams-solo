import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            <div>
                <button className="round-button" onClick={openMenu}>
                    <i className="fas fa-user-circle" />
                </button>
                {showMenu && (
                    <div className="profile-dropdown">
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div className="log-out-btn"><button onClick={logout}>Log Out</button></div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileButton;
