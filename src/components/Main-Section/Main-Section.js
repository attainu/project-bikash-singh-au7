import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SiteMainImage from './site-main-figure1.jpg'
import Arrow from './arrow.png'

const styles = {
    backgroundImage: `url(${SiteMainImage})`
 }

const Main_Section = () => {
    return (
        <Fragment>
            <section className="main-banner-wrap-layout1 myimg bg-common overlay-dark-30 bg--gradient-top-30" style={styles}>
                <div className="container">
                    <div className="main-banner-box-layout1">
                        <p className="item-sub-title">Discover &amp; connect with great places around the world</p>
                        <h1 className="item-title">Let’s Discover This City</h1>
                        <form id="category-search-form" className="category-search-form">
                            <ul className="form-items">
                                <li>
                                    <div className="input-group stylish-input-group">
                                        <input type="text" placeholder="What are you looking for?" className="form-control"
                                            name="website" id="form-website" data-error="Search text required" required/>
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </span>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="input-group stylish-input-group">
                                        <input type="email" placeholder="All Categories" className="form-control" name="email"
                                            id="form-email" data-error="Category name is required" required/>
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <i className="flaticon-placeholder"></i>
                                            </button>
                                        </span>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group mb-0">
                                        <button type="submit" className="item-btn">Search</button>
                                    </div>
                                </li>
                            </ul>
                        </form>
                        <ul className="item-ctg">
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-chef"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Restaurant
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-dish"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Food
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-supermarket"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Shoppping
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-musical-note"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Nightclub
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-coffee-cup"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Coffee Bar
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="item-icon">
                                    <i className="flaticon-hotel"></i>
                                </Link>
                                <Link to="/" className="ctg-title">
                                    Hotel
                                </Link>
                            </li>
                            <li className="d-none d-lg-block">
                                <p>Or Browse The Highlights</p>
                                <div className="item-img">
                                    <img src={Arrow} alt="Arrow"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Main_Section;