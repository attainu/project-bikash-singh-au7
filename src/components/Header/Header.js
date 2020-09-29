import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./logo.png";
import StickyLogo from "./sticky-logo.png";

const Header = () => {
    const location = useLocation();
    
    const [user, setUser] = useState('');
    const [logout, setLogout] = useState('')

    const updateUserInfo = () => {
        const localData = localStorage.getItem('userToken')
        setUser(localData)
    }

    useEffect(() => {
        updateUserInfo();
    })

    const handleLogout = () => {
        const logoutData = localStorage.removeItem('userToken')
        setLogout(logoutData)
    }

    return (
        <Fragment>
            <header id="site-header" className="header-one">
                <div
                    className={
                        location.pathname === "/"
                            ? "header-main header-sticky"
                            : "header-main header-sticky bg--dark"
                    }
                >
                    <div className="container-fluid">
                        <div className="mob-menu-open toggle-menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="site-logo">
                                    <Link to="/" className="main-logo">
                                        <img src={Logo} alt="Site Logo" />
                                    </Link>
                                    <Link to="/" className="sticky-logo">
                                        <img src={StickyLogo} alt="Site Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12 possition-static">
                                <nav className="site-nav">
                                    <ul className="site-menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/listing">Listing</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3 d-none d-lg-flex align-items-center justify-content-end">
                                <div className="nav-action-elements">
                                    <ul>
                                        {
                                            (user) ?  
                                            <li>
                                                <button
                                                    type="button"
                                                    className="login-btn"
                                                    onClick={handleLogout}
                                                >
                                                    <i className="flaticon-profile"></i>
                                                    Logout
                                                </button>
                                            </li>
                                            :
                                            <li>
                                                <button
                                                    type="button"
                                                    className="login-btn"
                                                    data-toggle="modal"
                                                    data-target="#loginModal"
                                                >
                                                    <i className="flaticon-profile"></i>
                                                    Login
                                                </button>
                                            </li>
                                        }
                                        <li>
                                            <Link to="/" className="ghost-btn">
                                                <i className="fas fa-plus"></i>
                                                ADD LISTING
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
