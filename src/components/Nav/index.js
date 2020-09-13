import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = () => (
    <nav className={'Nav'}>
        <ul>
            <li>
                <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
                <NavLink to={`/library`}>Library</NavLink>
            </li>
            <li>
                <NavLink to={`/usability`}>Usability</NavLink>
            </li>
        </ul>
    </nav>
)