import "./Proyects.css"

import React from 'react'
import calculator from '../../assets/calculator.png'
import cart from '../../assets/cart.png'
import dragon from '../../assets/dragonLogo.svg'
import magnolia from '../../assets/magnolia.png'
import pallete from '../../assets/pallete.png'
import pokedex from '../../assets/pokedex.png'
import todo from '../../assets/todo.png'

const Proyects = () => {
    return (
        <section className='sectionProyects' id='Proyectos'>
            <div className='titleProyects'>
                <h2>Proyectos</h2>
            </div>
            <div className='cardsProyects'>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://facuduarte.github.io/news-html-css/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={dragon} alt='icono de landing page Kumara news'/>
                    </a>
                    <h3>Kumara News</h3>
                    <p>Landing page con Html, Css, Bootstrap y Sass</p>
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://facuduarte.github.io/pokeapi-javascript/' target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={pokedex} alt='icono de pagina web Pokedex'/>
                    </a>
                    <h3>Pokedex</h3>
                    <p>Consumo de API con Html, Css y Javascript</p>      
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://carbis1992.github.io/Magnolia/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={magnolia} alt='icono de landing page Magnolia'/>
                    </a>
                    <h3>Magnolia</h3>
                    <p>Landing page con Html y Css</p> 
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://kumara-ecommerce.netlify.app/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={cart} alt='icono de ecommerce'/>
                    </a>
                    <h3>Kumara Shop</h3>
                    <p>Ecommerce con Html, Css, Bootstrap, React.js y Firebase</p> 
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://facuduarte.github.io/calculadora-js/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={calculator} alt='icono de pagina calculadora'/>
                    </a>
                    <h3>Calculadora</h3>
                    <p>Html, Css, Javascript</p> 
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://facuduarte.github.io/generador_paletas-js/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={pallete} alt='icono de pagina generador de paleta de colores'/>
                    </a>
                    <h3>Generador paleta de colores</h3>
                    <p>Html, Css, Javascript</p> 
                </div>
                <div className='card' data-aos="zoom-out-right" data-aos-duration="1500">
                    <a className='logo' href='https://facuduarte.github.io/to-do_js/'
                    target="_blank" rel="noopener noreferrer">
                        <img className='imgLogo' src={todo} alt='icono de pagina todo app'/>
                    </a>
                    <h3>To-do app</h3>
                    <p>Html, Css, Javascript</p> 
                </div>
            </div>
        </section>
    )
}

export default Proyects
