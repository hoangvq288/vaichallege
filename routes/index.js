const express = require('express');
const router = express.Router();
const { getIndex, postComplexity} = require('../controllers/index')

router.get('/', getIndex);
router.post('/complexity', postComplexity);


module.exports = router;
