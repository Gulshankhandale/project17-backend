const express = require('express');
const router = express.Router();
const userModels = require('../dataModels/userModel');
const mongoose = require('mongoose');

router.get('/', async (req,res)=>{

    let user = await userModels.find();

    try {
        res.send(user);
    } catch (error) {
        res.send("Something error "+error)
    }
})

router.post('/add', async (req,res)=>{

    let user = new userModels({

        email:req.body.email,
        fullname:req.body.fullname,
        MobileNo:req.body.MobileNo,
        password:req.body.password,
    })

    try {
        await user.save();
        res.send("User added successfully");
    } catch (error) {
        res.send("Something error "+error)
    }
})

router.delete('/delete/:id', async (req,res)=>{

    let id = req.body.id;

    let user = await userModels.findOneAndDelete(id);

    try {
        res.send(user);
    } catch (error) {
        res.send("Something error "+error)
    }
})

router.post('/login', (req,res)=>{

   const { email, password } = req.body;

   userModels.findOne({email:email}, (err, userdata)=>{

    if(userdata){
        if(password === userdata.password){

            res.send({message:"Login Successful", userdata: userdata})
        }else{
            res.send({message:"Password didn't match"})
        }
    } else{
        res.send({message:"User not registered"});
    } 
   })


})

router.get('/user/:id', async (req, res)=>{

    let id = req.body.id;

    let user = await userModels.findOne(id);

    try {
        res.send(user);
    } catch (error) {
        res.send({message:"Something error"})
    }
})

module.exports = router;