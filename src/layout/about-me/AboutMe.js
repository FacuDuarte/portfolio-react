import "./AboutMe.css"

import Button from '@mui/material/Button';
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import bootstrap from '../../assets/bootstrap.png'
import css from '../../assets/css.png'
import firebase from '../../assets/firebase.png'
import git from '../../assets/git.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import jquery from '../../assets/jquery.gif'
import material from '../../assets/material-ui.png'
import mongoDB from '../../assets/mongodb.png'
import node from '../../assets/nodejs.png'
import pdf from "../../assets/CV-Duarte-Facundo.pdf"
import reactjs from '../../assets/reactjs.png'
import sass from '../../assets/sass.png'

const AboutMe = () => {
    return (
        <section className='sectionSkills' id='Yo'>
            <div className='contentSkills' data-aos="fade-up" data-aos-duration="1500">
                <div className='descriptionSkills marginTop'>
                    <h2>Sobre mí</h2>
                    <p>
                    Mi nombre es Facundo Duarte, tengo 23 años y soy de Buenos Aires, Argentina.
                    </p>
                    <p>Soy una persona autodidacta, alegre y con buena predisposición. Disfruto trabajar en equipo y resolver problemas. Mi objetivo es poder insertarme en el mundo laboral IT y seguir formándome en una carrera universitaria.</p>
                    <p>Comence en el mundo del desarrollo con el curso de desarrollador Front end en CoderHouse, donde tuve la oportunidad de trabajar en un proyecto freelance para una pyme. Actualmente me capacito como desarrollador fullstack de la mano de Fundación Pescar, J.P. Morgan y EducacionIT.</p>
                    <Button variant="contained" color="warning" startIcon={<SaveIcon/>} href={pdf} download="Cv-FacundoDuarte">
                        Descargar Cv
                    </Button>
                </div>
                <div className='marginTop'>
                    <h2>Conocimientos</h2>
                    <div className='contentIcons'>
                            <img className='iconSkill' alt='icono de HTML' src={html}/>
                            <img className='iconSkill' alt='icono de CSS' src={css}/>
                            <img className='iconSkill' alt='icono de Bootstrap' src={bootstrap}/>
                            <img className='iconSkill' alt='icono de Git' src={git}/>
                            <img className='iconSkill' alt='icono de mongoDB' src={mongoDB}/>
                            <img className='iconSkill' alt='icono de Javascript' src={javascript}/>
                            <img className='iconSkill' alt='icono de nodeJS' src={node}/>
                            <img className='iconSkill' alt='icono de Jquery' src={jquery}/>
                            <img className='iconSkill' alt='icono de Sass' src={sass}/>
                            <img className='iconSkill' alt='icono de ReactJs' src={reactjs}/>
                            <img className='iconSkill' alt='icono de Firebase' src={firebase}/>
                            <img className='iconSkill' alt='icono de Material ui' src={material}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe
