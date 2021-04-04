const router = require("express").Router();
const parkRoutes = require("./park");
const googleRoutes = require("./Google");

// Book routes
router.use("/park", parkRoutes);
router.use("/search", googleRoutes);
// router.use("/park", park)

module.exports = router;
