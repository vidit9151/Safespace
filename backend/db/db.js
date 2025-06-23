import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`connected to mongo database`);
    })
    .catch((e) => {
      console.error("error connecting to database :", e);
      process.exit(1);
    })
    .finally(() => {
      console.log("function to connect to mongodb executed successfully");
    });
};
