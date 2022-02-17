const express = require("express");
const connectDB = require("./config/db");
const app = express();

// connect database
connectDB();
// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => res.send("API RUNNING"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
