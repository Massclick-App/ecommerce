import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/userRoutes.js";
import userClientRoutes from "./routes/userClientRoute.js";
import locationRoutes from "./routes/locationRoute.js";
import oauthRoutes from "./routes/oauthRoutes.js";
import categoryRoutes from "./routes/categoryRoute.js";
import businessListRoutes from "./routes/businessListRoute.js";
import rolesRoutes from "./routes/rolesRoutes.js";
import enquiryRoutes from "./routes/enquiryRoute.js";
import startYourProjectRoutes from "./routes/startYourProjectRoutes.js";
import otpRoutes from "./routes/msg91Routes.js";
import phonePayRoutes from "./routes/phonePayRoute.js";
import advertismentRoutes from "./routes/advertistmentRoute.js";
import leadsDataRoutes from "./routes/leadsDataRoutes.js";
import seoRoutes from "./routes/seoRoutes.js";
import mrpRoutes from "./routes/mrpRoutes.js";
import popularSearchRoutes from "./routes/popularSearchRoutes.js";
import sitemapRoutes from "./routes/sitemapRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import advertiseRoute from "./routes/advertiseRoute.js";

dotenv.config();

const app = express();


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URL;

if (!MONGO_URI) {
  console.error("❌ MONGO_URL is missing in .env");
  process.exit(1);
}


app.use(cors({
  origin: [
    "https://massclick.in",
    "https://www.massclick.in",
    "http://localhost:3000",
    "http://localhost:3001"
  ],
  credentials: true,
}));


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


app.use("/", sitemapRoutes);
app.use("/", userRoutes);
app.use("/", oauthRoutes);
app.use("/", userClientRoutes);
app.use("/", locationRoutes);
app.use("/", categoryRoutes);
app.use("/", businessListRoutes);
app.use("/", rolesRoutes);
app.use("/", enquiryRoutes);
app.use("/", startYourProjectRoutes);
app.use("/", otpRoutes);
app.use("/", phonePayRoutes);
app.use("/", advertismentRoutes);
app.use("/", leadsDataRoutes);
app.use("/", seoRoutes);
app.use("/", mrpRoutes);
app.use("/", popularSearchRoutes);
app.use("/", reviewRoutes);
app.use("/", advertiseRoute);


app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


app.use((err, req, res, next) => {
  console.error("❌ GLOBAL ERROR:", err.message);
  res.status(500).json({ error: err.message || "Something went wrong" });
});


mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Database Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.message);
    process.exit(1);
  });