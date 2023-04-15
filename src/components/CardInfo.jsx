import React from 'react'
import AxiosHook from '../hooks/AxiosHook'
import "./CardInfo.css"

const CardInfo = ( { residentUrl }) => {
    const { db : residentInfo } = AxiosHook(residentUrl)
    let residenStatus = {
        "Alive" : "rgb(90, 248, 42)",
        "Dead": "rgb(252, 31, 31)",
        "unknown": "rgb(83, 83, 83)",
    }
  return (
    <article className='residentCard'>
        <div className='residenImg'>
            <img src= { residentInfo?.image } alt="Character img" download="lazy" />
            <button className='residenStatus'>
                <div style={{background: residenStatus[residentInfo?.status]}}></div>
            { residentInfo?.status}
            </button>
        </div>
        <div className='residentInfo'>
            <h3>{ residentInfo?.name }</h3>
            <ul>
                <li><span>specie: </span><span>{residentInfo?.species}</span></li>
                <li><span>name: </span><span>{residentInfo?.origin.name}</span></li>
                <li><span>times appear: </span><span>{residentInfo?.episode.length}</span></li>
            </ul>
        </div>
    </article>
  )
}

export default CardInfo