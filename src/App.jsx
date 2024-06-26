import React,{ useState, useEffect }from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Services from './components/Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarList from './components/BiCycleListing/BiCycleListing';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
const App = () => {

  // Dark Mode Features 
  const [theme,setTheme] = useState(
                          localStorage.getItem("theme")?
                          localStorage.getItem("theme"):"light"
                );
  
  const element = document.documentElement;
  useEffect(() => {
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);
  //dark mode end

  // AOS initialization
  React.useEffect(() =>{
    AOS.init({
      offset:180,
      duration:800,
      easing: 'ease-in-sine',
      delay:100,
    })
    AOS.refresh();
  },[]);

  
  return (
    <div className="bg-white dark:bg-black 
    dark:text:white">
       <Navbar theme={theme} setTheme={setTheme} />
       <Hero />
       <About />
       <Services />
       <CarList />
       <Testimonial />
       <AppStoreBanner />
       <Contact />
    </div>
  )
}

export default App
