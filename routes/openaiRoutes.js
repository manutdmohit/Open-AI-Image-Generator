const express = require('express');
const {
  generateImage,
  codeCompletion,
} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);

router.post('/codecomplete', codeCompletion);

module.exports = router;
