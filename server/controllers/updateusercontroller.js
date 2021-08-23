import express from "express";
import {User} from "../../collections/collection.js";
const Fiber = require('fibers');

exports.update_controller = (req,res,next)=>{
  console.log("in update");
  Fiber(async function(){
    try {
      var new_update = req.body;
      await User.update({user_id:new_update.id},{$set:
        {user_name:new_update.user_name,
        user_email:new_update.user_email,
        user_contact:new_update.user_contact,
        user_role:new_update.user_role
      }});
      res.status(200).json({
        message:"updated"
      })
    } catch (err) {
      console.log(err);
       res.status(400).json({
         message:err.message
       })
    }
  }).run()
}
