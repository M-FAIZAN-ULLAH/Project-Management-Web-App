const TaskPlan = require("../models/task_plan");
const User = require("../models/user");
const Proposal = require("../models/proposal");



const taskPlan_all = async (req, res) => {
  try {
   
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find({asgby:uid});

    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgby"];
      let user = await User.findById(id);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const taskPlan_details = async (req, res) => {
  try {

    let rs = [];
    const { uid } = req.params;
    const taskPlans = await TaskPlan.find({ asgby: uid });

    for (let i = 0; i < taskPlans.length; i++) {
      let proposal = null;
      let id = taskPlans[i]["asgto"];
      let pid = taskPlans[i]['proposalId'];
      let user = await User.findById(id);

      if (pid) {
        let pr = await Proposal.findById(pid);
        if (pr) {
          proposal = pr;
        }
      }

      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user, proposal };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};


const taskPlan_add = async (req, res) => {
  console.log(req.body);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
  let sampleFile = req.files.proposalFile;

  // Use the mv() method to place the file somewhere on your server
  await sampleFile.mv("./uploads/" + sampleFile.name, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  const taskPlan = new TaskPlan({
    name: req.body.name,
    asgto: req.body.asgto,
    asgby: req.body.asgby,
    description: req.body.description,
    file: sampleFile.name,
    status: "pending",//accept
    proposalId: req.body.proposalId,
    deadline: Date(req.body.deadline),
    // type: req.body.type,
    marks: req.body.marks,
    remarks: req.body.remarks,
  });
  try {
    const savedtaskPlan = await taskPlan.save();

    res.send(savedtaskPlan);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const taskPlan_delete = async (req, res) => {
  try {
    const removetaskPlan = await TaskPlan.findByIdAndDelete(req.params.id);
    res.json(removetaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskPlan_update = async (req, res) => {
  try {
    const { id } = req.params;
    const taskplan = { status: "completed",interim:req.body.interim };
    const updatedPlan = await TaskPlan.findByIdAndUpdate({ _id: id }, taskplan);
    await updatedPlan.save();
    res.json("updated").status(200);
  } catch (error) {}
};

const singleTask = async (req, res) => {
  try {
    let id = req.params.id;
    const taskPlan = await TaskPlan.findById(id);
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getProposalTask = async (req, res) => {
  try {
    let rs = [];
    let id = req.params.id;
    const taskPlan = await TaskPlan.find({ proposalId: id });
    for (let i = 0; i < taskPlan.length; i++) {
      let id = taskPlan[i]["asgto"];
      let user = await User.findById(id);
      if (user) {
        let ob = taskPlan[i];
        let jsn = { user, ob };
        rs.push(jsn);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};



const changeTaskStatus = async (req, res) => {
  try {
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
   
    let sampleFile = req.files.solFile;
  
    await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const { id } = req.params;
    const { status } = req.body;

    const updatedtaskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { status: status ,
        solFile:sampleFile.name     
        },
        { new: true },

    );
    res.json(updatedtaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskHistory = async (req, res) => {
  try {
    const { id } = req.params;

    let rs = [];
    const taskPlans = await TaskPlan.find({ _id: id });

    for (let i = 0; i < taskPlans.length; i++) {
      let asgto = taskPlans[i]["asgto"];

      let user = await User.findById(asgto);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
        console.log(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};


const getAllTaskHistory = async (req, res) => {
  try {
   
    
    let rs = [];
    const taskPlans = await TaskPlan.find();
    for (let i = 0; i < taskPlans.length; i++) {
      let asgto = taskPlans[i]["asgto"];
       if(asgto !== '-1'){
        let user = await User.findById(asgto);
        if (user) {
          let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
          console.log(data);
        }
       }

    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    console.log('ok');
    let { remarks, marks } = req.body;
    let {id} = req.params;

    console.log(remarks,marks)
    console.log(id)
    
    const taskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { remarks: remarks, marks: marks },
      { new: true }
    );
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};






const taskPlans = async (req, res) => {
  try {
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find({asgto:uid});
    
    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgby"];
      let user = await User.findById(id);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }

   // console.log(rs)
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const studentTask = async (req, res) => {
  try {
   
    let rs = [];
    let id = req.params.id;
    const taskPlans = await TaskPlan.find({
      asgto: id,
      status: "pending",
    });
   
    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgby"];
      let user = await User.findById(id);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }

    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};



const getPlans = async (req, res) => {
  try {
    const taskPlans = await TaskPlan.find({
      $or: [
        {asgto:'-1'},
        { planUId: null },
        { planUId: { $exists: false } }
      ]
    });
    res.json(taskPlans);
  } catch (error) {
    res.json({ message: error });
  }
};





const submitedTasks = async (req, res) => {
  try {
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find({asgby:uid});
    
    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgto"];
      if(id !== '-1'){
        let user = await User.findById(id);
        if (user) {
          let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
        }
      }
     
    }

   // console.log(rs)
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};


const changePlanStatus = async (req, res) => {
  try {
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
   
    let sampleFile = req.files.solFile;
  
    await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const { id } = req.params;
    const { status } = req.body;

    const updatedtaskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { status: status ,
        solFile:sampleFile.name,
        planUid:req.body.planUid,     
        },
        { new: true },

    );
    res.json(updatedtaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};



const submitedPlans = async (req, res) => {
  try {
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find({asgby:uid,asgto:'-1'});
    
    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["planUid"];  
         let user = null;  
         user = await User.findById(id);
        // if (user) {
          let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
      
      // }
     
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};



const getStdentsTasks = async (req, res) => {
  try {
    const { m1, m2 } = req.params;
    const taskPlans = await TaskPlan.find({
      $or: [
        { asgto: m1 },
        { asgto: m2 }
      ]
    }).lean();

    const userIds = taskPlans.map(taskPlan => taskPlan.asgto);
    const users = await User.find({ _id: { $in: userIds } }).lean();

    const rs = taskPlans.map(taskPlan => {
      const user = users.find(user => user._id.toString() === taskPlan.asgto.toString());
      if (user) {
        return { taskPlan, user };
      }
    }).filter(data => data);

    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};


const getTaskHistoryByID = async (req, res) => {
  try {
    let {id} = req.params;
    let rs = [];
    const taskPlans = await TaskPlan.find({proposalId:id});
    for (let i = 0; i < taskPlans.length; i++) {
      let asgto = taskPlans[i]["asgto"];
       if(asgto !== '-1'){
        let user = await User.findById(asgto);
        if (user) {
          let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
          console.log(data);
        }
       }

    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};


const ideatask_add = async (req, res) => {
  
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let sampleFile = req.files.proposalFile;
  await sampleFile.mv("./uploads/" + sampleFile.name, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  const taskPlan = new TaskPlan({
    name: req.body.name,
    asgto: req.body.asgto,
    taskby:req.body.taskby,
    description: req.body.description,
    asgby:req.body.asgby,
    file: sampleFile.name,
    status: "pending",
    ideaId: req.body.ideaId,
    deadline: Date(req.body.deadline),   
  });
  try {
    const savedtaskPlan = await taskPlan.save();

    res.send(savedtaskPlan);
  } catch (error) {
    res.status(400).send(error.message);
  }
};



const getTaskByIdeaID = async (req, res) => {
  try {

    let rs = [];
    const { id } = req.params;
    const taskPlans = await TaskPlan.find({ ideaId: id });

    for (let i = 0; i < taskPlans.length; i++) {
     
      let id = taskPlans[i]["asgto"];
      let user = await User.findById(id);

      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};


const proposalTasks = async (req, res) => {
  try {

    let rs = [];
    const { id } = req.params;
    const taskPlans = await TaskPlan.find({ proposalId: id });

    for (let i = 0; i < taskPlans.length; i++) {
      let proposal = null;
      let id = taskPlans[i]["asgto"];
      let pid = taskPlans[i]['proposalId'];
      let user = await User.findById(id);

      if (pid) {
        let pr = await Proposal.findById(pid);
        if (pr) {
          proposal = pr;
        }
      }

      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user, proposal };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};




const getInterims = async (req, res) => {
  try {
    const { sid1, sid2,interim } = req.params;
    const taskPlans = await TaskPlan.find({
      $or: [
        { planUid: sid1 },
        { planUid: sid2 }
      ],
      $and:[
        {interim:interim}
      ],
    }).lean();
    
    console.log('data',taskPlans);
    
    const userIds = [sid1,sid2]
    const users = await User.find({ _id: { $in: userIds } }).lean();

    const rs = taskPlans.map(taskPlan => {
      const user = users.find(user => user._id.toString() === taskPlan.planUid.toString());
      if (user) {
        return { taskPlan, user };
      }
    }).filter(data => data);

    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};



const updateInterim = async(req,res)=>{
  try{
  
    const {id} = req.params;
    const obj = {
      performance,range,system,design,technique,skills,domain,comments,
      progress,demonstration,conformance,innovation,presentation,organization,technical,result,
      integration
    } = req.body;
    
    const plan = await TaskPlan.findByIdAndUpdate({_id:id},obj)
   
    res.json(plan);

  }catch(ex){
    res.json(ex.message)
  }

}


const adminPlans = async (req, res) => {
  try {
    let rs = [];

    const taskPlans = await TaskPlan.find({asgto:'-1'});
    
    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["planUid"];  
         let user = null;  
         user = await User.findById(id);
        // if (user) {
          let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
      
      // }
     
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};


const addRemarksToPlans = async (req, res) => {
  try {
    
  
    const { id } = req.params;
    const { remarks } = req.body;

    const updatedtaskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { remarks: remarks},
      { new: true },

    );
    res.json(updatedtaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};


module.exports = {
  taskPlan_all,
  taskPlan_details,
  taskPlan_add,
  taskPlan_delete,
  taskPlan_update,
  singleTask,
  studentTask,
  changeTaskStatus,
  taskHistory,
  getProposalTask,
  updateTask,
  getAllTaskHistory,
  taskPlans,
  submitedTasks,
  getPlans,
  changePlanStatus,
  submitedPlans,
  getStdentsTasks,
  getTaskHistoryByID,
  ideatask_add,
  getTaskByIdeaID,
  proposalTasks,
  getInterims,
  updateInterim,
  adminPlans,
  addRemarksToPlans
};
