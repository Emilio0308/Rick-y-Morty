import React from 'react'
import "./Hero.css"
import CharacterCard from './CharacterCard'

const Hero = () => {


  return (
    <section className='hero'>
        <article className='sinopsis'>
            <h3 className='sinopsisTitle'>RICK Y MORTY</h3>
            <p className='sinopsisText'>
            "Rick and Morty" is an adult animated science fiction series that follows the hilarious interdimensional adventures of alcoholic scientist Rick Sanchez and his teenage grandson Morty Smith. This series is a true gem for those who enjoy dark humor and complex stories that explore philosophical and scientific themes.<br/>
            If you're looking for an animated series that will make you laugh and think at the same time, look no further than "Rick and Morty". Join the fan fever and start watching it today!
            </p>
            <div className='imgContainer'>
                <img className='sinopsisImg' src="./rickmorty.png" alt="" />
            </div>
        </article>
        <article className='characterContainer'>
          <h3 className='characterContainerTitle'>Main characters of the series:</h3>
          <div>
            <CharacterCard name={"Rick Sanchez"} img={"./characters/normalrick.jpeg"} hoverimg={"./characters/rick3d.png"}/>
            <CharacterCard name={"Morty Smith"} img={"./characters/normalmorty.jpeg"} hoverimg={"./characters/morty3d.png"}/>
            <CharacterCard name={"Summer Smith"} img={"./characters/normalsummer.jpeg"} hoverimg={"./characters/summer3d.png"}/>
          </div>
        </article>
    </section>
  )
}

export default Hero