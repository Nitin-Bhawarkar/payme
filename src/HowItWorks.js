import React, { useState } from 'react';
import workApi from './API/workApi';

const HowItWorks = () => {

const [workData, setWorkData] = useState(workApi);

console.log(workData);

  return (
    <>
    
    
    <section>
        <div className='work-container container'>
            <h1 className='main-heading text-center'> How does it work</h1>
        
        <div className='row'>
            {
                workData.map((currentElement)=>{
                    const {id, logo, title, info} = currentElement;
                    return<>                    
                            <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                                    <i className={`fontwesome-style ${logo}`}></i>
                                <h2 className='sub-heading'>{title}</h2>
                                <p className='main-hero-para w-100'>{info}</p>
                            </div>
                    </>;
                })
            }
        </div>
      </div>

    </section>
    
    </>
  )
}

export default HowItWorks