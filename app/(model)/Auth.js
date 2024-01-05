import mongoose, {models, Schema} from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

}, {timestamps: true})

const User = models.User || mongoose.model("User", userSchema);
export default User;



export const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("Error connecting to MongoDB", err)
    }
}
