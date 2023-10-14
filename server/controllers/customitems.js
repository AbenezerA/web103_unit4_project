import { pool } from '../config/database.js'

const getCustomItems = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM customitems ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCustomItemById = async (req, res) => {
    try { 
      const customItemId = req.params.customItemId
      const selectQuery = `SELECT * FROM customitems WHERE id = ${customItemId}`
      const results = await pool.query(selectQuery)
  
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
}

const createCustomItem = async (req, res) => {
    try {
    //   console.log("in the create custom item function")
      const { name, convertible, exterior, roof, wheels, price } = req.body
      const results = await pool.query(`
        INSERT INTO customitems (convertible, exterior, roof, wheels, price, name)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [convertible, exterior, roof, wheels, price, name]
      )
      res.status(201).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
}

const updateCustomItem = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const { name, convertible, exterior, roof, wheels, price } = req.body 
      const results = await pool.query(`
        UPDATE customitems SET name = $1, convertible = $2, exterior = $3, roof = $4, wheels = $5, price= $6 WHERE id = $7`,
        [name, convertible, exterior, roof, wheels, price, id]
      )
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
}

const deleteCustomItem = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const results = await pool.query('DELETE FROM customitems WHERE id = $1', [id])
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }


export default {
    getCustomItems,
    getCustomItemById,
    createCustomItem,
    updateCustomItem,
    deleteCustomItem
}