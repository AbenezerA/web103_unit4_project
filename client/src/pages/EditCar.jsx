import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import carsAPI from '../services/CarsAPI'
import colorsAPI from '../services/ColorsAPI'
import roofsAPI from '../services/RoofsAPI'
import wheelsAPI from '../services/WheelsAPI'
import '../App.css'
import '../css/CreateCar.css'

const EditCar = () => {

    const [car, setCar] = useState({
        id: 0, 
        name: '',
        convertible: false,
        exterior: '',
        roof: '',
        wheels: '',
        price: 65000
    })
    const [colors, setColors] = useState([])
    const [roofs, setRoofs] = useState([])
    const [wheels, setWheels] = useState([])

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const carData = await carsAPI.getCarById(id)
                const colorsData = await colorsAPI.getAllColors()
                const roofsData = await roofsAPI.getAllRoofs()
                const wheelsData = await wheelsAPI.getAllWheels()
                setColors(colorsData)
                setRoofs(roofsData)
                setWheels(wheelsData)
                setCar(carData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const editCar = async (event) => {
        try {
            await carsAPI.updateCar(car.id, car)
            window.location.href = '/customcars'
        }
        catch (error) {
            throw error
        }
    }

    const deleteCar = async (event) => {
        try {
            await carsAPI.deleteCar(car.id)
        }
        catch (error) {
            throw error
        }
    }
    
    return (
        <div>
            <form className='create-car-form'>
                <label>
                    Name
                    <input type="text" id="name" name="name" value={car.name} onChange={(e) => setCar({ ...car, name: e.target.value })}></input>
                </label>
                <label>
                    Exterior
                    <select value={car.exterior} onChange={(e) => setCar({ ...car, exterior: colors[e.target.value-1].name, price: car.price + colors[e.target.value-1].price })}>
                        {colors.map((color, index) => (
                            <option key={index} value={color.id}>{color.name} (${color.price})</option>
                        ))}
                    </select>
                    <p>Selected: {car.exterior}</p>
                </label>
                <label>
                    Roof
                    <select value={car.roof} onChange={(e) => setCar({ ...car, roof: roofs[e.target.value-1].name, price: car.price + roofs[e.target.value-1].price })}>
                        {roofs.map((roof, index) => (
                            <option key={index} value={roof.id}>{roof.name} (${roof.price})</option>
                        ))}
                    </select>
                    <p>Selected: {car.roof}</p>
                </label>
                <label>
                    Wheels
                    <select value={car.wheels} onChange={(e) => setCar({ ...car, wheels: wheels[e.target.value-1].name, price: car.price + wheels[e.target.value-1].price })}>
                        {wheels.map((wheel, index) => (
                            <option key={index} value={wheel.id}>{wheel.name} (${wheel.price})</option>
                        ))}
                    </select>  
                    <p>Selected: {car.wheels}</p>         
                </label> 
                <input type="submit" className="edit-car-button" value="Edit" onClick={editCar}></input>          
                <input type="submit" className="delete-car-button" value="Delete" onClick={deleteCar}></input>  
            </form>
        </div>
    )
}

export default EditCar