import multer from 'multer'
import path from 'path'

const storageImage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (_req, file, cb) {
    const name =
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    cb(null, name)
  }
})

const uploadImage = multer({
  storage: storageImage,
  fileFilter: (_req, file, cb) => {
    if (file.fieldname === 'imageOfPlace') {
      cb(null, file.mimetype.startsWith('image'))
    }
  },
  limits: { files: 15 }
})

export { uploadImage }
