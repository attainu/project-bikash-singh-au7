import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Banner from "./inner-page-banner1.jpg";

const styles = {
    backgroundImage: `url(${Banner})`,
};

const Contact = () => {
    return (
        <Fragment>
            <section
                className="inner-page-banner bg-common inner-page-top-margin overlay-dark-40"
                style={styles}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumbs-area">
                                <h1>Contact With Us</h1>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-page-wrap bg--accent">
                <div className="single-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-box">
                                    <h2 className="item-heading">Get In Touch</h2>
                                    <p>
                                        Dorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aspernatur atque
                                        perferendis.
                                    </p>
                                    <form
                                        className="contact-form-box"
                                        id="contact-form"
                                    >
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name *"
                                                    className="form-control"
                                                    name="name"
                                                    data-error="Name field is required"
                                                    required
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input
                                                    type="email"
                                                    placeholder="Your E-mail *"
                                                    className="form-control"
                                                    name="email"
                                                    data-error="E-mail field is required"
                                                    required
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Subject *"
                                                    className="form-control"
                                                    name="subject"
                                                    data-error="Subject field is required"
                                                    required
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="col-12 form-group">
                                                <textarea
                                                    placeholder="Message*"
                                                    className="textarea form-control"
                                                    name="message"
                                                    id="form-message"
                                                    rows="7"
                                                    cols="20"
                                                    data-error="Message field is required"
                                                    required
                                                ></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="col-12 form-group mb-0 mt-3">
                                                <button
                                                    type="submit"
                                                    className="item-btn"
                                                >
                                                    Submit Message
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-response"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-item">
                    <div className="google-map-wrap-layout2">
                        <iframe
                            title="myFrame"
                            src="https://maps.google.com/maps?q=-37.81618%2C%20144.95692&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;
