const Idea = require("../models/idea");
const User = require('../models/user');

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
      
      const idea = new Idea({
        title: req.body.title,
        proposalFile: sampleFile.name,
        uid: req.body.uid,
      });

      console.log('idea',idea)
      try {
    
        const response = await idea.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}

const getIdeas = async (req, res) => {
  try {
    const pending = await Idea.find({
      $or: [
        { sid: { $exists: false } }, 
        { sid: null },     
      ]
    });

    res.json(pending);
  } catch (ex) {
    res.json(ex);
  }
}



  const submitIdea = async(req,res)=>{
    try{
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
     
      let sampleFile = req.files.solFile;
    
      await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
      let {id,sid} = req.body;
      const idea = await Idea.findByIdAndUpdate(
        id,
        {sid:sid,
         solFile:sampleFile.name     
        },

        { new: true },
        );
      res.json(idea);
    }catch(ex){
      res.json(ex);
    }
  }


  const getAcceptedIdeas = async (req, res) => {
    try {

     
      const { uid } = req.params;
      const rs = [];
      const ideas = await Idea.find({ uid: uid });
     
      for (let i = 0; i < ideas.length; i++) {
        const sid = ideas[i].sid; 
        const user = await User.findById(sid);
        if (user) {
          const obj = { 'ob1': ideas[i], 'ob2': user };
          rs.push(obj);
          
        }
      }
  
      res.json(rs);
    } catch (ex) {
      res.json(ex);
    }
  }
  


  const getAcceptedIdeasOnly = async (req, res) => {
    try {

     
      const { uid } = req.params;
      const rs = [];
      const ideas = await Idea.find({ uid: uid,status:'ok' });
     
      for (let i = 0; i < ideas.length; i++) {
        const sid = ideas[i].sid; 
        const user = await User.findById(sid);
        if (user) {
          const obj = { 'ob1': ideas[i], 'ob2': user };
          rs.push(obj);
          
        }
      }
  
      res.json(rs);
    } catch (ex) {
      res.json(ex);
    }
  }
  
  const deleteIDea = async (req, res) => {
    try {
      const { id } = req.params;
      const idea = await Idea.findByIdAndDelete(id);
      res.json(idea);
    } catch (ex) {
      res.json(ex);
    }
  }


  const updateIDea = async (req, res) => {
    try {
      const { id,type } = req.params;
      let obj 
      if(type === '0'){
         obj = {status:'ok'}
      }else{
        obj = {eid:type}
      }

      const idea = await Idea.findByIdAndUpdate(
        id,
        obj,
        { new: true },
        )
      res.json(idea);
    } catch (ex) {
      res.json(ex);
    }
  }


  const getAll = async (req, res) => {
    try {
      const idea = await Idea.find({status:'ok'});
      res.json(idea);
    } catch (ex) {
      res.json(ex);
    }
  }



  const getByEid = async (req, res) => {
    try {
     const {eid} = req.params;
     const rs = [];
     const idea = await Idea.find({eid:eid})
    for(let i=0;i<idea.length;i++){
         let id = idea[i]['sid']
         let user = await User.findById(id)
         if(user){
          rs.push({'idea':idea[i],'user':user})
         }
    }
    res.json(rs);
    } catch (ex) {
      res.json(ex);
    }
  }


  const getAdminIdeas = async (req, res) => {
    try {   
      
      const rs = [];
      const ideas = await Idea.find();   
      for (let i = 0; i < ideas.length; i++) {
        const sid = ideas[i].sid; 
        const user = await User.findById(sid);
        if (user) {
          const obj = { 'ob1': ideas[i], 'ob2': user };
          rs.push(obj);
          
        }
      }
  
      res.json(rs);
    } catch (ex) {
      res.json(ex);
    }
  }


module.exports = {
    add,
    getIdeas,
    submitIdea,
    getAcceptedIdeas,
    deleteIDea,
    updateIDea,
    getAll,
    getByEid,
    getAdminIdeas,
    getAcceptedIdeasOnly
}