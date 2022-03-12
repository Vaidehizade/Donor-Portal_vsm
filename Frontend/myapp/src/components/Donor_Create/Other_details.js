
import React from 'react'
import './Other_details.css';
function Other_details()
{
    return(
        <div>
             <div className='container'>
          <div className='row'>
            <div className='col-lg'>
             <div className='card'>
               <div className='card-header'>Create Donor Page</div>
               <div className="card-body">
               <form>
               <label for="cars"><b>VSM Connection :&nbsp;  &nbsp;&nbsp; &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                     <br></br>
                     <br></br>
                  <div className="form-group">
                    <label for="name"><b>Referral details</b></label>
                    <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp" placeholder="details" />
                  </div>
  
                  <div className="form-group">
                    <label for="exampleInputEmail1"><b>Other details</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="details" />
                  </div>


                  
                  <button type="submit" className="btn_submit">Submit<a href="Contact_details.js"></a></button>
                  <br></br>
                  <br></br>
                </form>
                </div>
           </div>
           </div>
          </div>
          </div>
        </div>
    )
}

export default Other_details;