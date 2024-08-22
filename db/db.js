import mongoose from "mongoose"
export const connectDb=async ()=>{
    try {
        const isConnectDb=await mongoose.connect(process.env.MONGODB_URI);
        if(isConnectDb)console.log("Database connected");
    } catch (error) {
        throw Error(`Unable to connect databse ${error} `);
    }
}