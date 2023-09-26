const router = require("express").Router();
const projectController=require('../controllers/projectController');

router.get("/",projectController.project_all);
router.get("/:id",projectController.project_details);
router.post("/",projectController.project_add);
router.delete("/:id",projectController.project_delete);
router.put("/:id",projectController.project_update);

module.exports = router;
