import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex } from './NavBar.style';

function NavBar(props) {
    return (
        <Flex>
            <NavLink to="/" className="navLink">
                Home
            </NavLink>
            <NavLink to="/history" className="navLink">
                History
            </NavLink>
        </Flex>
    );
}

export default NavBar;