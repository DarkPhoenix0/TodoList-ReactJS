import React from 'react';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {Link} from 'react-router-dom'

import './Header.css'

function Header(props) {
    return (
        <nav className='header'>
            <h2>Todo APP <PlaylistAddCheckIcon className='logo'/> </h2>
            <ul>
                <a href="" className='active_link'>
                    <li>Todos</li>
                </a>
                <a href="">
                    <li>Dashboard</li>
                </a>
            </ul>

            <button>Login</button>
        </nav>

    );
}

export default Header;