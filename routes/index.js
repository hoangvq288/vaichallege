const express = require('express');
const router = express.Router();
const { getIndex, getComplexity} = require('../controllers/index')

router.get('/', getIndex);
router.get('/', getComplexity);


module.exports = router;
