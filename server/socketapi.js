// import socket_io from 'socket.io';
// import {User,Online} from '../collections/collection.js';
// import {WebApp} from 'meteor/webapp';
//
//
// const io = socket_io(WebApp.httpServer);
//
// // function sendToThisClient({id,message}){
// //   console.log(id);
// //   console.log(message);
// //   io.to(id).emit('revers-emessage', message);
// // }
//
// io.on('connection',(socket)=>{
//
//    socket.on("joined",async (user)=>{
//      console.log("new User Connected!");
//      var item = {
//        userid:user,
//        socketid:socket.id
//      }
//      await Online.insert(item);
//    });
//    socket.on('disconnect',async()=>{
//      console.log("one  socket get disconnected");
//      await Online.remove({socketid:socket.id});
//    })
//    socket.on("message",(obj)=>{
//      console.log(obj);
//      console.log(obj.id);
//      console.log(obj.file);
//      if(obj.file){
//        var string = Buffer.from(obj.file).toString('base64')
//         // console.log(string);
//        var output_data = {
//          string:string,
//          text:obj.message
//        }
//         socket.to(obj.id).emit('message',output_data);
//      }else {
//        var output_data = {
//          text:obj.message
//        }
//         socket.to(obj.id).emit('message',output_data);
//      }
//
//    })
// })
