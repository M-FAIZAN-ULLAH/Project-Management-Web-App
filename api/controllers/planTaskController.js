const PlansTask = require("../models/PlansTask");
const TaskPlan = require('../models/task_plan');
const User = require('../models/user');
const Idea = require('../models/idea');


const add = async (req, res) =>{
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
     
      let sampleFile = req.files.proposalFile;
    

      await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
      
      const proposal = new PlansTask({   
        proposalFile: sampleFile.name,
        uid: req.body.uid, 
        planTaskId:req.body.planTaskId
      });

      

      try {
    
        const response = await proposal.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}


const get = async (req, res) =>{

  try{
 
   const {id,type} = req.params;
   let rs = [];
   const plan = await PlansTask.find();

   for(let i=0;i<plan.length;i++){
    
    let tid = plan[i]['planTaskId']
    let task = await TaskPlan.findById(tid)
   
   if(task){
      let asgby = task['asgby'];
      if(asgby === id){  
        let uid = task['asgto'];
        let user = await User.findById(uid);
       
          let obj = {ob1:plan[i],ob2:task,ob3:user}
          rs.push(obj)
       
      }
    }

   }
   
   res.json(rs);
  }catch(error){
    res.status(400).send({'message':error.message});
  }

}






module.exports = {
    add,
    get,
   
}