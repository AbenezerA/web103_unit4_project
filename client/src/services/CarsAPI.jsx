const getAllCars = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch('http://localhost:3000/items', options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getCarById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch(`http://localhost:3000/items/${id}`, options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const createCar = async (car) => {
    try {  
        console.log("abt to create car")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }

        fetch('http://localhost:3000/items', options)
        window.location = '/'
    }
    catch (error) {
        throw error
    }   
}

const updateCar = async (id, car) => {
    try {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }

        fetch(`http://localhost:3000/items/${id}`, options)
        window.location = '/'
    }
    catch (error) {
        throw error
    }
}

const deleteCar = async (id) => {
    try {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        fetch(`http://localhost:3000/items/${id}`, options)
        window.location = '/'
    }  
    catch (error) {
        throw error
    }
}

export default {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}
