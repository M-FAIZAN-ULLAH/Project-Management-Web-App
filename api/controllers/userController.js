const Users = require("../models/user");




//login

const login_user = async (req,res) =>{

  const { email, password } = req.body;
   try{
     const user = await Users.findOne({email:email,password:password});
     if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
   }catch(err){
    res.json({message:err})
   }

}


//Get All Users
const user_all = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

//Get Single User
const user_details = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Add User
const user_add = async (req, res) => {
  
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
  let sampleFile = req.files.profileImage;

  // Use the mv() method to place the file somewhere on your server
  await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  
  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    profileImage: sampleFile.name,
    role: req.body.role,
  });
  try {

    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).send({'message':error.message});
  }

};


//Delete User
const user_delete = async (req, res) => {
  try {
    const removeUser = await Users.findByIdAndDelete(req.params.id);
    res.json(removeUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update User
const user_update = async (req, res) => {
  try {
     
    let user;

    console.log('here',req.files)
    if (req.files !== null ) {
      let sampleFile = req.files.profileImage;
    // Use the mv() method to place the file somewhere on your server
    await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
     
     user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      profileImage: sampleFile.name,
      role: req.body.role,
    };

    }else{
      console.log('here11',req.files)
       user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        // profileImage: req.body.profileImage,
        role: req.body.role,
      };
    }
   
    console.log('ok',user)
    const updatedUser = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      user
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};



const user_supervisors = async (req, res) => {
  try {
  
    const users = await Users.find({role:req.params.role});
    console.log('users',users)
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  user_all,
  user_details,
  user_add,
  user_delete,
  user_update,
  login_user,
  user_supervisors
};
