const router = require("express").Router();
const userController=require('../controllers/userController');

router.get("/",userController.user_all);
router.post("/login",userController.login_user);
router.get("/:id",userController.user_details);
router.post("/",userController.user_add);
router.delete("/:id",userController.user_delete);
router.put("/:id",userController.user_update);
router.get("/getSupervisors/:role",userController.user_supervisors);

module.exports = router;
