import React, { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import "./Location.css"

const Location = ( { location }) => {
    // console.log(location)
    const [currentPage, setCurrentPage] = useState(1)
    const residents = location?.residents
    const RESIDENTSXPAGE = 20
    let pages = []
    let npages= Math.ceil(residents?.length/ RESIDENTSXPAGE)
    for (let i = 1; i <= npages; i++) {
        pages.push(i)
    }
    let star = RESIDENTSXPAGE*(currentPage-1)
    let end = currentPage* RESIDENTSXPAGE
    useEffect(() => {
        setCurrentPage(1)
    }, [location])
  return (
    <section className='location'>
        <div className='locationInfo'>
            <h3 className='locationTitle'>Welcome to the crazy universe</h3>
            <p className='dimension'><span>Dimension: </span>{location?.dimension}</p>
            <p className='dimensionName'><span>Planet: </span>{location?.name}</p>
            <p className='dimensionResident'><span>Population: </span>{location?.residents.length}</p>
        </div>
        <section className='ListResidents'>
            {
                residents?.slice(star , end).map( (resident) =>{
                    return <CardInfo residentUrl={resident} key={resident}/>
                })
            }
        </section>
        <div className='pagesContainer'>
            {
                pages.map( (page) =>{
                   return <button style={ currentPage == page ? {background: `rgb(99, 99, 99)`}: {background: `rgb(197, 195, 195)`}} onClick={() => { setCurrentPage(page) }} key={page}>{page}</button>
                })
            }
        </div>
    </section>
  )
}

export default Location