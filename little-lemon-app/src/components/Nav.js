import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/image1.png";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <Link to ="/">
                <img src={image1} alt = "Little Lemon Logo"  width="214" height="70"/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href='#info'>Info</a>
                </li>
                <li>
                    <a href ='/booking'>Booking</a>
                </li>
                <li>
                    <a href ='#contacs'>Contacts</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav