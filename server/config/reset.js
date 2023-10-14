import { pool } from './database.js'
import '../config/dotenv.js'

async function createCustomItemsTable() {

    const createCustomItemsTableQuery = `
        DROP TABLE IF EXISTS customitem;

        CREATE TABLE IF NOT EXISTS customitems (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            convertible BOOLEAN NULL,
            exterior VARCHAR(255) NULL,
            roof VARCHAR(255) NULL,
            wheels VARCHAR(255) NULL,
            price INT NOT NULL,
        );     
    `
    try {
        const res = await pool.query(createCustomItemsTableQuery)
        console.log('🎉 customitems table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating customitems table', err)
    }
}

createCustomItemsTable()
