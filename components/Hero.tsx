import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-fixed " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Tech <span className=' text-neutral'>Witz</span></h1>
      <p className="text-lg text-neutral font-extrabold">Organized By</p> 
      <h3 className=' text-xl font-bold'>Computer Scinece and business system</h3>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero