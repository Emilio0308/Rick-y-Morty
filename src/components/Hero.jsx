import React from 'react'
import "./Hero.css"

const Hero = () => {


  return (
    <section className='hero'>
        <article className='sinopsis'>
            <h3 className='sinopsisTitle'>RICK Y MORTY</h3>
            <p className='sinopsisText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem voluptates culpa eius perspiciatis voluptatibus necessitatibus nobis tenetur aperiam! Totam maiores deserunt dicta commodi, distinctio amet beatae expedita natus sequi.</p>
            <div className='imgContainer'>
                <img className='sinopsisImg' src="./rickmorty.png" alt="" />
            </div>
        </article>
    </section>
  )
}

export default Hero