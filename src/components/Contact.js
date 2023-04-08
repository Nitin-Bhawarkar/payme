import React, { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "", lastName: "", phone: "",email: "",address: "", message: "",
  });

  let name,value;
  const postUserData = (event) =>{
      name = event.target.name;
      value = event.target.value;
      setUserData({...userData, [name]:value})
  }

   // Connect with FireBase

  const submitData = async (event) =>{
      event.preventDefault();

      const {firstName, lastName, phone,email,address, message} = userData;

      if(firstName, lastName, phone,email,address, message){
     const res = await fetch("https://reactfirebasewebsite-b46ea-default-rtdb.firebaseio.com/userDataRecords.json",{
     method : "POST",
     headers : {
      "Content_Type" : "application/json",
     },
     body:JSON.stringify({
      firstName, lastName, phone,email,address, message,
     })
    }
     );

     if(res){
      setUserData({
        firstName: "", lastName: "", phone: "",email: "",address: "", message: "",
      })
      alert("Data Stored Sucessfully");
     }else{
      alert("Please fill the Data");
     }
    }else{
      alert("Please fill the Data");
     }
    



  };

  return (
    <>
    <section className='contactus-section'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-10 mx-auto'>
              <div className='row'>

                {/* Left Side Contact Us Form */}
                  <div className='contact-leftside col-12 col-lg-5'>
                     <h1 className='main-heading fw-bold'>
                      Connect With Our <br/> Developement Team.
                     </h1>

                    <p className='main-hero-para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?
                    </p>
                    <figure>
                      <img src='./images/hero1.jpg' alt='ContactUs' className='img-fluid'/>
                    </figure>
                  </div>

                {/* Right Side Contact Us Form */}

              <div className='contact-rightside col-12 col-lg-7'>

                <form method='POST'>

                <div className='row'>
                  <div className='col-12 col-lg-6 contact-input-field'>
                   <input type="text" id='firstName' className='form-control' name='firstName'
                   value={userData.firstName}
                    onChange={postUserData}
                    placeholder='First Name'
                   />
                  </div>
                    <div className='col-12 col-lg-6 contact-input-field'>
                    <input type="text" id='lastName' className='form-control' name='lastName'
                    value={userData.lastName} onChange={postUserData}
                    placeholder='Last Name'/>
                    </div>
                </div>

                <div className='row'>
                  <div className='col-12 col-lg-6 contact-input-field'>
                      <input type="number" id='phone' className='form-control' name='phone'
                      value={userData.phone} onChange={postUserData}
                      placeholder='Phone Number'/>
                  </div>
                    <div className='col-12 col-lg-6 contact-input-field'>
                        <input type="email" id='email' className='form-control' name='email'
                        value={userData.email} onChange={postUserData}
                        placeholder='Your Email'/>
                    </div>
                </div>

                <div className='row'>
                  <div className='col-12 contact-input-field'>
                     <input type="text" id='address' className='form-control' name='address'
                     value={userData.address} onChange={postUserData}
                     placeholder='Add Address'/>
                  </div>
                    <div className='col-12'>
                       <input type="text" id='message' className='form-control' name='message'
                       value={userData.message} onChange={postUserData}
                       placeholder='Enter Your Message'/>
                    </div>
                </div>

        <div className="form-check form-checkbox-style">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label main-hero-para"> I agree that the PayMe may contact me at the 
              email address or phone number above</label>
        </div>
                      <button type="submit" className='btn-style w-100' onClick={submitData}>Submit</button>
                </form>

              </div>

              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact