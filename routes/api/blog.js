const router = require("express").Router();
const blogsController = require("../../controllers/blogsController");


router.route("/")
  .get(blogsController.findAll)
  .post(blogsController.create);


router
  .route("/:id")
  .get(blogsController.findById)
  .put(blogsController.update)
  .delete(blogsController.remove);

module.exports = router;