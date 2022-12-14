import React from 'react'
import Feature from '../components/Feature/Feature';
import WeDo from '../components/WeDo/WeDo';

function about() {
  return (
    <div className='container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10'>
        <h3 className='text-4xl text-global-primary text-center dark:(text-global-yellow)'>About Us</h3>
        <Feature />
        {/* <WeDo /> */}
    </div>
  )
}

export default about;