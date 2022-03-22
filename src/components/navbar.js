import React from "react";
import '../style.css'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>SkySora</h1>
            </div>
            <div className="menu--container">
                <div className="dropDown">
                    <h1>DropDown</h1>
                    <div className="dropDown--box hide">
                        <ul className="links--container">
                            <li>Machine Learning</li>
                            <li>Machine Learning</li>
                            <li>Machine Learning</li>
                        </ul>
                    </div>
                </div>
                <div className="user--auth">
                    <a href="#">Sign In</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}