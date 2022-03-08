const express = require('express');
const {handleErrorNotFound,handleErrorServer} = require('../controller/handelError')
const getAuthor = require('../controller/handleAuther')
const router = express.Router();

router.get('/author',getAuthor)

router.use(handleErrorNotFound)
router.use(handleErrorServer)

module.exports = router;
