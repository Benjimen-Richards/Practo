const express = require('express')
const Doctorroute = express.Router()
const multer = require('multer')
const upload=multer({ dest: memoryStorage })
const dataurl = require('datauri')
const { memoryStorage } = require('multer')

Doctorroute.get('/',(req,res)=>
{
    res.send("doctor fine")
})

Doctorroute.post('/add',upload.single("file"),function(req,res,next){
    const buffer = req.file.buffer.data
    // const encode = buffer.write()
    res.send(buffer)
})

module.exports = Doctorroute