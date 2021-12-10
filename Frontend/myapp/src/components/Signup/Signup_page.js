import React from 'react';
import './Signup_page.css';

function Signup_page()
{
    return(
        <div className="container">
           <img className="imaged2" src="/Images/background_image_3.jpg"/>
            <div className="row">
                <div className="col-sm">
                <div className="card">
            <div className="card-header"><h4>Signup</h4></div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="name"><b>Name</b></label>
                  <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp" placeholder="Enter name" />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1"><b>Email address</b></label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Password</b></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1"><b>Remember me</b></label>
                </div>
                <button type="submit" className="btn_submit">Submit</button>
                <br></br>
                <br></br>
                <div className="signup_ref">
                  Already Have an account?<a href="/" className="link_color"><b>Login</b></a>
                </div>
              </form>
            </div>
          </div>
                </div>
            </div>
        </div>
    )
    
}

export default Signup_page;
