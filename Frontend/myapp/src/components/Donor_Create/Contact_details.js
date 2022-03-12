import React from 'react'
import './Contact_details.css'
function Contact_details()
{
         return(
          <div className='container'>
          <div className='row'>
            <div className='col-lg'>
             <div className='card'>
               <div className='card-header'>Create Donor Page</div>
               <div className="card-body">
               <form>
                  <div className="form-group contact">
                    <label for="name"><b>Email</b></label>
                    <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp" placeholder="Enter first name" />
                  </div>
  
                  <div className="form-group contact">
                    <label for="exampleInputEmail1"><b>Alt Email</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter middle name" />
                  </div>
  
                  <div className="form-group contact">
                    <label for="exampleInputEmail1"><b>Mobile Number</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter middle name" />
                  </div>
                  
                  <div className="form-group contact">
                    <label for="exampleInputEmail1"><b>Alt Mobile No.</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter middle name" />
                  </div>
                   
                  <textarea id="w3review" className="w3review" rows="3" cols="40"></textarea>
                   <label for="fname">Pincode</label>
                   <input type="text" id="fname" className="fname"/>
                   <label for="lname">State</label>
                   <input type="text" id="lname" className="lname"/><br></br>
                   <label for="fname">District</label>
                   <input type="text" id="fname" className="fname"/>
                   
                   <label for="cars"><b> &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Country :&nbsp;  &nbsp;&nbsp; &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                  {/* <button type="submit" className="btn_submit">Submit<a href="Contact_details.js"></a></button> */}
                  <button><a href="/Donor_Create/Other_details" className="btn_submit">Submit</a></button> 
                  <br></br>
                  <br></br>
                </form>
                </div>
           </div>
           </div>
          </div>
          </div>
         )
}
export default Contact_details;