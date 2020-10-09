import React, { Fragment, createContext, useReducer, useContext, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import LeftNavigation from "./LeftNavigation"
import TopNavigation from "./TopNavigation"
import Dashboard from "../user/pages/Dashboard"
import Login from "../user/pages/Login"
import {initialState, userReducer} from "../../reducer/userReducer"
import CreateListing from "./pages/CreateListing"
import PendingListing from "./pages/PendingListing"
import EditListing from "./pages/EditListing"
import PublishedListing from "./pages/PublishedListing"
import Profile from "./pages/Profile"
import SubmitedComment from "./pages/SubmitedComment"


// Create Context
export const UserContext = createContext();

// Create Context
const Routing = () => {
  const history = useHistory()
  // User Context
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type: "USER", payload: user})
      // history.push("/")
    }else{
      history.push("/user/login")
    }
  },[])

  return (
    <Switch>
      <Route exact path="/user" component={Dashboard} />
      <Route exact path="/user/dashboard" component={Dashboard} />
      <Route exact path="/user/login" component={Login} />
      <Route exact path="/user/createListing" component={CreateListing} />
      <Route exact path="/user/pendingListing" component={PendingListing} />
      <Route exact path="/user/publishedListing" component={PublishedListing} />
      <Route exact path="/user/profile" component={Profile} />
      <Route exact path="/user/editListing/:slug" component={EditListing} />
      <Route exact path="/user/submitedComment" component={SubmitedComment} />
      

    </Switch>
  );
};


const User = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <div id="main-wrapper">
      <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Router>
          <TopNavigation/>
          <LeftNavigation />
          <Routing />
        </Router>
        </UserContext.Provider>
    </div>
  );
};

export default User;
