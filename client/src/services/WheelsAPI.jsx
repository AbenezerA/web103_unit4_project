const getAllWheels = async () => {
    try {
        const response = await fetch('http://localhost:3000/wheels')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getWheelById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/wheels/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}


export default { 
    getAllWheels,
    getWheelById
 }