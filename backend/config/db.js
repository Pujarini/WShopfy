import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_DB)
      .asPromise();
    console.log(`MONGO DB is connected at ${conn.host}`);
  } catch (error) {
    console.log(`error logged at ${error}`);
    process.exit(1);
  }
};

export default connectDB;
