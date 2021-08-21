import React from 'react';
import {Link} from 'react-router-dom';

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

function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav-bar">
                <span>React Blog</span>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;