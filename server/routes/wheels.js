import express from 'express'
import WheelsController from '../controllers/wheels.js'

const router = express.Router()

router.get('/', WheelsController.getWheels)
router.get('/:wheelId', WheelsController.getWheelById)

export default router