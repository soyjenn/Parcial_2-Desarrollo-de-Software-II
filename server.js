const express = require("express");
const app = express();
const router = require("./controller");

app.use(express.json());
app.use("/tasks", router);

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
