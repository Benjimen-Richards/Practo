const express= require("express")
const mailroute = express.Router()
const nodemailer = require("nodemailer")
const doctor = require("../mongomodals/Doctormodal")
let otp 
console.log("user",process.env.user)
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.user,
        pass:process.env.PASSWORD
    }
})
mailroute.post('/',(req,res)=>
{
    const email = req.body.input
    doctor.findOne({email}).then(r=>
        {
            if(r)
            {
                otp = Math.floor(Math.random() * (9999-999)) + 1;
                let mailoptions = {
                    from :process.env.USERNAME,
                    to:r.email,
                    subject:"Password change",
                    text:`Hello ${r.fullname}!Your otp for password change is ${otp}`
                }
                transporter.sendMail(mailoptions,(err,data)=>
                {
                    if(err)
                    {
                        res.send(err)
                    }
                    else
                    {
                        res.send(r._id)
                    }
                })
            }

        })
})
mailroute.post('/verify',(req,res)=>
{
    if(parseInt(req.body.otp)===otp)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})
mailroute.post('/set/:id',async (req,res)=>
{
    const password = req.body.password
    const ans = await doctor.findByIdAndUpdate(req.params.id,{
        password
    })
    const result = await doctor.findById(req.params.id)
    res.send(result)
})
module.exports=mailroute