import express from 'express'
import CustomItemsController from '../controllers/customitems.js'

const router = express.Router()

router.get('/', CustomItemsController.getCustomItems)
router.get('/:customItemId', CustomItemsController.getCustomItemById)
router.post('/', CustomItemsController.createCustomItem)
router.patch('/:id', CustomItemsController.updateCustomItem)
router.delete('/:id', CustomItemsController.deleteCustomItem)

export default router