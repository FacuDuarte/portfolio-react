import React from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import "./AboutMe.css"
import bootstrap from '../../assets/bootstrap.png'
import css from '../../assets/css.png'
import firebase from '../../assets/firebase.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import jquery from '../../assets/jquery.gif'
import reactjs from '../../assets/reactjs.png'
import sass from '../../assets/sass.png'
import material from '../../assets/material-ui.png'
import pdf from "../../assets/Cv-DuarteFacundo.pdf"


const AboutMe = () => {
    return (
        <section className='sectionSkills' id='Yo'>
            <div className='contentSkills'>
                <div className='descriptionSkills marginTop'>
                    <h2>Sobre mí</h2>
                    <p>
                    Me llamo Facundo Duarte, tengo 22 años y soy de Buenos Aires, Argentina. Me gustan los diseños modernos y simples, me apasiona el desarollo web y trato de aprender todo lo que pueda sobre este mundo. 
                    Tuve mi primera experiencia trabajando en un proyecto para un emprendimiento gracias a que finalize como top 10 de la clase en el curso de HTML y CSS en CoderHouse, donde estudie, y actualmente estoy buscando mi primer trabajo en el mundo IT.
                    </p>
                    <Button variant="contained" href="#contained-buttons" color="warning" startIcon={<SaveIcon/>} href={pdf} download="Cv-FacundoDuarte">
                        Descargar Cv
                    </Button>
                </div>
                <div className='marginTop'>
                    <h2>My skills</h2>
                    <div className='contentIcons'>
                            <img className='iconSkill' alt='icono de HTML' src={html}/>
                            <img className='iconSkill' alt='icono de CSS' src={css}/>
                            <img className='iconSkill' alt='icono de Bootstrap' src={bootstrap}/>
                            <img className='iconSkill' alt='icono de Git' src={git}/>
                            <img className='iconSkill' alt='icono de GitHub' src={github}/>
                            <img className='iconSkill' alt='icono de Javascript' src={javascript}/>
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
