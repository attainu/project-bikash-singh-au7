import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import FooterLogo from "./footer-logo.png";
import Modal from '../Modal/Modal'

const Footer = () => {

    let location = useHistory();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values;

    const handleChange = (name) => (event) => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post("http://localhost:5050/user/signup", values)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

        setValues({
            ...values,
            name: "",
            email: "",
            password: ""
        })
    }

    const [login, setLogin] = useState({
        email: '',
        password: '',
        success: '',
        failure: '',
        hide: false
    })

    const handleLogin = (name) => (event) => {
        setLogin({
            ...login,
            [name]: event.target.value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/user/login", login)
            .then(response => {
                console.log(response.data)
                if(response.data.token){
                    localStorage.setItem('userToken', response.data.token)
                    setLogin({
                        ...login,
                        email: "",
                        password: "",
                        hide: true
                    })
                    location.push('/')
                    window.location.reload();
                }else{
                    location.push('/')
                    window.location.reload();
                }
                
            })
            .catch(error => console.log(error))
    }

    return (
        <Fragment>
            <footer>
                <section className="footer-top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="single-item col-lg-3 col-md-6 col-12">
                                <div className="footer-box">
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img
                                                src={FooterLogo}
                                                className="img-fluid"
                                                alt="footer-logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-about">
                                        <p>
                                            Use the Upwork platform chat ande
                                            your desktop metro.
                                        </p>
                                    </div>
                                    <div className="footer-contact-info">
                                        <ul>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i>
                                                34 Street kancas City United
                                                States area.
                                            </li>
                                            <li>
                                                <i className="fas fa-phone"></i>
                                                +123 6669 000
                                            </li>
                                            <li>
                                                <i className="far fa-envelope"></i>
                                                info@listygo.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item col-lg-3 col-md-6 col-12">
                                <div className="footer-box">
                                    <div className="footer-header">
                                        <h3>Top Highlights</h3>
                                    </div>
                                    <div className="widget_nav_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">Hotel</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Restaurant</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Appartment</Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    SPA &amp; Beauty
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">Atuomation</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item col-lg-3 col-md-6 col-12">
                                <div className="footer-box">
                                    <div className="footer-header">
                                        <h3>Support</h3>
                                    </div>
                                    <div className="widget_nav_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">Live Chat</Link>
                                            </li>
                                            <li>
                                                <Link to="/">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Stay safe</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Contact us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item col-lg-3 col-md-6 col-12">
                                <div className="footer-box">
                                    <div className="footer-header">
                                        <h3>Follow Us On</h3>
                                    </div>
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fab fa-skype"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom-wrap">
                    <div className="container">
                        <div className="copyright">
                            2018 Copyright © listygo.com
                        </div>
                    </div>
                </section>
            </footer>
            <Modal inputLogin={handleLogin} btnLogin={handleLoginSubmit}/>

            <div className="modal fade" id="registerModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="title-default-bold mb-none">
                                Signup
                            </div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="login-form">
                                <input
                                    className="main-input-box"
                                    type="text"
                                    placeholder="Fullname"
                                    onChange={handleChange("name")}
                                    value={name}
                                />
                                <input
                                    className="main-input-box"
                                    type="text"
                                    placeholder="Email address"
                                    onChange={handleChange("email")}
                                    value={email}
                                />
                                <input
                                    className="main-input-box"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange("password")}
                                    value={password}
                                />
                                <div className="inline-box mb-5 mt-4">
                                    <a className="btn-register" id="login">
                                        <i className="fas fa-user"></i>
                                        Login Here!
                                    </a>
                                </div>
                                <div className="inline-box mb-5 mt-4">
                                    <button
                                        className="btn-fill"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Signup
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Footer;
