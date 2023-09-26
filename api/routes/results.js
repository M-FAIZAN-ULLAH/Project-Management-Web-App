const router = require("express").Router();
const resultController = require("../controllers/resultController");

router.post("/", resultController.addResult);
router.get("/", resultController.getResult);
router.put("/:id", resultController.updateResult);

module.exports = router;
