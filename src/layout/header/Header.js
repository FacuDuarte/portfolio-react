import React from 'react'
import "./Header.css"
import fotoCV from '../../assets/fotoPersonal.png'

const Header = () => {
    return (
        <div className='bgHeader' id='header'>
            <div className='contentHeader'>
                <img src={fotoCV} alt='foto sobre mí' className='personalImg'/>
                <div className='textHeader'>
                    <p className='text'>Hi!</p>
                    <p className='textName'>Soy Facundo Duarte</p>
                    <p className='text'>Front End Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Header
