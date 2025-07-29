const ShortUrlModel = require('../models/urlModel')
const shortid = require('shortid')

async function handleGetShortUrl(req,res){
    const url =  shortid()
    const body = req.body
    await ShortUrlModel.create({
        shortUrl: url,
        redirectUrl: body.url,
        vistiHistory:[]
    })

    return res.render('Home', {id : url}) 
}

async function handleRedirectUrl(req,res){
    const shortUrl = req.params.shortUrl
   const data =  await ShortUrlModel.findOneAndUpdate(
        {
            shortUrl,
        },
        {$push:{
            vistiHistory:Date.now(),
        },
    }
    )
    res.redirect(data.redirectUrl)
}

module.exports = {
    handleGetShortUrl,
    handleRedirectUrl
}