import React from 'react'
import CardInfo from './CardInfo'
import "./Location.css"

const Location = ( { location }) => {
    const residents = location?.residents

  return (
    <section className='location'>
        <div className='locationInfo'>
            <h3 className='locationTitle'>Welcome to the crazy universe</h3>
            <p className='dimension'>{location?.dimension}</p>
            <p className='dimensionName'>{location?.name}</p>
            <p className='dimensionResident'><span>Population: </span>{location?.residents.length}</p>
        </div>
        <section className='ListResidents'>
            {
                residents?.map( (resident) =>{
                    return <CardInfo residentUrl={resident} key={resident}/>
                })
            }

        </section>
    </section>
  )
}

export default Location