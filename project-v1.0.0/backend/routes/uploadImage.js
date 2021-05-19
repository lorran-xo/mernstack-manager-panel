const express = require("express");
const router=express.Router();
const configTemplateCopy = require('../models/uploadImageModel')
const multer = require('multer');

// definindo armazenamento para a imagem

const storage = multer.diskStorage({
    //destination for files
    destination: function (request, file, callback) {
      callback(null, './public/uploads/images');
    },
  
    //add back the extension
    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });
  
  //upload parameters for multer
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    },
  });

router.post('/', upload.single('image'), async (request, response) => {
    console.log(request.file);

    let image = new configTemplateCopy({
        image: request.file.filename,
        originalName: request.file.originalname,
        mimeType: request.file.mimetype,
        destination: request.file.destination,
        path: request.file.path,
        size: request.file.size,
    });
  
    try {
      image = await image.save();
      response.writeHead(302, {
        'Location': 'http://localhost:3000/'
      });
      response.end();
    } catch (error) {
      console.log(error);
    }
});

module.exports = router;
