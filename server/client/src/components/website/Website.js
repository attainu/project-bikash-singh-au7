import React, { Fragment, createContext, useReducer, useContext, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import TopNavigation from "./TopNavigation"
import {initialState, userReducer} from "../../reducer/userReducer"
import Home from "./pages/Home";
import Footer from "./Footer";
import Listing from "./pages/Listing";
import Category from "./pages/Category";
import Search from "./pages/Search";
import {UserContext} from '../user/User'


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
      // history.push("/user/login")
    }
  },[])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing/:slug" component={Listing} />
      <Route exact path="/category/:slug" component={Category} />
      <Route exact path="/search/:query/:catQuery" component={Search} />
    </Switch>
  );
};


const Website = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <div id="main-wrapper">
      <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Router>
          <Routing/>
          <Footer/>
        </Router>
        </UserContext.Provider>
    </div>
  );
};

export default Website;
