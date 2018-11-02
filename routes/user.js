const express = require('express');
const router = express.Router();
const userConreoller = require('../controller/userController')

router.post('/addUser', async(req,res) =>{
    userConreoller.createUser(req,res)
})

router.get('/getuser/all', async(req,res) =>{
    userConreoller.getAllUsers(req,res)
})

router.get('/getuser/:email', async(req,res) =>{
    userConreoller.getUserByEmail(req,res)
})

module.exports = router