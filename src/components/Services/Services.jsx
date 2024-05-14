import React from 'react'
import {FaCameraRetro} from "react-icons/fa"
import { Gi3DStairs } from "react-icons/gi";
import {SlNote} from "react-icons/sl";


const skillsData = [
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group:hover:text-black duration-300"/>
      ),
      link:"#",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta harum reprehenderit, quos iste est quisquam at sequi odit animi aut? Odit dignissimos ",
      aosDelay:"0",
        
    },
    {
      name: "Fast & Safe",
      icon: (
        <Gi3DStairs className="text-5xl text-primary group:hover:text-black duration-300"/>
      ),
      link:"#",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta harum reprehenderit, quos iste est quisquam at sequi odit animi aut? Odit dignissimos ",
      aosDelay:"500",
        
    },
    {
      name: "Well Maintained Bicycle",
      icon: (
        <SlNote className="text-5xl text-primary group:hover:text-black duration-300"/>
      ),
      link:"#",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta harum reprehenderit, quos iste est quisquam at sequi odit animi aut? Odit dignissimos ",
      aosDelay:"1000",
        
    },
]

const Services = () => {
  return (
    <div className="services py-14 dark:bg-black dark:text-white sm:min-[600px]
                    sm:grid sm:place-items-center">
      <div className="container">
            <div className="pb-12 ">
                <h1 className="text-3xl font-semibold font-serif text-center sm:text-4xl">
                    WHY CHOOSE US?
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    skillsData.map((skill) =>(
                      <div  
                      key={skill.name}
                      data-aos="fade-up"
                      data-aos-delay={skill.aosDelay}
                      className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16
                       bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg "   
                      >

                        <div className="grid place-items-center "> 
                              {skill.icon}
                        </div>
                        <h1 className="text-2xl font-bold "> {skill.name}</h1>
                        <p> {skill.description}</p>
                        <a href={skill.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">Learn More</a>
                      </div>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Services
