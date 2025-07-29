const express = require('express')
const urlRouter = express.Router()
const {handleGetShortUrl, handleRedirectUrl} = require('../controllers/controller.js')

urlRouter.post('/', handleGetShortUrl)

urlRouter.get('/:shortUrl', handleRedirectUrl)

module.exports = {
    urlRouter
}