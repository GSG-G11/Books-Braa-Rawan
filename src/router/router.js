const express = require('express');
const {handleErrorNotFound,handleErrorServer} = require('../controller/handelError')
const getAuthor = require('../controller/handleAuther')
const postDataFun = require('../controller/handelPostData')
const getAllDta= require('../controller/handelAllBook')
const router = express.Router();

router.get('/author',getAuthor)
router.post('/create-book',postDataFun)
router.get('/getBook',getAllDta)

router.use(handleErrorNotFound)
router.use(handleErrorServer)

module.exports = router;
