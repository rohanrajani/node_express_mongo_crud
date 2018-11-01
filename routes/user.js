const express = require('express');
const router = express.Router();
const userConreoller = require('../controller/userController')

router.post('/addUser', async(req,res) =>{
    userConreoller.createUser(req,res)
})

module.exports = router