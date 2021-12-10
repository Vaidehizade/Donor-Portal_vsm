import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className="header">
            <div className="menu-bar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="#"><b>VSM</b></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav ml-auto">
                         <a className="nav-item nav-link active" href="#"><b>Home</b></a>
                         <a className="nav-item nav-link" href="#"><b>Dashboard</b></a>
                         <a className="nav-item nav-link" href="#"><b>Donor Create</b></a>
                         <a className="nav-item nav-link" href="#"><b>Donor List</b></a>
                 </div>
              </div>
           </nav>
          </div>
          <div>
            <br></br>
            <br></br>
          <marquee><h2>Welcome to VSM DONOR Portal</h2></marquee>
        </div>
        </div>
    )
};

export default Navbar;