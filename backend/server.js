const port  = process.env.PORT || 1111
const express = require("express")
const app = express()
const parser = require('body-parser')
const cors = require("cors")
const Doctorroute = require("./routes/Doctormodal")
require('./Database/mongoose')
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.use(cors())


app.use('/doctor',Doctorroute)

app.listen(port,()=>console.log(`Server is on ${port}`))