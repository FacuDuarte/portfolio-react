import React from 'react'
import "./Proyects.css"
import dragon from '../../assets/dragonLogo.svg'
import magnolia from '../../assets/magnolia.png'
import pokedex from '../../assets/pokedex.png'
import cart from '../../assets/cart.png' 

const Proyects = () => {
    return (
        <section className='sectionProyects'>
            <div className='titleProyects'>
                <h2>Proyectos</h2>
            </div>
            <div className='cardsProyects'>
                <div className='card'>
                    <a className='logo' href='https://facuduarte.github.io/repoProyectoFinal/'
                    target="_blank">
                        <img className='imgLogo' src={dragon} alt='icono de dragon'/>
                    </a>
                    <h3>Kumara News</h3>
                    <p>Html, Css, Bootstrap y Sass</p>
                </div>
                <div className='card'>
                    <a className='logo' href='https://facuduarte.github.io/Pokedex/' target="_blank">
                        <img className='imgLogo' src={pokedex} alt=''/>
                    </a>
                    <h3>Pokedex</h3>
                    <p>Html, Css y Javascript</p>      
                </div>
                <div className='card'>
                    <a className='logo' href='https://carbis1992.github.io/Magnolia/'
                    target="_blank">
                        <img className='imgLogo' src={magnolia} alt=''/>
                    </a>
                    <h3>Magnolia</h3>
                    <p>Html y Css</p>
                    <p>Proyecto real top 10 de CoderHouse</p>  
                </div>
                <div className='card'>
                    <a className='logo' href='https://kumara-ecommerce.netlify.app/'
                    target="_blank">
                        <img className='imgLogo' src={cart} alt='icono de dragon'/>
                    </a>
                    <h3>Kumara Shop</h3>
                    <p>Html, Css, Bootstrap y React.js</p> 
                </div>
            </div>
        </section>
    )
}

export default Proyects
