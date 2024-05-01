import React from 'react'

const Header = () => {
  return (
    <>
    <header>
    <section className='container main-hero-container'>

        <div className='row'>
            <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column'>
                <h1 className='display-2'>
                    Online Payment Made <br/> Easy for You.
                </h1>

                    <p className='main-hero-para'> Yaa Start Now. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

    <h3>Get early access for you.</h3>
         <div className='input-group mt-3'>
          <input type='text' className='rounded-pill w-50 p-2 me-3 form-control-text'
           placeholder='Enter Your Email'  />
            <div className='input-group-button'>
                Get it now.
            </div>
        </div>
        </div>
        {/* Main Header Right Side */}

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
            align-items-center main-herosection-images">
                <img src='./images/hero1.jpg' alt='heroimg' className='img-fluid'/>
                <img src='./images/hero4.jpg' alt='heroimg4' className='img-fluid main-hero-img2'/>
            </div>

     </div>
    </section>
    </header>

    </>
  )
}

export default Header