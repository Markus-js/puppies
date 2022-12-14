import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app: Express = express();

const PORT = 8080

app.use(cors());

// THIS STRING IS THE LINK TO OUR MONGODB
const url:string = process.env.MONGO_URL!;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url);
  
}

app.use(bodyParser.json());

interface PuppyInfo {
  name: string,
  breed: string,
  birthDate: string
}

const puppySchema = new mongoose.Schema<PuppyInfo>({
    name: { type: String, required: true },
    breed: {type: String, required: true},
    birthDate: {type: String, required: true}
  });

const Puppy = mongoose.model('puppies', puppySchema);

app.get('/api/puppies', cors(), async (req: Request, res: Response) => {
  const puppies = await Puppy.find();
  res.send(puppies);
});

app.get('/api/puppies/:id', async (req: Request, res: Response) => {
  const puppy = await Puppy.findById(req.params.id);
  res.send(puppy);
});

app.post('/api/puppies', async (req: Request, res: Response) => {
  const puppy = new Puppy(req.body);
  await puppy.save();
  res.send(puppy);
});

app.put('/api/puppies/:id', async (req: Request, res: Response) => {
  const puppy = await Puppy.findByIdAndUpdate(req.params.id, req.body);
  await puppy!.save();
  res.send(puppy);
});

app.delete('/api/puppies/:id', async (req: Request, res: Response) => {
  const puppy = await Puppy.findByIdAndDelete(req.params.id);
  if (!puppy) res.status(404).send('No puppy found');
  res.status(200).send();
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`))