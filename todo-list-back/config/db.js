import mongoose from "mongoose"

export const connectdb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
            console.log("Mongodb connected Successfully");

    }catch(error){
        console.log("Error connecting to mongodb",error);
        process.exit(1);

    }

}