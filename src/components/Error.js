import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>

<div id='notfound'>
    <div className='notfound'>
        <div className='notfound-404'>
             <h1>404</h1>
        </div>

        <h2>We are Sorry, Page not found!</h2>
        <p>
            The Page You are Looking for might have been removed had its name
            changed or is temporarily unavailable.
        </p>
        <NavLink to='/'>Back to HomePage</NavLink>

    </div>

</div>

    </>
  )
}

export default Error