import mongoose from "mongoose";

export const dbConnect =()=>{
    mongoose.connect('mongodb://localhost:27017/JOB_SEEKING').then(()=>{
        console.log("db Connected");
    })
    .catch((err)=>{
console.log(`munna err aa gya ${err}`)
    })
}