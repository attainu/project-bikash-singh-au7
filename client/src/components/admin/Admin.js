import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LeftNavigation from "./LeftNavigation";
import Category from "./pages/Category";
import TopNavigation from "./TopNavigation";
import Users from "./pages/Users";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/category" component={Category} />
      <Route exact path="/admin/users" component={Users} />
    </Switch>
  );
};

const Admin = () => {
  return (
    <div id="main-wrapper">
      <Router>
        <TopNavigation />

        <LeftNavigation />
        <Routing />
      </Router>
    </div>
  );
};

export default Admin;
