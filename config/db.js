import mongoose from "mongoose";
import "dotenv/config";

function connectDB() {
  mongoose.set('strictQuery',true)
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected!!!!!");
    })
    .catch((err) => {
      console.log("MongoDB Connect Failed!!!" + err);
    });
}

export default connectDB;
