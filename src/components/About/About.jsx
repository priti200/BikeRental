import React from 'react'
import biCycle1 from "../../assets/bicycle3.png"
 
const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 pt-10 dark:text-white duration-300 sm:min-h-[600px]
                    sm:place-items-center">
      <div className="container pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2
        place-items-center">

            <div data-aos="fade-up"
            data-aos-duration="1000"
            >
                <img src={biCycle1} alt="" 
                    className="sm:scale-105
                                sm:-translate-x-11 max-h-[380px]
                                drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"   
                />
            </div>
            <div>
                <div className="space-y-5 sm:p-16 pb-6">
                    <h1 
                    data-aos="fade-up"
                    className='text-3xl sm:text-4xl font-bold font-serif '>
                        About Us
                    </h1>
                    <p    data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos fuga voluptatum rerum maxime eum tempora illo.
                        Ipsum accusamus rem et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Accusamus natus cum suscipit aperiam blanditiis, eius rerum quam magni perspiciatis error?
                    </p>
                    <p    data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque!
                    </p>
                    <button
                       data-aos="fade-up"
                    className="button-outline">
                        Get Started
                    </button>
                </div>
            </div>
                        
        </div>
      </div>
    </div>
  )
}

export default About
