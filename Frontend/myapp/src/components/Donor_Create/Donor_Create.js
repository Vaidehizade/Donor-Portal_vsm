import React from 'react'
import './Donor_Create.css'
function Donor_Create (){
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-lg'>
           <div className='card'>
             <div className='card-header'>Create Donor Page</div>
             <div className="card-body">
             <form>
                <div className="form-group">
                  <label for="name"><b>First Name</b></label>
                  <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1"><b>Middle Name</b></label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter middle name" />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Last Name</b></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter last name" />
                </div>
                
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Birthday</b></label>
                  <input type="date" className="form-control" id="birthday" name="birthday"/>
                </div>
                 <input type="radio" id="Male" name="fav_language" value="HTML"/>
                             <label for="html">Male</label>
                  <input type="radio" id="female" name="fav_language" value="CSS"/>
                               <label for="css">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="cars"><b>Occupation: &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                     <div className="form-group">
                  <label for="name"><b>PAN Card</b></label>
                  <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp" placeholder="Enter PAN No." />
                </div>
                <label for="cars"><b>DonorType: &nbsp;&nbsp; &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                     <label for="cars"><b>  &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;Donor Importance: &nbsp;  &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                     <br></br>
                     <label for="cars"><b>Govt Servant: &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>

                     <label for="cars"><b> &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;VSM Connection :&nbsp;  &nbsp;&nbsp; &nbsp;</b></label>
                     <select className="occupation" id="occupation">
                      <option value="volvo">service</option>
                        <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                              <option value="audi">services</option>
                     </select>
                {/* <button type="submit" className="btn_submit">Submit<a href="Contact_details.js"></a></button> */}
               <button><a href="/Donor_Create/Contact_details" className="btn_submit">Submit</a></button> 
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

export default Donor_Create
