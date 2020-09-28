import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import backImage from "./figure2.jpg";

const styles = {
    backgroundImage: `url(${backImage})`,
};

const MiddleSection = () => {
    return (
        <Fragment>
            <section
                className="category-wrap-layout1 padding-top-9p6 padding-bottom-7 overlay-dark-70 parallaxie bg--dark"
                style={styles}
            >
                <div className="container">
                    <div className="section-heading heading-light heading-center">
                        <div className="item-sub-title">
                            Explore some of the best place by categories
                        </div>
                        <h2 className="item-title">
                            What are you interested in?
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-earth"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Destination</Link>
                                </h3>
                                <div className="listing-number">
                                    40 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-supermarket"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Shopping</Link>
                                </h3>
                                <div className="listing-number">
                                    25 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-chef"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Restaurants</Link>
                                </h3>
                                <div className="listing-number">
                                    30 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-musical-note"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Nightlife</Link>
                                </h3>
                                <div className="listing-number">
                                    09 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-coffee-cup"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Bar &amp; Cafe</Link>
                                </h3>
                                <div className="listing-number">
                                    15 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-bed"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Hotel</Link>
                                </h3>
                                <div className="listing-number">
                                    20 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-spa"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Beauty &amp; Spa</Link>
                                </h3>
                                <div className="listing-number">
                                    06 Listings
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="category-box-layout1">
                                <div className="item-icon">
                                    <i className="flaticon-dish"></i>
                                </div>
                                <h3 className="item-title">
                                    <Link to="/">Food &amp; Drink</Link>
                                </h3>
                                <div className="listing-number">
                                    11 Listings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="listing-wrap-layout1 padding-top-9p6 padding-bottom-7 bg--light">
                <div className="container">
                    <div className="section-heading heading-dark heading-center">
                        <div className="item-sub-title">
                            Discover our latest listing around the world
                        </div>
                        <h2 className="item-title">
                            New Listings in Our Directory
                        </h2>
                    </div>
                    <div className="row" id="no-equal-gallery">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MiddleSection;
