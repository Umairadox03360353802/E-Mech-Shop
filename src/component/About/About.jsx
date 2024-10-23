import React from 'react'
import loginBg from '../../assets/login-bg.jpg'
import aboutBg1 from '../../assets/about1.jpg'
import aboutBg2 from '../../assets/about2.jpg'


function About() {
  return (
    <div>

      <div className='relative' >
             <img src={loginBg} alt=" waite....." className='object-cover object-center w-full h-[300px]'/>
             <div className='w-full h-[300px] bg-black absolute top-0 opacity-45'></div>
             <h2 className='absolute text-white top-[50%] left-[10%] font-semibold text-5xl'>About Us</h2>
      </div>

      {/* about us section */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-serif font-manrope leading-normal lg:text-start text-center">Who We Are</h2> 
                        <p className="text-gray-500 text-base font-normal font-serif leading-relaxed lg:text-start text-center ">Starting in 2014 out of our family workshop in Como, Italy; we have teamed up with 8 fellow Italian artigiani or craftsmen, all very eager to showcase their artisanal heritage and quintessential designs. <br /> 

From hand-hemmed tips to hand-stitched shoulders, our artisans craft all 40 Colori garments and accessories according to the highest quality standards to create hard-wearing everyday pieces for a timeless casual elegance. <br /> 

To make this happen, we provide them with the canvas to turn into their next creation. We travel around Italy, visiting mills and merchants to find the best fabrics and yarns, making sure they are natural, colourful and responsibly sourced.</p>
                    </div>
                    
                </div>
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={aboutBg1} alt="who we are" />
            </div>
        </div>
    </section>

    <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={aboutBg2} alt="how we work" />
                <div className="w-full flex-col justify-start lg:items- items-start gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-serif font-manrope leading-normal lg:text-start text-center">How We Work</h2>
                        <p className="text-gray-500 text-base font-normal font-serif leading-relaxed lg:text-start text-center">We opted for a direct-to-artisan distribution model focused on made-to-order and custom services to ensure that we produce as much as possible what is needed exactly as needed by the final customer, with 
                          less compromises and wasteful use of resources. All with honest pricing, because more meaningful buying should not be a luxury. <br /> Shop now our core collection of timeless designs that we truly love. Our core collection is rarely available immediately and always available on demand. Anything not in stock,
                           you can have it Made to Order and our artisans will craft any sold out size or style exclusively for you in 3-6 weeks.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
                                            
                                            

    </div>
    )

}

export default About