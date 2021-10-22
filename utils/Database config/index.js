import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err.message);
        process.exit(1);
      }
      console.log("Database connected");
    }
  );
};
export default connectDB;
