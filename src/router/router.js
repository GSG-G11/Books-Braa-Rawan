const express = require('express');
const {handleErrorNotFound,handleErrorServer} = require('../controller/handelError')
const router = express.Router();



router.use(handleErrorNotFound)
router.use(handleErrorServer)

module.exports = router;
