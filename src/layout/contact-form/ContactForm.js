import React from 'react'
import "./ContactForm.css"
import gmail from '../../assets/gmail.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const ContactForm = () => {
    return (
        <section className='sectionContact' id='Contacto'>
            <div className='titleContact'>
                <h2>Contacto</h2>
            </div>
            <div className='contactLinks'>
                <div className='contactCard'>
                    <a href='mailto:facundo.duarte.n29@gmail.com' target="_blank" rel="noopener noreferrer" className='linksText'>
                        <img className='imgContact' src={gmail} alt='icono de dragon'/>
                        <p>Mail</p>
                    </a>
                </div>
                <div className='contactCard'>
                    <a href='https://github.com/FacuDuarte' target="_blank" rel="noopener noreferrer" className='linksText'>
                        <img className='imgContact' src={github} alt='icono de dragon'/>
                        <p>GitHub</p>
                    </a>
                </div>
                <div className='contactCard'>
                    <a href='https://www.linkedin.com/in/duartefacundo/' target="_blank" rel="noopener noreferrer" className='linksText'>
                        <img className='imgContact' src={linkedin} alt='icono de dragon'/>
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
