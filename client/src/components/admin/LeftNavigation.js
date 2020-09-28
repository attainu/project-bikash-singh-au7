import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

function LeftNavigation() {
  return (
    <div>
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
              <img src="../assets/images/users/profile.png" alt="user" />
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
                Markarn Doe
              </Link>

              <div className="dropdown-menu animated flipInY">
                <Link to="/admin/profile" className="dropdown-item">
                  <i className="ti-user"></i> My Profile
                </Link>

                <div className="dropdown-divider"></div>

                <Link to="/admin/account" className="dropdown-item">
                  <i className="ti-settings"></i> Account Setting
                </Link>

                <div className="dropdown-divider"></div>

                <Link to="/admin/logout" className="dropdown-item">
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
                  to="/admin"
                >
                  <i className="mdi mdi-gauge"></i>
                  <span className="hide-menu">Dashboard </span>
                </Link>
              </li>
              
              {/* Category */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/admin/category"
                >
                  <i className="mdi mdi-microsoft"></i>
                  <span className="hide-menu">Category </span>
                </Link>
              </li>

              {/* Users */}
              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/admin/users"
                >
                  <i className="mdi mdi-account-settings-variant"></i>
                  <span className="hide-menu">Users </span>
                </Link>
              </li>

              <li>
                <Link
                  className="has-arrow waves-effect waves-dark"
                  to="/"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bullseye"></i>
                  <span className="hide-menu">Apps</span>
                </Link>

                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="">Calendar</Link>
                  </li>
                  <li>
                    <Link to="">Calendar</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-devider"></li>
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
              </li>
            </ul>
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
        {/* <!-- Bottom points--> */}
        <div className="sidebar-footer">
          {/* <!-- item--> */}
          <Link
            to="/admin/setting"
            className="link"
            data-toggle="tooltip"
            title="Settings"
          >
            <i className="ti-settings"></i>
          </Link>
          {/* <!-- item--> */}
          <Link to="/" className="link" data-toggle="tooltip" title="Email">
            <i className="mdi mdi-gmail"></i>
          </Link>
          {/* <!-- item--> */}
          <Link
            to="/admin/logout"
            className="link"
            data-toggle="tooltip"
            title="Logout"
          >
            <i className="mdi mdi-power"></i>
          </Link>
        </div>
        {/* <!-- End Bottom points--> */}
      </aside>
    </div>
  );
}

export default LeftNavigation;
