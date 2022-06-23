import { Router } from 'express'

import { uploadImage } from '../middlewares/multer'
import * as controller from '../controllers/places.controller'
import * as validator from '../validators/place.validator'

const router = Router()

router.post(
  '/',
  uploadImage.array('imageOfPlace'),
  validator.createPlace,
  controller.createPlace
)

router.get('/:id', controller.getPlaceById)
router.get('/', controller.getAllPlaces)
router.delete('/:id', controller.deletePlace)

export default router
