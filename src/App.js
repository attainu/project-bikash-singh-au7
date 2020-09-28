import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Listing from "./pages/Listing/Listing";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/listing" component={Listing} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
