import mongoose from "mongoose";

interface LickParams{
    lick: String,
    name: String,
    click: Number
}


const LickShema = new mongoose.Schema({
    lick: {type:String, required: true},
    name: {type:String, required: true},
    click: {type:String, required: true}
})

export default mongoose.model<LickParams>("Lick", LickShema)