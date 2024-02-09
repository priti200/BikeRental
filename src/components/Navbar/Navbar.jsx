import React from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";


const NavLinks = [
    {
        id:"1",
        name:"HOME",
        link:"/#",
    },
    {
        id:"2",
        name:"ABOUT",
        link:"/#",
    },
    {
        id:"3",
        name:"CONTACT",
        link:"/#",
    },
 
]
const Navbar = ({theme,setTheme}) => {

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white
                    duration-300">
        <div className="container py-2 md:py-0">
            <div className="flex justify-between items-center">
                <div>
                     <h1 className="text-3xl font-bold
                     font-serif py-3">
                        BiRide
                    </h1>
                </div>
                <div className="hidden: md:block">
                     <ul className="flex items-center gap-8">
                        {
                            NavLinks.map((data) => (
                                <li key={data.id}
                                className="py-4">
                                <a 
                                className="py-2 hover:border-b-2
                                hover:text-primary hover:border-primary
                                transition-colors-duration-500 text-lg
                                font-small"
                                href={data.link}>
                                    {data.name}</a>
                            </li>
                            ))
                        }
                     </ul>
                </div>
                <div>
                         {/* DarkMode feature implementation */}    
                         {
                        theme === "dark"?(
                            <BiSolidSun
                            onClick={() => setTheme("light")}
                            className="text-2xl" />
                        ):(
                            <BiSolidMoon 
                            onClick={() => setTheme("dark")}
                            className="text-2xl" />
                        )
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
