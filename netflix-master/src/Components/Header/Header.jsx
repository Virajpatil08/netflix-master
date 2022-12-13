import React from 'react'
import logo from "../../logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <Link to="/upcoming" >upcoming</Link>
                <Link to="/now_playing" >Movies</Link>
                <Link to="/recent" >Recently Added</Link>
                <Link to="/mylist" >My List </Link>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header