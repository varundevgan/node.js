const express = require('express')
const app = express()
const path = require('path')
const {handleConnection} = require('./connection/connection')
const {urlRouter} = require('./routes/routes')
const {router} = require('./routes/staticRoutes')



//connection
handleConnection('mongodb://127.0.0.1:27017/shortUrls')
.then(()=>console.log('MongoDb connected'))
.catch((err)=>console.log(err));

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views') )



//middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use('/api/url', urlRouter)
app.use('/', router)


app.listen('3000', ()=>{
    console.log('Server Started')
})