"use strict";
// import dotenv from 'dotenv';
// import * as mongoose from 'mongoose';
// import { Puppy } from './models/puppies'
// dotenv.config();
// const url:string = process.env.MONGO_URL!;
// main().then(()=>console.log('connected')).catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(url);
// }
// mongoose.connect(
//   url,
//   (err) => {
//    if(err) console.log(err) 
//    else console.log("mongdb is connected");
//   }
// );
// const query = (cb: (arg0: any) => any) => async (params?:any) => {
//   await mongoose.connect(url);
//   console.log("MongoDB connected");
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//   try {
//       const result = await Promise.race([
//           cb(params),
//           new Promise((_, rej) => setTimeout(() => rej(new Error("Timed out")), 10000))
//       ]);
//       await mongoose.connection.close();
//       console.log("MongoDB disconneted");
//       return result;
//   } catch(e) {
//       await mongoose.connection.close();
//   }
// }
// export const getAll = query(() => Puppy.find({}).exec());
// export const postPuppy = query((body) => new Puppy(body).save())
