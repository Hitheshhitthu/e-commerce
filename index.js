require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/Auth");
const productRoutes = require("./routes/Product");
const orderRoutes = require("./routes/Order");
const cartRoutes = require("./routes/Cart");
const brandRoutes = require("./routes/Brand");
const categoryRoutes = require("./routes/Category");
const userRoutes = require("./routes/User");
const addressRoutes = require('./routes/Address');
const reviewRoutes = require("./routes/Review");
const wishlistRoutes = require("./routes/Wishlist");
const { connectToDB } = require("./database/db");

// server init
const server = express();

// database connection
connectToDB();

// CORS configuration
const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:3000", // fallback if ORIGIN not set
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['X-Total-Count']
};

// enable CORS for all routes
server.use(cors(corsOptions));

// explicitly handle OPTIONS method for all routes (preflight requests)
server.options('*', cors(corsOptions));

// middlewares
server.use(express.json());
server.use(cookieParser());
server.use(morgan("tiny"));

// routeMiddleware
server.use("/auth", authRoutes);
server.use("/users", userRoutes);
server.use("/products", productRoutes);
server.use("/orders", orderRoutes);
server.use("/cart", cartRoutes);
server.use("/brands", brandRoutes);
server.use("/categories", categoryRoutes);
server.use("/address", addressRoutes);
server.use("/reviews", reviewRoutes);
server.use("/wishlist", wishlistRoutes);

// simple test route
server.get("/", (req, res) => {
  res.status(200).json({ message: 'running' });
});

// start server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server [STARTED] ~ http://localhost:${PORT}`);
});

