const router = require("express").Router();
const parkRoutes = require("./park");

// Book routes
router.use("/park", parkRoutes);
// router.use("/park", park)

module.exports = router;
