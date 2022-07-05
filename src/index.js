import express from "express";

const server = express();
const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
