import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./DB/index.js";
import { config } from "./config/env.js";

dotenv.config({
  path: "./.env",
});


connectDB()
.then(() => {
    app.listen(config.port || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


