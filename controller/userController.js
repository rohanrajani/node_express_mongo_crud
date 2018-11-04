const mongoose = require("mongoose");
const User = require("../models/userModel");

var createUser = async(req,res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        user: req.body.user,
        email:req.body.email
      });
      var saveUser = user.save().then(result=>{
            console.log(result)
            res.status(201).json({
                message: "Created user successfully",
                createdProduct: {
                    _id: result._id,
                    name: result.name,
                    user: result.user,
                    email: result.email
                }
              });
      })
}

var getAllUsers = async(req,res,next)=>{
    User.find()
    .select("name user _id email")
    .exec().then(data=>{
        var returnData={
            count: data.length,
            users: data.map(dt=>{
                return {
                    _id: dt._id,
                    name: dt.name,
                    user: dt.user,
                    email: dt.email
                }
            })
        }
        res.status(200).json(returnData);

    })
}

var getUserByEmail = async(req,res,next)=>{
    var email_id=req.params.email
    User.find({email:email_id})
    .select("name user _id email")
    .exec().then(data=>{
        var returnData={
            count: data.length,
            users: data.map(dt=>{
                return {
                    _id: dt._id,
                    name: dt.name,
                    user: dt.user,
                    email: dt.email
                }
            })
        }
        res.status(200).json(returnData);

    })
}

var updateUser= async(req,res) => {
    const id = req.params.userId;
    User.findByIdAndUpdate({ _id: id },req.body )
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'User updated successfully'
      });
    });
}

var deleteUser= async(req,res) => {
    const id = req.params.userId;
    User.findOneAndDelete({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'User deleted successfully'
      });
    });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser
}
