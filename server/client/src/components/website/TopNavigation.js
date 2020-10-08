import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import HeaderSection from "./HeaderSection";
import $ from "jquery";
import { UserContext } from "../user/User";

function TopNavigation() {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Login Func
  const logout = (evt)=>{
    evt.preventDefault()
    localStorage.removeItem("user");
    localStorage.removeItem("jwt_user_token");
    dispatch({type: "CLEAR"})
    M.toast({html:"Logout successfully",  classes: "bg-danger"})
    history.push('/')
  }

  // Login Submit Handler
  const loginSubmitHandler = (evt) => {
    evt.preventDefault();
    const userData = {
      email,
      password,
    };
    fetch("/user/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            M.toast({ html: result.message, classes: "bg-success" });
            localStorage.setItem("user", JSON.stringify(result.data));
            localStorage.setItem("jwt_user_token", result.token);
            dispatch({ type: "USER", payload: result.data });
            window.location = "/user";
          } else {
            if (result.email)
              M.toast({ html: result.email, classes: "bg-danger" })
            if (result.password)
              M.toast({ html: result.password, classes: "bg-danger" })
            if (result.message)
              M.toast({ html: result.message, classes: "bg-danger" })
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  // Signup Submit Handler
  const signupSubmitHandler = (evt) => {
    evt.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    fetch("/user/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            M.toast({ html: result.message, classes: "bg-success" });
            localStorage.setItem("user", JSON.stringify(result.data));
            localStorage.setItem("jwt_user_token", result.token);
            dispatch({ type: "USER", payload: result.data });
            
          } else {
            if (result.name)
              M.toast({ html: result.name, classes: "bg-danger" })
            if (result.email)
              M.toast({ html: result.email, classes: "bg-danger" })
            if (result.password)
              M.toast({ html: result.password, classes: "bg-danger" })
            if (result.message)
              M.toast({ html: result.message, classes: "bg-danger" })
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-none shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className={"img img-fluid web-logo"}
              src={"/assets/images/web-logo.png"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item web-nav-item active">
                <Link className="nav-link web-nav-link" to="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item web-nav-item">
                <Link className="nav-link web-nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item web-nav-item">
                <Link className="nav-link web-nav-link" to="#">
                  Contact
                </Link>
              </li>
              {!state && (
                <li className="nav-item web-nav-item">
                  <Link
                    className="nav-link web-nav-link"
                    to="#"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Login
                  </Link>
                </li>
              )}
              {!state && (
                <li className="nav-item web-nav-item">
                  <Link
                    className="nav-link web-nav-link"
                    to="#"
                    data-toggle="modal"
                    data-target="#signupModal"
                  >
                    Signup
                  </Link>
                </li>
              )}

              {state && (
                <li className="nav-item web-nav-item">
                  <a
                    class="nav-link text-muted waves-effect"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    <img
                      src={state.photo}
                      alt="user"
                      class="profile-pic"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </a>
                  <div className="btn-group rounded-0">
                    <div className="dropdown-menu dropdown-menu-right m-4">
                      <a className="dropdown-item" href={"/user/profile"}>
                        <i className="fa fa-user"></i> My Profile
                      </a>
                      <Link className="dropdown-item" to={"/"} onClick={(evt)=>logout(evt)}>
                        <i className="fa fa-power-off"></i> Logout
                      </Link>
                    </div>
                  </div>
                </li>
              )}

              <li className="nav-item web-nav-item">
                <Link className="btn btn-outline-light m-1" to="#">
                  <i className={"fas fa-plus"}></i> Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade border-0 rounded-0"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id={"loginCloseBtn"}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={loginSubmitHandler}
                className="form-horizontal form-material"
              >
                <div className={"form-group"}>
                  <div className={"form-group mb-4"}>
                    <input
                      type="text"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Email"}
                    />
                  </div>
                  <div className={"form-group mb-4"}>
                    <input
                      type="password"
                      value={password}
                      onChange={(evt) => setPassword(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Password"}
                    />
                  </div>
                  <div className={"mt-3 text-right"}>
                    <Link to={"/forget-password"}>Forgot password??</Link>
                  </div>
                  <div className={"mt-2"}>
                    <button
                      type={"submit"}
                      className={"btn btn-info rounded-0 px-3 btn-block"}
                    >
                      Login
                    </button>
                  </div>
                  <div className={"text-center mt-2"}>
                    <Link
                      className={"text-muted"}
                      data-toggle="modal"
                      data-target="#signupModal"
                      onClick={() => $("#loginCloseBtn").click()}
                      to={""}
                    >
                      Looking to create an account ?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div
        className="modal fade border-0 rounded-0"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Signup
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id={"signupCloseBtn"}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={signupSubmitHandler}
                className="form-horizontal form-material"
              >
                <div className={"form-group"}>
                <div className={"form-group mb-4"}>
                    <input
                      type="text"
                      value={name}
                      onChange={(evt) => setName(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Name"}
                    />
                  </div>
                  <div className={"form-group mb-4"}>
                    <input
                      type="text"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Email"}
                    />
                  </div>
                  <div className={"form-group mb-4"}>
                    <input
                      type="password"
                      value={password}
                      onChange={(evt) => setPassword(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Password"}
                    />
                  </div>

                  <div className={"mt-2"}>
                    <button
                      type={"submit"}
                      className={"btn btn-info rounded-0 px-3 btn-block"}
                    >
                      Create new Account
                    </button>
                  </div>
                  <div className={"text-center mt-2"}>
                    <Link
                      className={"text-muted"}
                      data-toggle="modal"
                      data-target="#loginModal"
                      onClick={() => $("#signupCloseBtn").click()}
                      to={""}
                    >
                      Already have an account? Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopNavigation;
