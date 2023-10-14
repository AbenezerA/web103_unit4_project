import React from 'react'
import '../App.css'
import '../css/ViewCars.css'
import '../css/CreateCar.css'
import carsAPI from '../services/CarsAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CarDetails = () => {
    const [car, setCar] = useState([])
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const carData = await carsAPI.getCarById(id)
                setCar(carData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const deleteCar = async (event) => {
        try {
            await carsAPI.deleteCar(id)
        }
        catch (error) {
            throw error
        }
    }

    return (
        <div>
            <article className='car-full-details'>
                <header><h2>Name: {car.name}</h2></header>
                <div className='details-content'>
                    <p>Exterior: {car.exterior}</p>
                    <p>Is convertible: {car.convertible ? "yes" : "no"}</p>
                    <p>Roof: {car.roof}</p>
                    <p>Wheels: {car.wheels}</p>
                    <p>Price: ${car.price}</p>
                    <Link className="view-btn" to={`/edit/${car.id}`}>Edit</Link>
                    <input type="submit" className="delete-car-button" value="Delete" onClick={deleteCar}></input>
                </div>
            </article>
        </div>
    )
}

export default CarDetails