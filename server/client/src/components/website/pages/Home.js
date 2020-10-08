import React, { Fragment, useEffect, useState } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import TopNavigation from "../TopNavigation";
import HeaderSection from "../HeaderSection";

function Home() {
  // Create State
  const [category, setCategory] = useState([]);
  const [listing, setListing] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetching Category Data
  useEffect(() => {
    // Get All Category
    fetch("/user/allCategoryForWeb", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsLoaded(true);
            const data = result.data;
            setCategory(result.data.slice(0, 8) || []);
          } else {
            M.toast({ html: result.message, classNamees: "bg-danger" });
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );

    // Get All Business
    fetch("/user/allBusinessForWeb", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            const data = result.data;
            setListing(result.data.slice(0, 6) || []);
          } else {
            M.toast({ html: result.message, classNamees: "bg-danger" });
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, []);
  return (
    <Fragment>
      <div className={"header-section"}>
        <TopNavigation/>
        <HeaderSection/>
      </div>
      <div className={"container-fluid bg-light section-1"}>
        <div className={"container py-4"}>
          <div className={"row py-3 px-4"}>
            <div className={"col-md-12 mb-3"}>
              <h1 className={"medium-heading"}>What are you intrested In?</h1>
            </div>
            {category.map((list, index) => {
              return (
                <div className={"col-md-3 mt-2"} key={index}>
                  <Link to={`/category/${list.slug}`}>
                    <div className="card border-0 shadow-sm home-cat-card">
                      <div className="card-body text-center">
                        <h1 className="card-title text-danger">
                          <i className={list.icon}></i>
                        </h1>
                        <h4 className="card-text text-muted"> {list.title} </h4>
                        {/* <p className="card-text text-muted">10 Listing</p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={"container-fluid bg-white section-2"}>
        <div className={"container py-4"}>
          <div className={"row py-3"}>
            <div className={"col-md-12 mb-3"}>
              <h1 className={"medium-heading"}>
                New Listings in Our Directories
              </h1>
            </div>
            {listing.map((list, index) => {
              return (
                <div className={"col-md-4 mt-2"} key={index}>
                  <div className="card border-0 shadow rounded-0">
                    <Link to={`/listing/${list.slug}`}>
                        <img
                        src={list.logo || 'https://i.insider.com/5da9f73ccc4a0a1d720b7b1a'}
                        className="card-img-top rounded-0 listing-logo"
                        alt=""
                        />
                    </Link>
                    <img
                      className={"arrow-image"}
                      src={"/assets/images/background/arrow.png"}
                    />
                    <p className={"arrow-text text-white"}>Open</p>
                    <div className="card-body">
                      <h4 className="card-title font-weight-bold">
                      <Link to={`/listing/${list.slug}`}>
                        {list.title}
                      </Link>
                      </h4>
                      <p className="card-text text-info font-weight-bold">
                        <Link to={`/category/${list.category.slug}`}> {list.category.title} </Link> | 1 Reviews
                      </p>
                      <p className="card-text">
                      { ReactHtmlParser(list.description.substr(0, 50)+"....") }
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 py-1">
                        <i className={"fas fa-map-marker text-danger"}></i>
                        <span className={"pl-2"}> {list.address} </span>
                      </li>
                      <li className="list-group-item border-0 py-1">
                        <i className={"fas fa-phone text-danger"}></i>
                        <span className={"pl-2"}> {list.mobile} </span>
                      </li>
                    </ul>
                    <div className="card-body px-2">
                      <div className={"float-left"}>
                      <Link to={`/category/${list.category.slug}`}>
                        <i
                          className={`${list.category.icon} text-danger icon-rounded`}
                        ></i>
                        <span className={"pl-2"}> {list.category.title} </span>
                        </Link>
                      </div>
                      <div className={"float-right"}>
                        <i
                          className={"fas fa-heart text-danger icon-rounded"}
                        ></i>
                        <i
                          className={
                            "fas fa-keyboard ml-2 text-danger icon-rounded"
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
