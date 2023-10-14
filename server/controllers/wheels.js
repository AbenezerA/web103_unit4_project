import { pool } from '../config/database.js'

const getWheels = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM wheels ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getWheelById = async (req, res) => {
    try {
      const wheelId = req.params.wheelId
      const selectQuery = `SELECT * FROM roof WHERE id = ${roofId}`
      const results = await pool.query(selectQuery)
  
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
}

export default {
  getWheels,
  getWheelById
}