import React from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSmile, faHeart, faPaperPlane, faPhone, faUserNurse, faTooth } from '@fortawesome/free-solid-svg-icons';
import "./AboutUs.css";
import Team from '../../assets/clinic/team.png';
import Prevent from '../../assets/clinic/prevent.png';
import Vistas from '../../assets/clinic/vistas.jpeg';
import Reser from '../../assets/clinic/reser.jpeg';

const AboutUs = () => {

    let history = useHistory();

    let token = localStorage.getItem("token");

    const llevame = () => {

        if(token === null) {
            history.push("/register")
        } else {

            history.push("/appointments");
        }
    }

  return (

    <div className="aboutContainer">
      <div className="divUp">
        <div className="h1">
            <h1 className="title">Tu salud es nuestra prioridad</h1>
            <p className="p experience">
                Bienvenido a la clínica líder en Odontologia, contamos con más de 20
                años de experiencia en el sector, creciendo como familia y
                trasmitiendo de generación a generación nuestro objetivo final, el
                trato cercano a nuestra comunidad.
            </p>
        </div>
            <div className="image1">
                <img className="team" src={Team} alt="home" />
            </div>
      </div>

      <div className="divInfo">

        <div className="infoCards">
            <h3>EXPERIENCE</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faSmile}/>
            </div>
            <p className="experience">Contamos con una sólida formación en Odontología estética general, y además nuestro equipo esta en una constante formacón para estar al día con los desarrollos de la industria. </p>
        </div>

        <div className="infoCards">
            <h3>QUALITY</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <p className="experience"> Apostamos por la calidad como clave fundamental, nos apoyamos en las normas que están asociadas al crecimiento, ya que nos ayuda a prestar un trato y servicio de alta calidad. </p>
        </div>

        <div className="infoCards">
            <h3>GUARANTEES</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </div>
            <p className="experience"> En Trident contamos con profesionales con amplia experiencia y aseguramos exlentes resultados, ofrecemos los mejores tratamientos contando con los mejores materiales en la industria.</p>
        </div>

      </div>

        <div className="divMiddle">
            <div className="medidas h1">
                <h1 className="title2">Medidas preventivas contra el COVID-19</h1>
                <p className="parMiddle experience">En Trident, hemos tomado todas las medidas y protocolos necesarios para brindarte una alta protección y reducir al máximo el riesgo de contagio.</p><br></br><br></br>
                <p className="parMiddle experience">Para que te sientas totalmente seguro en nuestras instalaciones.</p>
            </div>
            <div className="image2">
                <img  className="team2" src={Prevent} alt="surgeon" />
            </div>
        </div>

            <div className="takeDate">
                <div className=" infoCards3">
                    <h1 className="title3">Tu clinica dental de mayor confianza</h1>
                    <p className="pardown experience">Nuestros equipamientos disponen de todos los certificados de calidad y alto rendimiento para brindarte un servicio óptimo, profesionales con más de 15 años de experiencia sacando las mejores sonrisas de sus pacinetes.</p><br></br><br></br>
                    <p className="pardown experience">¿A qué estás esperando para lucir tu mejor sonrisa?</p><br></br>
                    <p className="pardown experience">Disfruta de tu primera visita totalmente gratis</p>
                </div>
                <div className="image3">
                    <img  className="team3" src={Vistas} alt="sala" />
                </div>
            </div>

            <div className="end">
                <div className="reservaCard">
                    <p className="experience">Clinicas Trident </p><br></br>
                    <div className="nurse" style={{fontSize:"1.5em"}}>
                    <FontAwesomeIcon icon={faUserNurse}/>
                    </div>
                    <p className="experience"> Especialistas disponibles : 4</p><br></br>
                    <div className="send" onClick={() => llevame()}>PEDIR CITA</div>
                </div>
                <div className="imagen4">
                    <img  className="team4" src={Reser} alt="sala" />
                </div>
            </div>

            <footer>
                <div className="containerAll">
                    <div className="footerBody">
                        <div className="column1">
                            <h2 className="titleFooter">Práctica Dental de la mano del equipo Tridente</h2>
                            <p className="experience parFooter">Tridente, Clínica con más de 20 años de experiencia</p>
                        </div>
                        <div className="tooth" style={{fontSize:"2.5em"}}>
                            <FontAwesomeIcon icon={faTooth}/>
                        </div>
                        <div className="column2">
                            <div className="phone" style={{fontSize:"2em"}}>
                            <FontAwesomeIcon icon={faPhone}/> <span> 963456999</span>
                            </div>
                            <h2 className="footerContact">Contacto</h2>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  );
};

export default AboutUs;
