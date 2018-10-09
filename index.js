const express = require("express");
require('./services/passport');



mongoose.connect(mongoURI);
const app = express();

require('./routes/authRoutes')(app);


app.get("/", (req, res) => {
  res.send({
    hi: "woah woah"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
