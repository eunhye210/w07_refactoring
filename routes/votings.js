const express = require("express");
const router = express.Router();

const { ensureAuthenticated } = require("../middlewares/ensureAuthenticated");
const { validateVote } = require("../middlewares/validateVote");
const { createVotePage, createVote } = require("./controllers/votingController");

router.route("/new")
  .get(ensureAuthenticated, createVotePage)
  .post(validateVote, createVote);

module.exports = router;
