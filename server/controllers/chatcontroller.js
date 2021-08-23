import express from "express";
import {Message} from "../../collections/collection.js";
const Fiber = require('fibers');

exports.chat_controller = (req,res,next)=>{
  Fiber(async function () {
    console.log('in chat');
    try {
      var id = req.body.id;
      var current = req.body.current;
      var pipeline = [
        //stage1
        {$match: { $or: [ { "msguserid":id }, { "msguserid":current } ] } },
        //stage2
        {$unwind: "$allmsg" },
        //stage3
        {$match:  { $or: [ {"allmsg.senderid":id,"allmsg.reciverid":current} , {"allmsg.senderid":current,"allmsg.reciverid":id} ] } },
        {$project: {allmsg:1} }

      ]
      var result = await Message.aggregate(pipeline);
      console.log(result);

        var arr = [];
        await result.forEach((item, i) => {
          arr.push(item)
        });
        console.log(arr);
        res.status(200).json({
          data: arr
        })


    } catch (err) {
      console.log(err);
      res.status(400).json({
        data:err.message
      })
    }
  }).run()
}
