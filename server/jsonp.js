const express = require("express");
const app = express();


app.get('/say', function(req, res) {
    let { wd, callback } = req.query
    console.log(wd) // Iloveyou
    console.log(callback) // show
    res.end(`${callback}('我不爱你')`)
})


app.listen("8000", () => {
  console.log("jsonp running at port 8000");
});