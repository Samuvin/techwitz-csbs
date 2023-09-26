import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-fixed w-full " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="text-3xl font-bold text-center block">Computer Scinece and<span className=' text-neutral'> business system</span></h1>
      {/* <p className="text-lg text-neutral font-extrabold">Organized By</p>  */}
      <h3 className=' text-xl font-bold'>Slogan</h3>
      <p className="mb-5"> as a department, is likely dedicated to providing education and training in computer science and its application in business contexts.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero