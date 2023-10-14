import React from 'react'
import '../App.css'
import '../css/ViewCars.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import carsAPI from '../services/CarsAPI'

const ViewCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const carsData = await carsAPI.getAllCars()
                setCars(carsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])
    
    return (
        <div className="cars-holder">
            {cars.map((car, index) => (
                <article key={index}>
                    <header>{car.name}</header>
                    <div className="car-card">
                        <div className='car-summary'>
                            <p>{car.exterior}</p>
                            <p>{car.roof}</p>
                        </div>
                        <div className='car-summary'>
                            <p>{car.wheels}</p>
                        </div>
                        <div className='car-price'>
                            <p>{car.price}</p>
                            <Link className="view-btn" to={`/customcars/${car.id}`}>Details</Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ViewCars