import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import flightRoute from "./routes/flight.js";
import cookieParser from "cookie-parser";
import cors from "cors"


dotenv.config();


const app = express();
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected");
// });

//middlewear
app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/flightRoutes", flightRoute)


app.get("/", (req, res) => {
  res.send("Reservation API is running on Railway!");
});

app.use((err, req, res, next) =>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack: err.stack,
  });
})

// app.listen(8800, () => {
//   connect();
//    console.log("Connected to Backend.");
// });

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB");

    app.listen(8800, () => {
      console.log("🚀 Server is running on port 8800");
    });

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // optional: shut down if DB fails
  }
};

startServer();