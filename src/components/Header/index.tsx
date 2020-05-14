import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Logo, NavItems, Item } from './styled'
export const Header = () => (
    <NavBar>
        <Logo>Skin & Bone</Logo>
        <NavItems>
            <Item><Link to="/new-animal">New Animal</Link></Item>
            <Item><Link to="/my-animals">My animals</Link></Item>
            <Item isLoginButton><Link to="/login">Login</Link></Item>
        </NavItems>
    </NavBar>
)

