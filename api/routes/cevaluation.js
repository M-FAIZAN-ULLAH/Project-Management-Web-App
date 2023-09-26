// routes.js

const router = require("express").Router();
const cevaluationController = require("../controllers/cevaluationcontroller");

router.post("/", cevaluationController.addCevaluation);
router.get("/", cevaluationController.getCevaluations);
router.get("/cevaluations", cevaluationController.getCevaluationsByEname);
router.get("/cevaluations", cevaluationController.getCevaluationsBytitle); // Add this line

module.exports = router;
