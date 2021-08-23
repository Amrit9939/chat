import express from "express";
import {Message} from "../../collections/collection.js";
const Fiber = require('fibers');
const {getFileStream} = require('./s3');

exports.get_img_controller = (req,res)=>{
  Fiber(async function(){
    console.log("in get img");
    const key = req.params.key;
    console.log(key);
    const readStream = await getFileStream(key);
    readStream.pipe(res)
  }).run()
}
