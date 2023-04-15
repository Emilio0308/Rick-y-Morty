import React from 'react'
import AxiosHook from '../hooks/AxiosHook'
import "./CardInfo.css"

const CardInfo = ( { residentUrl }) => {
    const { db : residentInfo } = AxiosHook(residentUrl)
  return (
    <article className='residentCard'>
        <div className='residenImg'>
            <img src= { residentInfo?.image } alt="Character img" />
            <button className='residenStatus'>
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