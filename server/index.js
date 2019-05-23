const express = require("express");
const app = express();
app.use(express.json());
const {getChihuahuas, postChihuahua, editChihuahua, deleteChihuahua} = require('./controller')


//endpoints

app.get("/api/chihuahuas", getChihuahuas)
app.post("/api/chihuahuas", postChihuahua)
app.put("/api/chihuahua/:name", editChihuahua)
app.delete("/api/chihuahua/:name", deleteChihuahua)

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);})
