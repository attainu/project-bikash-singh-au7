import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const Listing = () => {
    return (
        <Fragment>
            <section className="inner-page-top-margin padding-top-6 padding-bottom-7 bg--light">
                <div className="container">
                    <div className="section-heading heading-dark heading-center">
                        <h2 className="item-title">What are You Loking For?</h2>
                    </div>
                    <div className="filter-box-layout2">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="input-group stylish-input-group">
                                    <input
                                        type="text"
                                        placeholder="cafe, shoppingmall, beauty &amp; spa ..."
                                        className="form-control"
                                        name="website"
                                        id="form-website"
                                        data-error="Search text required"
                                        required
                                    />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="flaticon-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="input-group stylish-input-group">
                                    <input
                                        type="email"
                                        placeholder="Type here city or locaion"
                                        className="form-control"
                                        name="email"
                                        id="form-email"
                                        data-error="Category name is required"
                                        required
                                    />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="flaticon-placeholder"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing-box-grid">
                        <div className="row">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <ul className="pagination-layout2">
                            <li>
                                <Link to="/">
                                    <i className="flaticon-back"></i>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/">1</Link>
                            </li>
                            <li>
                                <Link to="/">2</Link>
                            </li>
                            <li>
                                <Link to="/">3</Link>
                            </li>
                            <li>
                                <Link to="/">4</Link>
                            </li>
                            <li>
                                <Link to="/">5</Link>
                            </li>
                            <li>
                                <Link to="/">6</Link>
                            </li>
                            <li>
                                <Link to="/">7</Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="flaticon-right-arrow"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default Listing;
