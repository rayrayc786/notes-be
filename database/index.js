import mongoose from "mongoose";


const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to MongoDB");

    }catch(err){
            console.log("❌ Database connection error:", error.message);

        process.exit(1);
    }
}


export default dbConnect;

