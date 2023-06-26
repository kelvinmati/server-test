import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("THIS IS A TEST API");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
