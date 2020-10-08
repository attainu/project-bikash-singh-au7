import React, { useContext, useState, useEffect } from "react";
import { Link, BrowserRouter, useHistory} from "react-router-dom";
import M from 'materialize-css'
import { UserContext } from "./User";


function LeftNavigation() {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  const [pendingListing, setPendingListing] = useState([]);
  const [publishedListing, setPublishedListing] = useState([]);
  const [data, setData] = useState({});
  const [subComment, setSubCommment] = useState([]);

   // Fetching the data
   useEffect(() => {
    //  Get Pending Lesting
    fetch("/user/pendingBusiness", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt_user_token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsLoaded(true);
            setPendingListing(result.data || []);
          } else {
            M.toast({ html: result.message, classes: "bg-danger" });
            setIsLoaded(true);
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );

      // Get Published Listing
      fetch("/user/publishedBusiness", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("jwt_user_token")}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
              setIsLoaded(true);
              setPublishedListing(result.data || []);
            } else {
              M.toast({ html: result.message, classes: "bg-danger" });
              setIsLoaded(true);
            }
          },
          (error) => {
            setIsLoaded(true);
          }
        )
        
      // Get Submitted Comment
      fetch("/user/submitedComment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("jwt_user_token")}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
              setSubCommment(result.data || []);
            } else {
              M.toast({ html: result.message, classes: "bg-danger" });
            }
          },
          (error) => {
            console.log(error)
          }
        )
  }, [isUpdated]);

   // Login Function
  const logout = (evt)=>{
    evt.preventDefault()
    localStorage.removeItem("user");
    localStorage.removeItem("jwt_user_token");
    dispatch({type: "CLEAR"})
    history.push('/user/login')
  }

  console.log(state)

  return (
    <div>
      {state &&
      <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div className="scroll-sidebar">
          {/* <!-- User profile --> */}
          <div
            className="user-profile"
            style={{
              background:
                "url(../assets/images/background/user-info.jpg) no-repeat",
            }}
          >
            {/* <!-- User profile image --> */}
            <div className="profile-img">
              <img src={state.photo || "../assets/images/users/profile.png"}  alt="user" />
            </div>
            {/* <!-- User profile text--> */}
            <div className="profile-text">
              <Link
                to="/"
                className="dropdown-toggle u-dropdown"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
              {state.name} 
              </Link>

              <div className="dropdown-menu animated flipInY">
                <Link to="/user/profile" className="dropdown-item">
                  <i className="ti-user"></i> My Profile
                </Link>

                <div className="dropdown-divider"></div>

                <Link to="/user/profile" className="dropdown-item">
                  <i className="ti-settings"></i> Account Setting
                </Link>

                <div className="dropdown-divider"></div>

                <Link className="dropdown-item" to={"/"} onClick={logout}>
                  <i className="fa fa-power-off"></i> Logout
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End User profile text--> */}

          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="nav-small-cap">PERSONAL</li>
              {/* Dashboard */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/user/dashboard"
                >
                  <i className="mdi mdi-gauge"></i>
                  <span className="hide-menu">Dashboard </span>
                </Link>
              </li>

              {/* Listing */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-collage"></i>
                  <span className="hide-menu">My Listing</span>
                </Link>

                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/user/createListing">Create Listing</Link>
                  </li>
                  <li>
                    <Link to="/user/publishedListing">Published Listing <span className="badge badge-danger"> {publishedListing.length} </span> </Link>
                  </li>
                  <li>
                    <Link to="/user/pendingListing">Pending Listing <span className="badge badge-danger"> {pendingListing.length} </span> </Link>
                  </li>
                </ul>
              </li>

              {/* Listing */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-star-outline"></i>
                  <span className="hide-menu">Comments</span>
                </Link>

                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/user/submitedComment">Submitted Comments  <span className="badge badge-danger"> {subComment.length} </span> </Link>
                  </li>
                  <li>
                    <Link to="/user/recieveddComment">Received Reviews <span className="badge badge-danger">0</span> </Link>
                  </li>
                </ul>
              </li>


              {/* Favorites */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/user/favoriteLisings"
                >
                  <i className="mdi mdi-heart-outline"></i>
                  
                  <span className="hide-menu">Favorites </span>
                </Link>
              </li>


              {/* <li className="nav-devider"></li>
              <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-table"></i>
                  <span className="hide-menu">Tables</span>
                </Link>

                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="">Basit</Link>
                  </li>
                  <li>
                    <Link to="">Calendar</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-devider"></li>
              <li className="nav-small-cap">EXTRA COMPONENTS</li>
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-book-multiple"></i>
                  <span className="hide-menu">Page Layout</span>
                </Link>

                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="">Calendar</Link>
                  </li>
                  <li>
                    <Link to="">Calendar</Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
        {/* <!-- Bottom points--> */}
        <div className="sidebar-footer">
          {/* <!-- item--> */}
          <Link
            to="/user/setting"
            className="link"
            data-toggle="tooltip"
            title="Settings"
            onClick={(evt)=> evt.preventDefault()}
          >
            <i className="ti-settings"></i>
          </Link>
          {/* <!-- item--> */}
          <Link to="/user/email" className="link" data-toggle="tooltip" title="Email" onClick={(evt)=> evt.preventDefault()}>
            <i className="mdi mdi-gmail"></i>
          </Link>
          {/* <!-- item--> */}
            
          <Link
            to='/user/email/'
            onClick={(evt)=> logout(evt)}
            className="link"
            data-toggle="tooltip"
            title="Logout"
          >
            <i className="mdi mdi-power"></i>
          </Link>
        </div>
        {/* <!-- End Bottom points--> */}
      </aside>
    }
    </div>
  );
}

export default LeftNavigation;
