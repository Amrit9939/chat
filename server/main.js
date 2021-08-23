import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';
import express from 'express';
import WebSocket from 'ws';
// import socket_io from 'socket.io';
const Fiber = require('fibers');
import {User} from '../collections/collection.js';

const app = express();

// const io = socket_io(WebApp.httpServer);
//
// io.on('connection',(socket)=>{
//   console.log(socket.id);
// })


console.log("yes");

const server = require('http').createServer(WebApp.httpServer);



const wss = new WebSocket.Server({server:server});



wss.on('connection', function connection(ws) {
  console.log("A new Client Connected");
  ws.send("welcome new Client!");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('got your message'+ message);
  });
});

// server.listen("3000",()=>{
//   console.log("running on 3000");
// })





app.post('/create-user',(req,res)=>{
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
})

app.post("/update-user",(req,res)=>{
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
})


WebApp.connectHandlers.use(app);




Meteor.publish('all_users',()=>{
  return User.find({});
})
