import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import $ from 'jquery'

export default function Navbar() {

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY !== 0) {
                $('nav').removeClass('py-4');
            } else {
                $('nav').addClass('py-4');
            }
        }
    }, [])
    return <>
        <nav className="navbar navbar-expand-lg fixed-top py-4">
            <div className="container">
                <NavLink className="navbar-brand text-uppercase fs-2 fw-bold text-white" to="">start framework</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mt-2 mt-lg-0  text-uppercase fw-bold">
                        <li className="nav-item text-center ">
                            <NavLink className="nav-link text-white" to="about">About</NavLink>
                        </li>
                        <li className="nav-item text-center ">
                            <NavLink className="nav-link text-white" to="portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link text-white" to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>

}
