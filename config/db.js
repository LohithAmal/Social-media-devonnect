const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MONGODB CONNECTED......");
  } catch (error) {
    console.error(err.message);
    // exit the process if failed
    process.exit(1);
  }
};

module.exports = connectDB;
