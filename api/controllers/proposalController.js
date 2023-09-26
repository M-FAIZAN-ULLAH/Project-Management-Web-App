const Proposal = require("../models/proposal");
const Cevaluation = require("../models/Cevaluation");

const  User = require("../models/user");
const fs = require('fs');
const path = require('path');
const Enumerable = require('linq');

 const add = async (req, res) =>{
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
      let sampleFile = req.files.proposalFile;
    
      // Use the mv() method to place the file somewhere on your server
      await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
      
      const proposal = new Proposal({
        title: req.body.title,
        member1: req.body.member1,
        member2: req.body.member2,
        supervisorId: req.body.supervisorId,
        proposalFile: sampleFile.name,
        uid: req.body.uid,
        status:'pending',
        phoneNo1:req.body.phoneNo1,
        phoneNo2:req.body.phoneNo2,
        //changes
        background:req.body.background,
        objectives:req.body.objectives,
        complexR:req.body.complexR,
        tools:req.body.tools,
        deleverables:req.body.deleverables
      });

      
   console.log('proposal',proposal)
      try {
    
        const response = await proposal.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}


const getEvaluatorProposals = async (req, res) => {
  try {

   
    let rs = [];
    const uid = req.params.uid;
    const proposals = await Proposal.find(
     {
      'evid':uid,
     }
    );
    
   
    for (let i = 0; i < proposals.length; i++) {
      let id = proposals[i]['supervisorId'];
      let stdId1 =  proposals[i]['member1'];
      let stdId2 =  proposals[i]['member2'];
    
       let std1 = await User.findById(stdId1)
       let std2 = await User.findById(stdId2) 
      let user = await User.findById(id);
      
      
      if (user && std1 && std2) {
        let proposal = proposals[i];
        let data = { proposal, user,std1,std2 };
        rs.push(data);            
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
}

const user_proposals = async (req, res) => {
    try {
      let rs = [];
      const uid = req.params.uid;
      const proposals = await Proposal.find(
       {
        $or: [
          { 'member1': uid },
          { 'member2': uid },
          {'supervisorId':uid},
        ]
       }
      );
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
        let user = await User.findById(id);

        if (user && std1 && std2) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2 };
          rs.push(data);
         
          
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }



  const all = async (req, res) => {
    try {
      let rs = [];
     
      const proposals = await Proposal.find({status:'accept2'});
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
        let user = await User.findById(id);

        if (user && std1 && std2) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2 };
          rs.push(data);
         
          
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }
 
  
  const downloadFile = (req, res) => {
    const fileName = req.params.fileName; // get fileName from URL params
    const filePath = path.join(__dirname, '../uploads', fileName);
  
    fs.readFile(filePath, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
      res.setHeader('Content-Type', 'text/plain');
      res.send(data);
    });
  };
  


  const getProposals = async (req,res)=>{
    try{
      let {id,status} = req.params;
      let rs = [];
      console.log(id, status)
      const pending = await Proposal.find({'status':status,'supervisorId':id});
      for (let i = 0; i < pending.length; i++) {
        let stdId1 =  pending[i]['member1'];
        let stdId2 =  pending[i]['member2'];
       
         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
      

        if (std1 && std2) {
          let proposal = pending[i];
          let data = { proposal, std1,std2 };
          rs.push(data);
           
        }
      }
      res.json(rs)

    }catch(ex){
      res.json(ex)
    }
  }

  const getProposals_title = async (req,res)=>{
    try{
      let {id,status} = req.params;
      let rs = [];
      console.log(id, status)
      const pending = await Proposal.find({'supervisorId':id});
      for (let i = 0; i < pending.length; i++) {
        let stdId1 =  pending[i]['member1'];
        let stdId2 =  pending[i]['member2'];
       
         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
      

        if (std1 && std2) {
          let proposal = pending[i];
          let data = { proposal, std1,std2 };
          rs.push(data);
           
        }
      }
      res.json(rs)

    }catch(ex){
      res.json(ex)
    }
  }


  const updateProposatStatus = async (req,res)=>{
    try{
      let {id,status} = req.body;
      const pending = await Proposal.findByIdAndUpdate(
        { _id: id },
        {status:status}
      );
      res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }


  const addEvalouator = async (req,res)=>{
    try{
      let {id,evid,status} = req.body;
      const pending = await Proposal.findByIdAndUpdate(
        { _id: id },
        {
          status:status,
          evid:evid
        }
      );
      res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }


  const adminHome = async (req,res)=>{
    
    try {
     let rs = [];
      const proposals = await Proposal.find({status:'accept2'})
     
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];
        let evid = proposals[i]['evid'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
         let user = await User.findById(id);
         let ev  = await User.findById(evid);

        if (user && std1 && std2 && ev) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2,ev };
          rs.push(data);
              
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }


  const getAll = async (req, res) => {
   
    try {
     
      const proposals = await Proposal.find();
      res.json(proposals);
    } catch (error) {
      res.json({ message: error });
    }
  };

  const get = async (req, res) => {
    try {
      console.log('sss', req.params.status);
      
      let rs = [];
      const proposals = await Proposal.find({ status: req.params.status });
      
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 = proposals[i]['member1'];
        let stdId2 = proposals[i]['member2'];
        let evid = proposals[i]['evid'];
        
        let std1 = await User.findById(stdId1);
        let std2 = await User.findById(stdId2);
        let user = await User.findById(id);
        let ev = evid ? await User.findById(evid) : null; // Check if evid exists before fetching data
  
        if (user && std1 && std2) {
          let proposal = proposals[i];
          let data = { proposal, user, std1, std2, ev };
          rs.push(data);
        }
      }
      
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  };


  
  const updateProposalStatus = async (req,res)=>{
    try{
     
      let {id,eid} = req.params;
      const pending = await Proposal.findByIdAndUpdate(
        { _id: id },
        {status:'accept2',evid:eid},
        {new:true},
      );

    res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }

  const remove = async (req, res) => {
    try {
      const proposalId = req.params.id;
      const proposal = await Proposal.findByIdAndDelete(proposalId);
  
      if (!proposal) {
        return res.status(404).json({ message: 'Proposal not found' });
      }
  
      // Delete the associated file from the server
      const filePath = path.join(__dirname, '../uploads', proposal.proposalFile);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
      });
  
      res.json({ message: 'Proposal deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const calculateAverages = async(req, res) => {
    const {projectNames} = req.body;
    let averages = projectNames?.map(name => {return {ptitle: name}});
    console.log(averages)
    const proposals = await Cevaluation.find({
      ptitle: {
        $in: projectNames
      }
    })
    for(let projectName of projectNames){
      const foundProposals = proposals?.filter(proposal => proposal?.ptitle === projectName)
      let projectS = 0;
      let projectI = 0;
      let projectMS = 0;
      let indivisualTW = 0;
      let fypDS = 0;
      for(let foundProposal of foundProposals){
        projectS += parseFloat(foundProposal.projectS);
        projectI += parseFloat(foundProposal.projectS);
        projectMS += parseFloat(foundProposal.projectS);
        indivisualTW += parseFloat(foundProposal.indivisualTW);
        fypDS += parseFloat(foundProposal.fypDS);
      }
      const currentAverage = averages.find(average => average?.ptitle === projectName)
      currentAverage.average = (projectS + projectI + projectMS + indivisualTW + fypDS) /200
    }
    return res.status(200).json({averages})
  }



  
module.exports = {
    add,
    user_proposals,
    downloadFile,
    getProposals,
    updateProposatStatus,
    addEvalouator,
    adminHome,
    getEvaluatorProposals,
    getAll,
    get,
    updateProposalStatus,
    all,
    remove,
    getProposals_title,
    calculateAverages
}