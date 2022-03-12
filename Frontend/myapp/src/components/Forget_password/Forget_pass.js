import React from 'react';
import './Forget_pass.css';

function Forget_pass(){
       return(
    <div className="container">
    <img className="imaged1" src="/Images/background_image_3.jpg"/>
      <div className="row">
        <div className="">
          <div className="card">
            <div class="card-body">
              <form>
                 <br></br>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>old Password</b></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="old Password" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>New Password</b></label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="New Password" />
                </div>
                  <div className="form-group">
                  <label for="exampleInputPassword1"><b>Confirm Password</b></label>
                  <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn_submit">Confirm</button>
                <br></br>
                <br></br>
                <div className="signup_ref">
                 <button type="submit" className="btn_login" ><a href="/" className="lnk_color1">Login</a></button>
                  <button type="submit" className="btn_login1" ><a href="/" className="lnk_color2">Cancel</a></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
       )
}

export default Forget_pass;