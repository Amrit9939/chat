import express from "express";
import {User} from "../../collections/collection.js";
const Fiber = require('fibers');

exports.create_controller = (req,res,next)=>{
  console.log("in create");
  Fiber(async function(){
   try {
     var new_user = req.body;
     await User.insert(new_user);
     return res.status(200).json({
       "message":"user inserted"
     });
   } catch (err) {
      console.log(err);
      res.status(500).json({
        "message":err.message
      })
   }
  }).run();
}
