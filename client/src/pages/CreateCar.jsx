import { React, useState, useEffect } from 'react'
import '../App.css'
import '../css/CreateCar.css'
import carsAPI from '../services/CarsAPI'
import colorsAPI from '../services/ColorsAPI'
import roofsAPI from '../services/RoofsAPI'
import wheelsAPI from '../services/WheelsAPI'


const CreateCar = () => {
    const [car, setCar] = useState({
        id: 0, 
        name: '',
        convertible: false,
        exterior: '',
        roof: '',
        wheels: '',
        price: 65000
    })

    // const [price, setPrice] = useState(65000)
    const [colors, setColors] = useState([])
    const [roofs, setRoofs] = useState([])
    const [wheels, setWheels] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const colorsData = await colorsAPI.getAllColors()
                const roofsData = await roofsAPI.getAllRoofs()
                const wheelsData = await wheelsAPI.getAllWheels()
                setColors(colorsData)
                setRoofs(roofsData)
                setWheels(wheelsData)
                // console.log("colors: " + colorsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const handleCheckboxChange = () => {
        setCar( (prev) => {
            return {
                ...prev,
                convertible: !prev.convertible,
                price: car.convertible ? prev.price - 2000 : prev.price + 2000
            }
        })
        console.log("convertible: " + car.convertible)
    }

    const createCar = async (event) => {

        try {
            console.log("1111 abt to create car")
            await carsAPI.createCar(car)
            console.log("car created")
        }
        catch (error) {
            throw error
        }
    }

    return (
        <div className='create-car'>  
            <label>
                <input type="checkbox" id="isconvertible" checked={car.convertible} onChange={handleCheckboxChange}></input>
                Convertible (+$2000)
            </label>
            <div className='create-car-options'>
                <div id="customization-options" className="car-options">
                    <div className='car-options'>
                        <label>
                            Exterior
                            <select value={car.exterior} onChange={(e) => setCar({ ...car, exterior: colors[e.target.value-1].name, price: car.price + colors[e.target.value-1].price })}>
                                {colors.map((color, index) => (
                                    <option key={index} value={color.id}>{color.name} (${color.price})</option>
                                ))}
                            </select>
                            <p>Selected: {car.exterior} </p>
                        </label>
                    </div>
                    <div className='car-options'>
                        <label>
                            Roof
                            <select value={car.roof} onChange={(e) => setCar({ ...car, roof: roofs[e.target.value-1].name, price: car.price + roofs[e.target.value-1].price })}>
                                {roofs.map((roof, index) => (
                                    <option key={index} value={roof.id}>{roof.name} (${roof.price})</option>
                                ))}
                            </select>
                            <p>Selected: {car.roof} </p>
                        </label>
                    </div>
                    <div className='car-options'>
                        <label>
                            Wheels
                            <select value={car.wheels} onChange={(e) => setCar({ ...car, wheels: wheels[e.target.value-1].name, price: car.price + wheels[e.target.value-1].price })}>
                                {wheels.map((wheel, index) => (
                                    <option key={index} value={wheel.id}>{wheel.name} (${wheel.price})</option>
                                ))}
                            </select>
                            <p>Selected: {car.wheels} </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className='create-car-price'>
                💰$
                {car.price}
            </div>
            <div className='create-car-name'>
                <input type="text" id="name" name="name" placeholder='Name your car' onChange={(e) => setCar({ ...car, name: e.target.value })}></input>
                <input type="submit" className="create-car-button" value="Submit" onClick={createCar}></input>
            </div>
        </div>
    )
}

export default CreateCar