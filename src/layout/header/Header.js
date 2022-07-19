import "./Header.css"

import React from 'react'
import fotoCV from '../../assets/fotoPersonal.jpg'

const Header = () => {
    return (
        <div className='bgHeader' id='header'>
            <div className='contentHeader' data-aos="zoom-in" data-aos-duration="1500">
                <img src={fotoCV} alt='foto sobre mí' className='personalImg'/>
                <div className='textHeader'>
                    <p className='textName'>Facundo Duarte</p>
                    <p className='text'>Fullstack Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Header
