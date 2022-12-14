"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose = __importStar(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, cors_1.default)());
// THIS STRING IS THE LINK TO OUR MONGODB
const url = process.env.MONGO_URL;
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect(url);
    });
}
app.use(body_parser_1.default.json());
const puppySchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    birthDate: { type: String, required: true }
});
const Puppy = mongoose.model('puppies', puppySchema);
app.get('/api/puppies', (0, cors_1.default)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puppies = yield Puppy.find();
    res.send(puppies);
}));
app.get('/api/puppies/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puppy = yield Puppy.findById(req.params.id);
    res.send(puppy);
}));
app.post('/api/puppies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puppy = new Puppy(req.body);
    yield puppy.save();
    res.send(puppy);
}));
app.put('/api/puppies/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puppy = yield Puppy.findByIdAndUpdate(req.params.id, req.body);
    yield puppy.save();
    res.send(puppy);
}));
app.delete('/api/puppies/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puppy = yield Puppy.findByIdAndDelete(req.params.id);
    if (!puppy)
        res.status(404).send('No puppy found');
    res.status(200).send();
}));
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
