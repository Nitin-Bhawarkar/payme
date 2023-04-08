import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='foot'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-10 mx-auto'>
                <div className='row'>
                    <div className='col-6 col-lg-3'>
                        <h2>Company</h2>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                    </div>

                    <div className='col-6 col-lg-3'>
                        <h2>Support</h2>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                    </div>

                    <div className='col-6 col-lg-3'>
                        <h2>Services</h2>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                        <ul><li><a href='#'>About</a></li></ul>
                    </div>

                    <div className='col-6 col-lg-3'>
                        <h2>Follow Us</h2>
                       <div className='row'>
             <div className='col-lg-3' mx-auto><a href='#'><i className="zmdi zmdi-linkedin fontawesome-style" ></i></a></div>
            <div className='col-lg-3' mx-auto><a href='#'><i className="fontawesome-style zmdi zmdi-twitter"></i></a></div>
             <div className='col-lg-3' mx-auto><a href='#'><i className="fontawesome-style zmdi zmdi-whatsapp fontawesome-style"></i></a></div>
             <div className='col-lg-3' mx-auto><a href='#'><i className="fontawesome-style zmdi zmdi-github"></i> </a></div>

                       </div>
                </div>

            </div>

                <hr/>

            <div className='mt-5'>
                    <p className='main-hero-para text-center w-100'> Copyright @ 2023 PayMe. All rights reserved.</p>
            </div>

        </div>
    </div>
 </div>

    </footer>
    </>
  )
}

export default Footer