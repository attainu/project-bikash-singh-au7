import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./User";

function TopNavigation() {
  const history =  useHistory()
  const {state, dispatch} = useContext(UserContext)
  // Login Func
  const logout = (evt)=>{
    evt.preventDefault()
    localStorage.removeItem("user");
    localStorage.removeItem("jwt_user_token");
    dispatch({type: "CLEAR"})
    history.push('/user/login')
  }
  
  return (
    
    <header className="topbar">
     {state &&  <nav className="navbar top-navbar navbar-expand-md navbar-light">
        {/* <!-- Logo --> */}

        <div className="navbar-header">
          
            
            <Link className="navbar-brand" to="/index.html">
              {/* <!-- Logo icon --> */}
              <b>
                {/* <!-- Dark Logo icon --> */}
                <img src="/assets/images/logo-icon.png" className="dark-logo" />
                {/* <!-- Light Logo icon --> */}
                <img
                  src={"/assets/images/logo-icon.png"}
                  className="light-logo"
                />
              </b>
              {/* <!--End Logo icon --> */}
              {/* <!-- Logo text --> */}
              <span>
                {/* <!-- dark Logo text --> */}
                <img src="/assets/images/logo-text.png" className="dark-logo" />
                {/* <!-- Light Logo text -->     */}
                <img
                  src="/assets/images/logo-text.png"
                  className="light-logo"
                />
              </span>
            </Link>
          
        </div>
        {/* <!-- End Logo --> */}
        <div className="navbar-collapse">
          {/* <!-- toggle and nav items --> */}
          <ul className="navbar-nav mr-auto mt-md-0">
            {/* <!-- This is  --> */}
            <li className="nav-item">
                <button
                  className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                >
                  <i className="mdi mdi-menu"></i>
                </button>
            </li>
            <li className="nav-item">
                
                <button
                  className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                  style={{border:'none', outline:'none', background: 'none'}}
                >
                  <i className="ti-menu"></i>
                </button>
            </li>

            {/* <!-- Search --> */}
            <li className="nav-item hidden-sm-down search-box">
                
                <Link
                  className="nav-link hidden-sm-down text-muted waves-effect waves-dark"
                  to=""
                >
                  <i className="ti-search"></i>
                </Link>
              <form className="app-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search & enter"
                />
                
                  
                  <Link className="srh-btn" to={''}>
                    <i className="ti-close"></i>
                  </Link>
                
              </form>
            </li>
          </ul>

          {/* <!-- User profile and search --> */}
          <ul className="navbar-nav my-lg-0">
            {/*<!-- Comment -->*/}
            <li className="nav-item dropdown">
              
                
                <Link
                  className="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark"
                  to=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-message"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </Link>
              
              <div className="dropdown-menu dropdown-menu-right mailbox scale-up">
                <ul>
                  <li>
                    <div className="drop-title">Notifications</div>
                  </li>
                  <li>
                    <div className="message-center">
                      {/* <!-- Message --> */}
                      
                        
                        <Link to={'/'}>
                          <div className="btn btn-primary btn-circle">
                            <i className="ti-user"></i>
                          </div>
                          <div className="mail-contnet">
                            <h5>Pavan kumar</h5>
                            <span className="mail-desc">
                              Just see the my user!
                            </span>
                            <span className="time">9:02 AM</span>
                          </div>
                        </Link>
                      
                    </div>
                  </li>
                  <li>
                    
                      
                      <Link className="nav-link text-center" to=";">
                        <strong>Check all notifications</strong>
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- End Comment --> */}

            {/* <!-- Profile --> */}
            <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                  to=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={state.photo || "../assets/images/users/1.jpg"}
                    alt="user"
                    className="profile-pic"
                  />
                </Link>
              
              <div className="dropdown-menu dropdown-menu-right scale-up">
                <ul className="dropdown-user">
                  <li>
                    <div className="dw-user-box">
                      <div className="u-img">
                        <img src={state.photo || "../assets/images/users/1.jpg"} alt="user" />
                      </div>
                      <div className="u-text">
                        <h4> {state.name} </h4>
                        
                          
                          <Link
                            to="/user/profile"
                            className="btn btn-rounded btn-danger btn-sm"
                          >
                            View Profile
                          </Link>
                        
                      </div>
                    </div>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    
                      
                      <Link to="/user/profile">
                        <i className="ti-user"></i> My Profile
                      </Link>
                    
                  </li>

                  <li role="separator" className="divider"></li>
                  <li>
                    
                      
                      <Link to="/user/account">
                        <i className="ti-settings"></i> Account Setting
                      </Link>
                    
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    
                      
                      <Link to="/user/logout" onClick={(evt)=>logout(evt)}>
                        <i className="fa fa-power-off"></i> Logout
                      </Link>
                    
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    }
    </header>
  );
}

export default TopNavigation;
