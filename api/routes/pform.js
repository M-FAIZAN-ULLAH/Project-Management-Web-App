const router = require("express").Router();
const pformController = require('../controllers/pFormController');

router.post("/", pformController.createPForm);
router.get("/", pformController.getAllPForms);
router.get("/:id", pformController.getPFormById);
router.put("/:id", pformController.updatePForm);
router.delete("/:id", pformController.deletePForm);
router.get("/title/:title", pformController.getPFormByTitle);


module.exports = router;
