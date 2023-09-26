const Remarks = require("../models/remarks");
const User = require("../models/user");

//Get All remarks
const remark_all = async (req, res) => {
  try {
    let rs = [];
    const remarks = await Remarks.find();
    for(let i=0;i<remarks.length;i++){

      let id = remarks[i]['from'];
      let user =await User.findById(id);

      let id2 = remarks[i]['to'];
      let std =await User.findById(id2);      
      if(user && std){
        let remark =  remarks[i];
        let ob = {user,remark,std}
         rs.push(ob)
      }
      
    }

    res.json(rs);
    
  } catch (error) {
    res.json({ message: error });
  }
};


const getUserRemarks = async (req, res) => {
  try {

    const rs = [];
    const remarks = await Remarks.find({
      'from':req.params.id
    });
    
    for(let i=0;i<remarks.length;i++){

      let id = remarks[i]['to'];
      let user =await User.findById(id);
     
      if(user){
        let remark =  remarks[i];
        let ob = {user,remark}
         rs.push(ob)
      }
      
    }

    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Add remark
const remark_add = async (req, res) => {
  const remark = new Remarks({
    detail: req.body.detail,
    from: req.body.from,
    to:req.body.to
  });
  try {
    const savedremark = await remark.save();
    res.send(savedremark);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete remark
const remark_delete = async (req, res) => {
  try {
    const removeremark = await Remarks.findByIdAndDelete(req.params.id);
    res.json(removeremark);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update remark
const remark_update = async (req, res) => {
  try {
    const remark = {
      detail: req.body.detail,
      from: req.body.from,
    };

    const updatedremark = await Remarks.findByIdAndUpdate(
      { _id: req.params.id },
      remark
    );
    res.json(updatedremark);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  remark_all,
  getUserRemarks,
  remark_add,
  remark_delete,
  remark_update,
};
