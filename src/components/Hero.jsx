import React from 'react'
import "./Hero.css"
import CharacterCard from './CharacterCard'

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
        <article className='characterContainer'>
          <h3 className='characterContainerTitle'>Main characters of the series:</h3>
          <div>
            <CharacterCard img={"./characters/normalrick.jpeg"} hoverimg={"./characters/rick3d.png"}/>
            <CharacterCard img={"./characters/normalmorty.jpeg"} hoverimg={"./characters/morty3d.png"}/>
            <CharacterCard img={"./characters/normalsummer.jpeg"} hoverimg={"./characters/summer3d.png"}/>
          </div>
        </article>
    </section>
  )
}

export default Hero