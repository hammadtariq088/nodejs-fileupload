const express = require("express");
const upload = require("express-fileupload");
const app = express();
app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    console.log("files", req.files);
  }
  const file = req.files.file;
  const name = file.name;
  file.mv("./src/uploads/" + name, (err) => {
    if (err) {
      // console.log(err)
      res.send({ message: "File not uploaded" });
    } else {
      res.send({ message: "File uploaded" });
    }
  });
});

app.listen(5000, () => console.log("App is listening at port 5000"));
