import React, { Fragment, createContext, useReducer, useContext, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import LeftNavigation from "./LeftNavigation"
import TopNavigation from "./TopNavigation"
import Dashboard from "../user/pages/Dashboard"
import Login from "../user/pages/Login"
import {initialState, userReducer} from "../../reducer/userReducer"


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
      <Route exact path="/user/login" component={Login} />
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
