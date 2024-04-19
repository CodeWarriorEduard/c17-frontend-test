import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
import './Hero.styles.css';
import { useEffect } from "react";

const Hero = ()=>{

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      
    return(
        <div className="hero-container">
            <Header/>
            <div className="hero-text wrapper">
                <h2 data-aos="fade-up">
                    Simplificando la Búsqueda de Talento con IA.
                </h2>
                <p data-aos="fade-up">
                    HireIA te ayudará a encontrar el trabajo de tus sueños
                </p>
                <button id="hero-join-btn" data-aos="fade-up">
                    ¡Únete!
                </button>
            </div>
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}



export default Hero;