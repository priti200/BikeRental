import React,{ useState, useEffect }from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div>
       <Navbar theme={theme} setTheme={setTheme} />
       <Hero />
       <About />
    </div>
  )
}

export default App
