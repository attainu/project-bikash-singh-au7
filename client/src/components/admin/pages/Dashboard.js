import React from 'react'

function Dashboard({match}) {
    console.log(match)
    return (
        <div>
            <div className="page-wrapper">
            {/* <!-- ============================================================== --> */}
            {/* <!-- Container fluid  --> */}
            {/* <!-- ============================================================== --> */}
            <div className="container-fluid">
                {/* <!-- ============================================================== --> */}
                {/* <!-- Bread crumb and right sidebar toggle --> */}
                {/* <!-- ============================================================== --> */}
                <div className="row page-titles">
                    <div className="col-md-5 col-8 align-self-center">
                        <h3 className="text-themecolor">Dashboard</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                    <div className="col-md-7 col-4 align-self-center">
                        <div className="d-flex m-t-10 justify-content-end">
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>THIS MONTH</small></h6>
                                    <h4 className="m-t-0 text-info">$58,356</h4></div>
                                <div className="spark-chart">
                                    <div id="monthchart"></div>
                                </div>
                            </div>
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>LAST MONTH</small></h6>
                                    <h4 className="m-t-0 text-primary">$48,356</h4></div>
                                <div className="spark-chart">
                                    <div id="lastmonthchart"></div>
                                </div>
                            </div>
                            <div className="">
                                <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== --> */}
                {/* <!-- End Bread crumb and right sidebar toggle --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- Start Page Content --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- Row --> */}
                <div className="row">
                    {/* <!-- Column --> */}
                    <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap">
                                            <div>
                                                <h3 className="card-title">Sales Overview</h3>
                                                <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6> </div>
                                            <div className="ml-auto">
                                                <ul className="list-inline">
                                                    <li>
                                                        <h6 className="text-muted text-success"><i className="fa fa-circle font-10 m-r-10 "></i>Ample</h6> </li>
                                                    <li>
                                                        <h6 className="text-muted  text-info"><i className="fa fa-circle font-10 m-r-10"></i>Pixel</h6> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="amp-pxl" style={{"height": "360px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Our Visitors</h3>
                                <h6 className="card-subtitle">Different Devices Used to Visit</h6>
                                <div id="visitor" style={{"height":"290px", "width":"100%"}}></div>
                            </div>
                            <div>
                                <hr className="m-t-0 m-b-0"/>
                            </div>
                            <div className="card-body text-center ">
                                <ul className="list-inline m-b-0">
                                    <li>
                                        <h6 className="text-muted text-info"><i className="fa fa-circle font-10 m-r-10 "></i>Mobile</h6> </li>
                                    <li>
                                        <h6 className="text-muted  text-primary"><i className="fa fa-circle font-10 m-r-10"></i>Desktop</h6> </li>
                                    <li>
                                        <h6 className="text-muted  text-success"><i className="fa fa-circle font-10 m-r-10"></i>Tablet</h6> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Row --> */}
                {/* <!-- Row --> */}
                <div className="row">
                    {/* <!-- Column --> */}
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        
                    </div>
                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        
                    </div>
                </div>
                {/* <!-- Row --> */}
                <div className="row">
                    {/* <!-- Column --> */}
                    <div className="col-lg-4 col-md-4">
                        <div className="card card-inverse card-primary">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="m-r-20 align-self-center">
                                        <h1 className="text-white"><i className="ti-pie-chart"></i></h1></div>
                                    <div>
                                        <h3 className="card-title">Bandwidth usage</h3>
                                        <h6 className="card-subtitle">March  2017</h6> </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 align-self-center">
                                        <h2 className="font-light text-white">50 GB</h2>
                                    </div>
                                    <div className="col-8 p-t-10 p-b-20 align-self-center">
                                        <div className="usage chartist-chart" style={{"height":"65px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Column --> */}
                    {/* <!-- Column --> */}
                    <div className="col-lg-4 col-md-4">
                        <div className="card card-inverse card-success">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="m-r-20 align-self-center">
                                        <h1 className="text-white"><i className="icon-cloud-download"></i></h1></div>
                                    <div>
                                        <h3 className="card-title">Download count</h3>
                                        <h6 className="card-subtitle">March  2017</h6> </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 align-self-center">
                                        <h2 className="font-light text-white">35487</h2>
                                    </div>
                                    <div className="col-8 p-t-10 p-b-20 text-right">
                                        <div className="spark-count" style={{"height":"65px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Column --> */}
                    {/* <!-- Column --> */}
                    <div className="col-lg-4 col-md-4">
                        <div className="card">
                            <img className="" src="../assets/images/background/weatherbg.jpg" alt="Card image cap"/>
                            <div className="card-img-overlay" style={{"height":"110px"}}>
                                <h3 className="card-title text-white m-b-0 dl">New Delhi</h3>
                                <small className="card-text text-white font-light">Sunday 15 march</small>
                            </div>
                            <div className="card-body weather-small">
                                <div className="row">
                                    <div className="col-8 b-r align-self-center">
                                        <div className="d-flex">
                                            <div className="display-6 text-info"><i className="wi wi-day-rain-wind"></i></div>
                                            <div className="m-l-20">
                                                <h1 className="font-light text-info m-b-0">32<sup>0</sup></h1>
                                                <small>Sunny Rainy day</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <h1 className="font-light m-b-0">25<sup>0</sup></h1>
                                        <small>Tonight</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Column --> */}
                </div>
                {/* <!-- Row --> */}
                {/* <!-- Row --> */}
                <div className="row">
                    {/* <!-- Column --> */}
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        {/* <!-- Column --> */}
                        <div className="card">
                            <img className="card-img-top" src="../assets/images/background/profile-bg.jpg" alt="Card image cap"/>
                            <div className="card-body little-profile text-center">
                                <div className="pro-img"><img src="../assets/images/users/4.jpg" alt="user" /></div>
                                <h3 className="m-b-0">Angela Dominic</h3>
                                <p>Web Designer &amp; Developer</p>
                                <a href="#" className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded">Follow</a>
                                <div className="row text-center m-t-20">
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">1099</h3><small>Articles</small></div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">23,469</h3><small>Followers</small></div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">6035</h3><small>Following</small></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Column --> */}
                        <div className="card">
                            <div className="card-body bg-info">
                                <h4 className="text-white card-title">My Contacts</h4>
                                <h6 className="card-subtitle text-white m-b-0 op-5">Checkout my contacts here</h6>
                            </div>
                            <div className="card-body">
                                <div className="message-box contact-box">
                                    <h2 className="add-ct-btn"><button type="button" className="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button></h2>
                                    <div className="message-widget contact-widget">
                                        {/* <!-- Message --> */}
                                        <a href="#">
                                            <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle"/> <span className="profile-status online pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5>Pavan kumar</h5> <span className="mail-desc"><span className="__cf_email__" data-cfemail="2a43444c456a5d584b5a5a43524f4604494547">[email&#160;protected]</span></span></div>
                                        </a>
                                        {/* <!-- Message --> */}
                                        <a href="#">
                                            <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle"/> <span className="profile-status busy pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5>Sonu Nigam</h5> <span className="mail-desc"><span className="__cf_email__" data-cfemail="d6a6b7bbb3bab7e7efeee196b1bbb7bfbaf8b5b9bb">[email&#160;protected]</span></span></div>
                                        </a>
                                        {/* <!-- Message --> */}
                                        <a href="#">
                                            <div className="user-img"> <span className="round">A</span> <span className="profile-status away pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5>Arijit Sinh</h5> <span className="mail-desc"><span className="__cf_email__" data-cfemail="f59687809c8690c4c7cccddb939c85999c85b59298949c99db969a98">[email&#160;protected]</span></span></div>
                                        </a>
                                        {/* <!-- Message --> */}
                                        <a href="#">
                                            <div className="user-img"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle"/> <span className="profile-status offline pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5>Pavan kumar</h5> <span className="mail-desc"><span className="__cf_email__" data-cfemail="deb5bfaa9eb9b3bfb7b2f0bdb1b3">[email&#160;protected]</span></span></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        <div className="card">
                            {/* <!-- Nav tabs --> */}
                            <ul className="nav nav-tabs profile-tab" role="tablist">
                                <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Activity</a> </li>
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a> </li>
                            </ul>
                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <div className="card-body">
                                        <div className="profiletimeline">
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5 minutes ago</span>
                                                        <p>assign a new task <a href="#"> Design weblayout</a></p>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img1.jpg" alt="user" className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img2.jpg" alt="user" className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img3.jpg" alt="user" className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img4.jpg" alt="user" className="img-responsive radius"/></div>
                                                        </div>
                                                        <div className="like-comm"> <a href="#" className="link m-r-10">2 comment</a> <a href="#" className="link m-r-10"><i className="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div> <a href="#" className="link">John Doe</a> <span className="sl-date">5 minutes ago</span>
                                                        <div className="m-t-20 row">
                                                            <div className="col-md-3 col-xs-12"><img src="../assets/images/big/img1.jpg" alt="user" className="img-responsive radius"/></div>
                                                            <div className="col-md-9 col-xs-12">
                                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </p> <a href="#" className="btn btn-success"> Design weblayout</a></div>
                                                        </div>
                                                        <div className="like-comm m-t-20"> <a href="#" className="link m-r-10">2 comment</a> <a href="#" className="link m-r-10"><i className="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/3.jpg" alt="user" className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5 minutes ago</span>
                                                        <p className="m-t-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p>
                                                    </div>
                                                    <div className="like-comm m-t-20"> <a href="#" className="link m-r-10">2 comment</a> <a href="#" className="link m-r-10"><i className="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5 minutes ago</span>
                                                        <blockquote className="m-t-10">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--second tab--> */}
                                <div className="tab-pane" id="profile" role="tabpanel">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                                                <br/>
                                                <p className="text-muted">Johnathan Deo</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                                                <br/>
                                                <p className="text-muted">(123) 456 7890</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                                                <br/>
                                                <p className="text-muted"><a href="https://www.wrappixel.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="610b0e090f001509000f2100050c080f4f020e0c">[email&#160;protected]</a></p>
                                            </div>
                                            <div className="col-md-3 col-xs-6"> <strong>Location</strong>
                                                <br/>
                                                <p className="text-muted">London</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p className="m-t-30">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h4 className="font-medium m-t-30">Skill Set</h4>
                                        <hr/>
                                        <h5 className="m-t-30">Wordpress <span className="pull-right">80%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{'width':'80%', 'height':"6px"}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="m-t-30">HTML 5 <span className="pull-right">90%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{'width':'90%', 'height':"6px"}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="m-t-30">jQuery <span className="pull-right">50%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width':'50%', 'height':"6px"}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="m-t-30">Photoshop <span className="pull-right">70%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%', 'height':"6px"}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="settings" role="tabpanel">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <label className="col-md-12">Full Name</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Johnathan Doe" className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="example-email" className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input type="email" placeholder="johnathan@admin.com" className="form-control form-control-line" name="example-email" id="example-email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Password</label>
                                                <div className="col-md-12">
                                                    <input type="password" className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Phone No</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="123 456 7890" className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Message</label>
                                                <div className="col-md-12">
                                                    <textarea rows="5" className="form-control form-control-line"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12">Select Country</label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== --> */}
                {/* <!-- End PAge Content --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- Right sidebar --> */}
                {/* <!-- ============================================================== --> */}
                {/* <!-- .right-sidebar --> */}
                <div className="right-sidebar">
                    <div className="slimscrollright">
                        <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle"></i></span> </div>
                        <div className="r-panel-body">
                            <ul id="themecolors" className="m-t-20">
                                <li><b>With Light sidebar</b></li>
                                <li><a href="#" data-theme="default" className="default-theme">1</a></li>
                                <li><a href="#" data-theme="green" className="green-theme">2</a></li>
                                <li><a href="#" data-theme="red" className="red-theme">3</a></li>
                                <li><a href="#" data-theme="blue" className="blue-theme working">4</a></li>
                                <li><a href="#" data-theme="purple" className="purple-theme">5</a></li>
                                <li><a href="#" data-theme="megna" className="megna-theme">6</a></li>
                                <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                <li><a href="#" data-theme="default-dark" className="default-dark-theme">7</a></li>
                                <li><a href="#" data-theme="green-dark" className="green-dark-theme">8</a></li>
                                <li><a href="#" data-theme="red-dark" className="red-dark-theme">9</a></li>
                                <li><a href="#" data-theme="blue-dark" className="blue-dark-theme">10</a></li>
                                <li><a href="#" data-theme="purple-dark" className="purple-dark-theme">11</a></li>
                                <li><a href="#" data-theme="megna-dark" className="megna-dark-theme ">12</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== --> */}
                {/* <!-- End Right sidebar --> */}
                {/* <!-- ============================================================== --> */}
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- End Container fluid  --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- footer --> */}
            {/* <!-- ============================================================== --> */}
            <footer className="footer">
                © 2020 Biz Corner Admin by auxous.com
            </footer>
            {/* <!-- ============================================================== --> */}
            {/* <!-- End footer --> */}
            {/* <!-- ============================================================== --> */}
        </div>
        
        </div>
    )
}

export default Dashboard
