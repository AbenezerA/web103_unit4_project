import express from 'express'
import RoofsController from '../controllers/roofs.js'

const router = express.Router()

router.get('/', RoofsController.getRoofs)
router.get('/:roofId', RoofsController.getRoofById)

export default router