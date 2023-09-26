const router = require("express").Router();
const taskPlanController=require('../controllers/planTaskController');

router.post("/",taskPlanController.add);
router.get("/:id/:type",taskPlanController.get);

module.exports = router;
