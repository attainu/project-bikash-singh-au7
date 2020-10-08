import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import TopNavigation from "../TopNavigation";
import ReactHtmlParser from "react-html-parser";
import { UserContext } from "../../user/User";

function Listing(props) {
  const { state, dispatch } = useContext(UserContext);
  const [listing, setListing] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState({});
  const [addComment, setAddComment] = useState("");
  const [allComment, setAllComment] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);


  const { match } = props;
  const slug = match.params.slug;

  // Comment delete handler
  const deleteHandler = (_id)=>{
    setIsDeleted(false)
    fetch("/user/deleteComment", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_user_token")}`,
      },
      body: JSON.stringify({_id }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsDeleted(true);
            M.toast({ html: result.message, classes: "bg-success" });
          } else {
              M.toast({ html: result.message, classes: "bg-danger" });
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  // Comment Submit Handler
  const commentSubmitHandler = (evt) => {
    evt.preventDefault();
    setIsAdded(false)
    fetch("/user/addcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_user_token")}`,
      },
      body: JSON.stringify({ comment: addComment, business: listing._id }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsAdded(true);
            M.toast({ html: result.message, classes: "bg-success" });
          } else {
            if (result.user)
              M.toast({ html: result.user, classes: "bg-danger" });
            if (result.comment)
              M.toast({ html: result.comment, classes: "bg-danger" });
            if (result.message)
              M.toast({ html: result.message, classes: "bg-danger" });
          }
        },
        (error) => {
          console.log(error);
        }
      )
  };

  // Fetching the data
  useEffect(() => {
    // Ftech Business Data
    fetch("/user/getBusinessAcdSlugForWeb/" + slug, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_user_token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            console.log("eee", result.data);
            setListing(result.data[0]);
            setIsLoaded(true);
            fetch("/user/getCommentsForWebAcdBusiness/" + result.data[0]._id, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then(
                (result) => {
                  if (result.success) {
                    setAllComment(result.data);
                  } else {
                    M.toast({ html: result.message, classes: "bg-danger" });
                  }
                },
                (error) => {
                  console.log(error);
                }
              );
          } else {
            M.toast({ html: result.message, classes: "bg-danger" });
            setIsLoaded(true);
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, [isAdded, isDeleted]);

  return (
    <Fragment>
      <div className={"header-section"}>
        <TopNavigation />
        {isLoaded && (
          <div className={"container mt-5 py-5"}>
            <div className={"row mt-5 pt-5"}>
              <div className={"col-md-8"}>
                <span className={"badge badge-danger"}>
                  {listing.category.title}
                </span>
                <h2 className={"text-white"}> {listing.title} </h2>
                <p className={"text-white"}>
                  <i className={"fas fa-map-marker text-danger"}></i>
                  <span className={"ml-2"}>
                    {listing.address}, {listing.city}, {listing.state}{" "}
                  </span>
                </p>
                <p>{listing.createdDate}</p>
              </div>
              <div className={"col-md-4 text-right pt-5"}>
                <button className={"mt-5 btn btn-light px-3 py-2 rounded-0"}>
                  <i className={"fas fa-heart mr-1 text-danger"}></i>
                  <span className={"h6"}>Add to Favorite</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={"bg-white"}>
        <div className={"container py-4"}>
          <div className={"row"}>
            {/* Left Section */}
            <div className={"col-md-8 description mt-2"}>
              {ReactHtmlParser(listing.description)}

              <hr />

              <h3> Location </h3>
              <p>
                <i className={"fas fa-map-marker text-danger"}></i>
                <span className={"ml-2"}>
                  {listing.address}, {listing.city}, {listing.state}{" "}
                </span>
              </p>

              {/* Comments */}
              <div className={"card rounded-0 border-0 shadow-none bg-muted"}>
                {allComment.length ? (
                  allComment.map((item, index) => {
                    return (
                      <div className={"card-body p-2"}>
                        <div className={"border p-2 bg-white"}>
                          <div className={"float-left"}>
                            <img
                              src={item.user.photo}
                              className={"comment-profile-img"}
                            />
                          </div>
                          {/* create Delete button */}
                          {state && state._id == item.user._id ? (
                            <button
                              className={"btn btn-danger rounded-0 float-right"}
                              onClick={()=>deleteHandler(item._id)}
                            >
                              <i className={"fa fa-trash"}></i>
                            </button>
                          ) : (
                            ""
                          )}
                          <div className={"float-left ml-2"}>
                            <h5 className={"m-0 p-0"}> {item.user.name} </h5>
                            <span className={"badge badge-danger"}>
                              {" "}
                              {item.created_date}{" "}
                            </span>
                          </div>

                          <br clear={"both"} />
                          <div className={""}>
                            <p className={"m-0 p-0"}> {item.comment} </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className={"alert alert-danger rounded-0"}>
                    {" "}
                    There is no Comments{" "}
                  </div>
                )}
              </div>

              {/* Add Comments */}
              <div className={"card rounded-0 border-0 shadow-none bg-muted"}>
                <div className={"card-body"}>
                  <h4>Write a comment *</h4>
                  <form
                    className="form-horizontal form-material"
                    onSubmit={commentSubmitHandler}
                  >
                    <div className={"form-group"}>
                      <textarea
                        onChange={(e) => setAddComment(e.target.value)}
                        className={"form-control"}
                        placeholder={"Comment Here"}
                        value={addComment}
                      ></textarea>
                    </div>
                    <div className={"form-group"}>
                      <button className={"btn btn-dark rounded-0"}>
                        Add Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* right Section */}
            <div className={"col-md-4 mt-5"}>
              <div className={"card rounded-0 shadow-none"}>
                <img
                  src={listing.logo}
                  className={"img business-logo border-0 shadow-sm"}
                  style={{ position: "relative", left: "35%", top: "-40px" }}
                />
                <div className={"card-body text-center"}>
                  <h3 className={"m-0 p-0"}> {listing.title} </h3>
                  <p>
                    <i className={"fas fa-map-marker text-danger"}></i>
                    <span className={"ml-2"}>
                      {listing.address}, {listing.city}, {listing.state}{" "}
                    </span>
                  </p>
                </div>
              </div>

              <div className={"card rounded-0 shadow-none"}>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active rounded-0 h6"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Listing Detail
                    </a>
                  </li>
                  {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li> */}
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <ul className="list-group list-group-flush text-dark">
                      <li className="list-group-item">
                        <i className={"fas fa-map-marker text-danger ml-1"}></i>
                        <span className={""}> {listing.address} </span>
                      </li>
                      <li className="list-group-item">
                        <i className={"fas fa-phone text-danger ml-1"}></i>
                        <span className={""}> {listing.mobile} </span>
                      </li>
                      {listing.website && (
                        <li className="list-group-item">
                          <i className={"fas fa-globe text-danger ml-1"}></i>
                          <span className={""}> {listing.website} </span>
                        </li>
                      )}

                      <li className="list-group-item h6">Social Profile</li>
                      <li className="list-group-item">
                        {listing.twitter && (
                          <a
                            target={"_blank"}
                            href={listing.twitter}
                            className="btn btn-circle btn-secondary"
                          >
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        )}

                        {listing.facebook && (
                          <a
                            target={"_blank"}
                            href={listing.facebook}
                            className="btn btn-circle btn-secondary"
                          >
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        )}
                        {listing.instagram && (
                          <a
                            target={"_blank"}
                            href={listing.instagram}
                            className="btn btn-circle btn-secondary"
                          >
                            <i className="mdi mdi-instagram"></i>
                          </a>
                        )}

                        {listing.youtube && (
                          <a
                            target={"_blank"}
                            href={listing.youtube}
                            className="btn btn-circle btn-secondary"
                          >
                            <i className="mdi mdi-youtube-play"></i>
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                  {/* <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      ...
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Listing;
