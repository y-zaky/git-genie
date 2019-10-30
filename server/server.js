const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const fetch = require("node-fetch");

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/backend/:typeOfUser/:username/repos", (req, res) => {
  const githubApiCall = async () => {
    try {
      const url = `http://api.github.com/${req.params.typeOfUser}/${req.params.username}/repos`;
      const response = await fetch(url);
      const body = await response.text();
      res.send(body);
    } catch (error) {
      res.send(error.message);
    }
  };

  githubApiCall();
});
