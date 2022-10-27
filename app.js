const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  //   slackUsername": String, "backend": Boolean, "age": Integer, "bio": String
  res.json({
    slackUsername: "code_vic1️⃣",
    backend: true,
    age: 24,
    bio: "my name is Victor Ehimigbai i am a full stack developer currently in the HNGi9 program",
  });
});

app.listen(8080, () => {
  console.log("connected to server sucessfully on port 5000");
});
