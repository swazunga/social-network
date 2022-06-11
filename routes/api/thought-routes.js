const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtbyId,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/:id/reactions/:reactionId").delete(deleteReaction);

router.route("/:id/reactions").post(createReaction);

router
  .route("/:id")
  .get(getThoughtbyId)
  .put(updateThought)
  .delete(deleteThought);

router.route("/").get(getAllThoughts).post(createThought);

module.exports = router;
