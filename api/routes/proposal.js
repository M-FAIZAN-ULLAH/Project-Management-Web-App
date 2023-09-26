const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);
router.post('/:id/:eid',proposalController.updateProposalStatus)
router.post('/calculate-averages',proposalController.calculateAverages);
router.get("/all",proposalController.all);
router.get('/:uid',proposalController.user_proposals)
router.post('/downloadFile/:fileName',proposalController.downloadFile)
router.get('/getProposals/:status/:id',proposalController.getProposals)
router.get('/getProposals/:id',proposalController.getProposals_title)
router.put('/',proposalController.updateProposatStatus)
router.put('/addEvaluator',proposalController.addEvalouator)
router.get('/getEvaluator/:uid',proposalController.getEvaluatorProposals)
router.get('/adminHome',proposalController.adminHome)
router.get('/getx/:status',proposalController.get)
router.delete('/:id', proposalController.remove);



module.exports = router;
