import * as mongoose from 'mongoose';

interface PuppyInfo {
  name: string,
  breed: string,
  birthDate: string
}

const PuppySchema = new mongoose.Schema<PuppyInfo>({
    name: { type: String, required: true },
    breed: {type: String, required: true},
    birthDate: {type: String, required: true}

  });

export const Puppy = mongoose.model('puppies', PuppySchema);