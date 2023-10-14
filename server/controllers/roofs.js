import { pool } from '../config/database.js'

const getRoofs = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM roofs ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getRoofById = async (req, res) => {
    try {
      const roofId = req.params.roofId
      const selectQuery = `SELECT * FROM roof WHERE id = ${roofId}`
      const results = await pool.query(selectQuery)
  
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
}

export default {
  getRoofs,
  getRoofById
}