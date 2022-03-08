const express = require('express');
const {handleErrorNotFound,handleErrorServer} = require('../controller/handelError')
const getAuthor = require('../controller/handleAuther')
const postDataFun = require('../controller/handelPostData')
const router = express.Router();

router.get('/author',getAuthor)
router.post('/create-book',postDataFun)

router.use(handleErrorNotFound)
router.use(handleErrorServer)

module.exports = router;
