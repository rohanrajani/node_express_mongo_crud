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

module.exports = {
    createUser
}
