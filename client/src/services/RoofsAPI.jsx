const getAllRoofs = async () => {
    try {
        const response = await fetch('http://localhost:3000/roofs')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getRoofById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/roofs/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}


export default { 
    getAllRoofs,
    getRoofById
 }