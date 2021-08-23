import express from "express";
import {Message} from "../../collections/collection.js";
const Fiber = require('fibers');
const {uploadFile} = require('./s3');


exports.save_msg_controller = (req,res)=>{
  Fiber(async function() {
    var file = req.file;
    const result = await uploadFile(file);
    console.log(result);
    // console.log(req.files);
    // console.log(req.file);
     var obj = req.body;
     if(req.file){
       obj.imgkey = result.Key;
     }
     // var string = Buffer.from(req.file).toString('base64')
     // console.log(obj);
    var reciverid = obj.reciverid;
    await Message.update({msguserid:reciverid},{
      $push:{"allmsg": obj }
    })

  }).run()
}
