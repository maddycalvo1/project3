const router = require("express").Router();
const parkRoutes = require("./park");
const googleRoutes = require("./Google");
const blogRoutes = require("./blog");

// Book routes
router.use("/park", parkRoutes);
router.use("/search", googleRoutes);
router.use("/blog", blogRoutes);
// router.use("/park", park)

module.exports = router;
