"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const puppies_1 = require("./models/puppies");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
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
const silence = new puppies_1.Puppy({ name: 'Summer',
    breed: 'Golden Retriever',
    birthDate: '20-04-2019' })
    .save();
app.get('/all', (req, res) => {
    const allPuppies = puppies_1.Puppy.find({}).exec();
    return res.json({ allPuppies });
});
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
