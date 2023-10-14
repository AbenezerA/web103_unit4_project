const getAllColors = async () => {
    try {
        console.log("about to fetch colors")
        const response = await fetch('http://localhost:3000/colors')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getColorById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/colors/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}


export default { 
    getAllColors,
    getColorById
 }