const mongoose = require('mongoose')

const ShortUrlSchema = mongoose.Schema({
    shortUrl:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true
    },
    vistiHistory: [{type: Number}]
}) 

const ShortUrlModel = mongoose.model('url', ShortUrlSchema)

module.exports = ShortUrlModel