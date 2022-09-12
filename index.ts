import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

const app: Express = express();

const PORT = 8080

// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb+srv://markus:admin1234@pgp.rf5yxzi.mongodb.net/?retryWrites=true&w=majority"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url);
  
}

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('sharks', kittySchema);

const silence = new Kitten({ name: 'Silence' }).save();



app.listen(PORT, () => console.log(`app running on port ${PORT}`))