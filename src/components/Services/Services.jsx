import React from 'react'

const skillsData = [
    {
        
    }
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

                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Services
