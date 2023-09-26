const router = require("express").Router();
const remarkController=require('../controllers/remarksController');

router.get("/",remarkController.remark_all);
router.get("/:id",remarkController.getUserRemarks);
router.post("/",remarkController.remark_add);
router.delete("/:id",remarkController.remark_delete);
router.put("/:id",remarkController.remark_update);

module.exports = router;
