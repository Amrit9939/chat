import express from "express";
import {AllUser} from "../../collections/collection.js";
const Fiber = require('fibers');

exports.login_controller = (req,res,next)=>{
  console.log("in login up");
  Fiber(async function(){
    try {
      console.log("in login");
      var user = await AllUser.findOne({email:req.body.email});
      if(user){
        if(user.password==req.body.password){
          console.log(user);
          res.status(200).json({
            data:user
          })
        }else {
          res.status(400).json({
            data:"invalid"
          })
        }
      }else {
        res.status(400).json({
          data:"invalid"
        })
      }

    } catch (err) {
      console.log(err);
    }
  }).run()
}

// app.post("/login",(req,res)=>{
//
// })
