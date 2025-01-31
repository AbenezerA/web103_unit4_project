import express from 'express'
import ColorsController from '../controllers/colors.js'

const router = express.Router()

router.get('/', ColorsController.getColors)
router.get('/:colorId', ColorsController.getColorById)

export default router