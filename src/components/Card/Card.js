import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Listing1 from "./listing-1.jpg";
import Listing2 from "./listing-2.jpg";
import Icon from "./logo1.png";

const Card = (props) => {
    return (
        <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12 no-equal-item">
                <div className="listing-box-grid">
                    <div className="product-box border-box">
                        <div className="item-img bg--gradient-50">
                            <div className="item-status status-open active">
                                Open
                            </div>
                            <div className="item-status status-save">
                                Save 15%
                            </div>
                            <img
                                src={Listing1}
                                alt="Listing"
                                className="img-fluid grid-view-img"
                            />
                            <img
                                src={Listing2}
                                alt="Listing"
                                className="img-fluid list-view-img"
                            />
                            <ul className="item-rating">
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <span>
                                        8.4<span> / 10</span>
                                    </span>
                                </li>
                            </ul>
                            <div className="item-logo">
                                <img src={Icon} alt="Logo" />
                            </div>
                        </div>
                        <div className="item-content">
                            <h3 className="item-title">
                                <Link to="/">Westfield Restaurant</Link>
                            </h3>
                            <p className="item-paragraph">
                                Mountain Refuge Resort is the most
                            </p>
                            <ul className="contact-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    59 Street, Mk tower, Brooklyn
                                </li>
                                <li>
                                    <i className="flaticon-phone-call"></i>+ 132
                                    899 6330
                                </li>
                                <li>
                                    <i className="fas fa-globe"></i>
                                    www.restauant.com
                                </li>
                            </ul>
                            <ul className="meta-item">
                                <li className="item-btn">
                                    <Link to="/" className="btn-fill">
                                        Details
                                    </Link>
                                </li>
                                <li className="ctg-name">
                                    <Link to="/">
                                        <i className="flaticon-chef"></i>
                                        Restaurant
                                    </Link>
                                </li>
                                <li className="entry-meta">
                                    <ul>
                                        <li
                                            className="tooltip-item ctg-icon"
                                            data-tips="Restaurant"
                                        >
                                            <Link to="/">
                                                <i className="flaticon-chef"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="tooltip-item"
                                            data-tips="My Favourite"
                                        >
                                            <Link to="/">
                                                <i className="fas fa-heart"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="tooltip-item"
                                            data-tips="Gallery"
                                        >
                                            <Link to="/">
                                                <i className="far fa-image"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;
