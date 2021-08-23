import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Contacts',
        path: '/contacts',
    },
    {
        title: 'Login',
        path: '/login',
    }
]

function Header({ user }) {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className="header" id="header">
            <nav className="nav-bar">
                <span className="nav-title">React Blog</span>
                <div className={`nav-content-container ${menuActive && 'active'}`} onMouseEnter={() => setMenuActive(true)} onMouseLeave={() => setMenuActive(false)}>
                    <ul>
                        { navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} onClick={() => setMenuActive(false)}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <span className="nav-avatar-container">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38}/>
                        <span className="nav-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                    </span>
                </div>
                <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
            </nav>
        </header>
    )
}

export default Header;