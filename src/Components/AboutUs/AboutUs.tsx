import { useEffect } from 'react';
import Cards from '../Cards/Cards';
import AOS from "aos";
import "aos/dist/aos.css";
import './AboutUs.styles.css';

type datatype = {
    title: string,
    desc: string
}


const cardsdata: datatype[] = [
    {
        title: "Innovación",
        desc: "Nuestra plataforma utiliza tecnología de vanguardia para identificar a los candidatos más prometedores de manera eficiente y precisa."
    },
    {
        title: "Precisión",
        desc: "Con algoritmos avanzados de IA, evaluamos cada perfil con precisión milimétrica, asegurando que solo los mejores talentos lleguen a ti."
    },
    {
        title: "Experiencia personalizada",
        desc: "Nos esforzamos por brindar una experiencia única para cada usuario, adaptando nuestras recomendaciones según las necesidades específicas de tu empresa."
    }
];

const AboutUs = ()=>{

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      


    return(
        <div className="aboutus-container">
            <div className='wrapper aboutus-content'>
                <p data-aos="zoom-in">¿Quiénes Somos?</p>
                <h2 data-aos="zoom-in">
                   Brindamos herramientas de vanguardia para la selección de personal
                </h2>
            </div>
            <div className='aboutus-cards' >
                {
                    cardsdata.map((dataCard, index)=> (
                        <Cards key={index} data={dataCard}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutUs;