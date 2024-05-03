const express = require("express");
const router = express.Router();

const { getTotalCount, getDataByIndexAndCount,getDataById } = require("../controller/Control.js");

router.get("/total-records", getTotalCount);

router.get("/list", getDataByIndexAndCount);

router.get("/:id", getDataById);

module.exports = router;