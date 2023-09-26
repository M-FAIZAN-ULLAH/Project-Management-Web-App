const router = require("express").Router();
const cplantoSController = require("../controllers/cplantosController");

router.post("/", cplantoSController.createCplantoS);
router.get("/", cplantoSController.getCplantoS);
router.get("/cplantos", cplantoSController.getCplantoSByName);

module.exports = router;
