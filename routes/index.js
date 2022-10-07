const express = require('express');
const router = express.Router();

const { indexPage } = require("./controllers/indexController");

router.route("/")
  .get(indexPage);


module.exports = router;
