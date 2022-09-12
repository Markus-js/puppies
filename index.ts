import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { Puppy } from './models/puppies'
import { getAll, postPuppy } from './db'
dotenv.config();

const app: Express = express();

const PORT = 8080

// // THIS STRING IS THE LINK TO OUR MONGODB
// const url:string = process.env.MONGO_URL!;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(url);
  
// }

// const kittySchema = new mongoose.Schema({
//   name: String
// });

// const Kitten = mongoose.model('sharks', kittySchema);

// const silence = new Puppy({ name: 'Summer',
//                             breed: 'Golden Retriever',
//                             birthDate: '20-04-2019' })
//                             .save();

app.get('/all', async(req, res)=> {
  const allPuppies = await getAll()
  return res.json({allPuppies})
})

app.post("/", async (req, res) => {
  const newPuppy = await postPuppy(req.body);
  console.log(req.body)
  return res.json({newPuppy})
})

app.listen(PORT, () => console.log(`app running on port ${PORT}`))