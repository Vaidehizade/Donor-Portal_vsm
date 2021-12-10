import React from 'react';
import './Login_page.css';

function Login_Page() {
  return (
    <div className="bg1">
      <img className="imaged" src="/Images/background_image_3.jpg"/>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div class="card-header"><h3>Welcome User!</h3></div>
            <div class="card-body">
              <form>
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
                <button type="submit" className="btn_submit">Login</button>
                <a href="/Forget_password/Forget_pass" className="link_colors"><b>Forgot Password?</b></a>
                <br></br>
                <br></br>
                <div className="signup_ref">
                  Don't Have an account?<a href="/Signup/Signup_page" className="link_color1"><b>SignUp</b></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )

}

export default Login_Page;