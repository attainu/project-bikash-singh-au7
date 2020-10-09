import React from "react";

function Footer() {
  return (

<footer className="page-footer font-small footer-section pt-4">

  <div className="container text-center text-md-left">

    <div className="row">

      <div className="col-md-4 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Biz Corner</h5>
        <p>Welcome to BizCorner ! Business Directory for the Business World !! Basically all listings are Free, except for the top categories, if you would like to have your business listed in top category, please contact us.</p>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Top Highligts</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Hotel</a>
          </li>
          <li>
            <a href="#!">Resturents</a>
          </li>
          <li>
            <a href="#!">Appartments</a>
          </li>
          <li>
            <a href="#!">Automations</a>
          </li>
        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Supports</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Live Charts</a>
          </li>
          <li>
            <a href="#!">FAQ</a>
          </li>
          <li>
            <a href="#!">About Us</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Us On</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">
            <i className="fab fa-facebook-f icon-rounded px-2"> </i>
            </a>
          </li>
          <li>
            <a href="#!">
            <i className="fab fa-twitter icon-rounded"> </i>
            </a>
          </li>
          <li>
            <a href="#!">
            <i className="fab fa-google-plus-g icon-rounded"> </i>
            </a>
          </li>
          <li>
            <a href="#!">
            <i className="fab fa-linkedin-in icon-rounded"> </i>
            </a>
          </li>
        </ul>

      </div>

    </div>

  </div>


  <hr/>


  {/* <!-- Copyright --> */}
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href=""> bizcorner.com</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>

  );
}

export default Footer;
