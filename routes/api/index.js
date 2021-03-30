const router = require("express").Router();
const parkRoutes = require("./park");
const googleApi = require("./googleapi.js");

// Book routes
router.use("/park", parkRoutes);
router.use("/park", park)

module.exports = router;
