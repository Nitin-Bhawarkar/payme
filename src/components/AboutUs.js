import React, { useState } from 'react';
import howToUse from '../API/howToUse';

const AboutUs = () => {

const [aboutData, setAboutData] = useState(howToUse);

  return (
    <>
    {/* 1st Part of AboutUs Section */}
  <section className='common-section our-services'>
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
          <img src="./images/hero3.jpg" alt='AboutUsImage'/>
        </div>
        {/* 1st Section Right Side Image */}
           <div className='col-12 col-lg-7 our-services-list'>
                <h3 className='mini-title'> 
                  -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                </h3>
               <h1 className='main-heading'>How use the App?</h1>
                    {aboutData.map((currentElement) =>{
                      const {id, title,info} = currentElement;
                        return <>
                          <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>{id}</div>
                              <div className='col-10 our-services-data'>
                                    <h2>{title}</h2>
                                <p className='main-hero-para'> {info}  </p>
                              </div>
                          </div>            
                        </>
                    }) }
             <br/>
                  <button className='btn-style btn-style-border'>Learn More</button>
           </div>
       </div>
    </div>
  </section>

    {/* 2nd Part of AboutUs Section */}
    <section className='common-section our-services our-services-rightside'>
    <div className='container mb-5'>
      <div className='row'>

        {/* 1st Section of Right Side*/}
           <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                <h3 className='mini-title'> 
                  -- SUPPORT IN ANY LANGUAGES
                </h3>
               <h1 className='main-heading'>WORLD CLASS SUPPORT IS AVALAIBLE 24/7</h1>
                    {aboutData.map((currentElement) =>{
                      const {id, title,info} = currentElement;
                        return <>
                          <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>{id}</div>
                              <div className='col-10 our-services-data'>
                                    <h2>{title}</h2>
                                <p className='main-hero-para'> {info}  </p>
                              </div>
                          </div>            
                        </>
                    }) }
             <br/>
                  <button className='btn-style btn-style-border'>Learn More</button>
           </div>

           <div className='col-12 col-lg-5 our-service-leftside-img'>
          <img src="./images/callcenter.jpg" alt='AboutUsImage'/>
        </div>
           
       </div>
    </div>
  </section>




</>
  )
}

export default AboutUs