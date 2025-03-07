const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const articleRouter = require("./article/router")

router.use("/items", itemsRouter);
router.use("/articles", articleRouter)

/* ************************************************************************* */

module.exports = router;
