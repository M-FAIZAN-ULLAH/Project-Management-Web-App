import axios from "axios";

const URL = `http://localhost:8000/api/`;

export const loginUser = async (email, password) => {
  try {
    let json = { email, password };
    let response = await axios.post(`${URL}users/login`, json);
    let { _id, role, firstName, lastName } = response.data;
    localStorage.setItem("Id", _id);
    console.log('_ID',_id)
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastName", lastName);
    return role;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const addUser = async (
  firstName,
  lastName,
  email,
  password,
  role,
  profileImage
) => {
  try {
    let data = new FormData();
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("password", password);
    data.append("email", email);
    data.append("role", role);
    data.append("profileImage", profileImage);

    let response = await axios.post(`${URL}users/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
   console.log('response',response.data);
     return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const users = async () => {
  try {
    let response = await axios.get(`${URL}users/`);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const getSingleUser = async (id) => {
  try {
    let response = await axios.get(`${URL}users/${id}`);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const updateUser = async (
  id,
  firstName,
  lastName,
  email,
  password,
  role,
  profileImage
) => {
  try {
    let data = new FormData();
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("password", password);
    data.append("email", email);
    data.append("role", role);
    data.append("profileImage", profileImage);

    console.log("profileImage", profileImage);
    let response = await axios.put(`${URL}users/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("DATA", response.data);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const getUserByRole = async (role) => {
  try {
    let response = await axios.get(`${URL}users/getSupervisors/${role}`);
    console.log("res", response.data);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const addProposal = async (
  title,
  member1,
  member2,
  supervisorId,
  proposalFile,
  phoneNo1,
  phoneNo2,
  // changes
  background,
  objectives,
  complexR,
  tools,
  deleverables
) => {
  try {
    let data = new FormData();
    data.append("title", title);
    data.append("member1", member1);
    data.append("member2", member2);
    data.append("supervisorId", supervisorId);
    data.append("proposalFile", proposalFile);
    data.append("uid", localStorage.getItem("Id"));
    data.append('phoneNo1',phoneNo1);
    data.append('phoneNo2',phoneNo2);
    // changes
    data.append('background',background);
    data.append('objectives',objectives);
    data.append('complexR',complexR);
    data.append('tools',tools);
    data.append('deleverables',deleverables);

    let response = await axios.post(`${URL}proposal/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("DATA", response.data);

    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};
//////////////////////////////////////////

export const getUserProposalTitles = async (supervisorId) => {
  try {
    let response = await axios.get(
      `${URL}proposal/${localStorage.getItem("Id")}`
    );
    
    // Filter the response data to get only the project titles where supervisorId matches 'x'
    let filteredData = response.data.filter(proposal => proposal.proposal.supervisorId === supervisorId);
    
    // Extract only the project titles from the filtered data
    let titles = filteredData.map(proposal => proposal.proposal.title);
    
    console.log("Filtered Titles:", titles);
    return titles;
  } catch (ex) {
    console.log("Error:", ex);
  }
};


////////////////////////////////////////
export const addPForm = async (title, telephone, email, designation, comments, supervisorId) => {
  try {
    const response = await axios.post(`${URL}pforms/`, {
      
      title,
      telephone,
      email,
      designation,
      comments,
      supervisorId,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding PForm:', error);
    throw error;
  }
};




export const getAllPForms = async () => {
  try {
    const response = await axios.get(`${URL}pforms/`);
    return response.data;
  } catch (error) {
    console.error('Error getting all PForms:', error);
    throw error;
  }
};

export const getPFormById = async (id) => {
  try {
    const response = await axios.get(`${URL}pforms/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting PForm by ID:', error);
    throw error;
  }
};

export const getPFormByTitle = async (title) => {
  try {
    const response = await axios.get(`${URL}pforms/title/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error getting PForm by title:', error);
    throw error;
  }
};



export const updatePForm = async (id, title, telephone, email, designation, comments) => {
  try {
    const response = await axios.put(`${URL}/pforms/${id}`, {
      title,
      telephone,
      email,
      designation,
      comments,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating PForm:', error);
    throw error;
  }
};

export const deletePForm = async (id) => {
  try {
    const response = await axios.delete(`${URL}/pforms/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting PForm:', error);
    throw error;
  }
};


/////////////////////////////////////////////


// export const createPform = async (pformData) => {
//   try {
//     const response = await axios.post(`${URL}setsproposals`, pformData);
//     return response.data;
//   } catch (error) {
//     // Handle error
//     console.error('Error creating pform:', error);
//     throw error;
//   }
// };

// Function to get all pforms
// export const getAllPforms = async () => {
//   try {
//     const response = await axios.get(`${URL}/getsproposals`);
//     return response.data;
//   } catch (error) {
//     // Handle error
//     console.error('Error getting all pforms:', error);
//     throw error;
//   }
// };

////////////////////////////////////////
// changes
// export const createPform = async (
//   title,
//   telephone,
//   email,
//   designation,
//   comments,
// ) => {
//   try {
//     let data = new FormData();
//     data.append("title", title);
//     data.append("telephone", telephone);
//     data.append("email", email);
//     data.append("designation", designation);
//     data.append("comments", comments);
//     data.append("uid", localStorage.getItem("Id"));
//     // changes

//     let response = await axios.post(`${URL}setsproposals`, data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     console.log("DATA", response.data);

//     return response.data;
//   } catch (ex) {
//     console.log("Error:", ex);
//   }
// };


// Function to remove a proposal
export const removeProposal = async (id) => {
  try {
    const response = await axios.delete(`${URL}proposals/${id}`);
    console.log('Proposal removed:', response.data);
    // Perform any additional actions after successful removal
  } catch (error) {
    console.error('Error removing proposal:', error);
    // Handle error case
  }
};

// Usage
removeProposal('proposal_id');




export const getUserPropsals = async () => {
  try {
    let response = await axios.get(
      `${URL}proposal/${localStorage.getItem("Id")}`
    );
    console.log("res", response.data);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};
//changes
export const getUserProposals_id = async () => {
  try {
    let response = await axios.get(`${URL}proposal/${localStorage.getItem("Id")}`);
    console.log("res", response.data);
    
    const supervisorId = response.data.supervisorId;
    const proposals = response.data.proposals;

    // Find the project title where Sid is equal to the supervisorId
    const project = proposals.find((proposal) => proposal.Sid === supervisorId);

    if (project) {
      const projectTitle = project.title;
      console.log("Project Title:", projectTitle);
      return {
        supervisorId,
        proposals,
        projectTitle
      };
    } else {
      console.log("Project not found for the given supervisorId");
    }
  } catch (ex) {
    console.log("Error:", ex);
  }
};


export const downloadFile = async (fileName) => {
  try {
    const response = await axios.post(
      `${URL}proposal/downloadFile/${fileName}`,
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const getProposals = async (status) => {
  try {
    console.log('here')
    let id  = localStorage.getItem('Id');
    const response = await axios.get(`${URL}proposal/getProposals/${status}/${id}`);
    console.log(response)
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
   
  }
};
////////////////////////////////////

export const getProposals_title = async (status) => {
  try {
    console.log('here')
    let id  = localStorage.getItem('Id');
    const response = await axios.get(`${URL}proposal/getProposals/${id}`);
    console.log(response)
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
   
  }
};


////////////////////////////////////

export const changeProposalStatus = async (id, status) => {
  try {
    let obj = { id: id, status: status };
    const response = await axios.put(`${URL}proposal/`, obj);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const addEvaluator = async (id, evid, status) => {
  try {
    let obj = { id: id, status: status, evid: evid };
    const response = await axios.put(`${URL}proposal/addEvaluator`, obj);
    return response.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const addIdea = async (title, proposalFile) => {
  try {
    let data = new FormData();
    data.append("title", title);
    data.append("proposalFile", proposalFile);
    data.append("uid", localStorage.getItem("Id"));
    let res = await axios.post(`${URL}idea/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("response:", res.data);
    return res.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};

export const getIdeas = async () => {
  try {
    let res = await axios.get(`${URL}idea/`);
    return res.data;
  } catch (ex) {
    console.log("Error:", ex);
  }
};



export const getTaskById = async (id) => {
  try {
    let res = await axios.get(`${URL}taskplan/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getTaskByProposalId = async (id) => {
  try {
    let res = await axios.get(`${URL}taskplan/proposalId/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const getIDeaTaskById = async (id) => {
  try {
    let res = await axios.get(`${URL}taskplan/idea/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const deleteTask = async (id) => {
  try {
    let res = await axios.delete(`${URL}taskplan/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const editTask = async (
  name,
  asgto,
  description,
  deadLine,
  proposalFile,
  tid
) => {
  try {
    let data = new FormData();
    data.append("name", name);
    data.append("proposalFile", proposalFile);
    data.append("asgby", localStorage.getItem("Id"));
    data.append("asgto", asgto);
    data.append("description", description);
    data.append("deadLine", deadLine);

    let res = await axios.put(`${URL}taskplan/${tid}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const singleTask = async (id) => {
  try {
    let res = await axios.get(`${URL}taskplan/singleTask/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const addRemarks = async (to, detail) => {
  try {
    let obj = { from: localStorage.getItem("Id"), to, detail };
    let res = await axios.post(`${URL}remarks/`, obj);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getRemarks = async () => {
  try {
    let res = await axios.get(`${URL}remarks/${localStorage.getItem("Id")}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};



export const deleteRemarks = async (id) => {
  try {
    let res = await axios.delete(`${URL}remarks/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getStudentTasks = async () => {
  try {
    let res = await axios.get(
      `${URL}taskplan/stdTask/${localStorage.getItem("Id")}`
    );
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const updateTaskStatus = async (id, status,file) => {
  try {
     
    
    let data = new FormData();
    data.append("solFile", file);
    data.append("status", status);


    let res = await axios.post(`${URL}taskplan/update/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};



export const updatePlanStatus = async (id, status,file) => {
  try {
     
    let planUid = localStorage.getItem('Id');
    let data = new FormData();
    data.append("solFile", file);
    data.append("status", status);
    data.append('planUid',planUid)

    let res = await axios.post(`${URL}taskplan/updatePlan/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const getAllTaskCordinator = async () => {
  try {

    let uid = localStorage.getItem('Id');
   
    let res = await axios.get(`${URL}taskplan/${uid}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getTaskHistory = async (id) => {
  try {
    let res = await axios.get(`${URL}taskplan/taskHistory/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const getAllTaskHistory = async()=>{
  try{
    let res = await axios.get(`${URL}taskplan/`);
    return res.data;
  }catch(ex){
   console.log(ex)
  }
}


export const projectTaskHistory = async(id)=>{
  try{
    console.log('OOO',id)
    let res = await axios.get(`${URL}taskplan/taskbyId/${id}`);
    
    return res.data;
  }catch(ex){
   console.log(ex)
  }
}

export const allRemarks = async (to, detail) => {
  try {
    let res = await axios.get(`${URL}remarks/`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getEvaluatorProposals = async () => {
  try {
    let uid = localStorage.getItem("Id");
    console.log(uid)
    let r = await axios.get(`${URL}proposal/getEvaluator/${uid}`);
    return r.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getProposalsTask = async () => {
  try {
    const pid = localStorage.getItem("Pid");
    let res = await axios.get(`${URL}taskplan/getProposalsTask/${pid}`);
    return res.data;
  } catch (ex) {
    console.log("Error", ex);
  }
};

export const updateTask = async (id, marks, remarks) => {
  try {
    let ob = { marks: marks, remarks: remarks };
    let res = await axios.put(`${URL}taskplan/updateTask/${id}`, ob);
    console.log(res.data)
    return res.data;
  } catch (ex) {
    console.log("rs", ex);
  }
};



export const getPlans = async () => {
  const url = "http://localhost:8000/api/taskplan/";
  const { data } = await axios.get(url);
  return data;
};

export const planTask = async(uid,planTaskId,proposalFile)=>{
  
  const url = "http://localhost:8000/api/planTask/";
  let data = new FormData();
  data.append("uid", uid);
  data.append("proposalFile", proposalFile);
  data.append("planTaskId", planTaskId);
  let res = await axios.post(`${URL}planTask/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}



export const getSubmitedTasks_Plans = async ()=>{
  let uid = localStorage.getItem('Id');
  let url = `http://localhost:8000/api/taskplan/submitedTasks/${uid}`;
  let { data } = await axios.get(url);
  return data;
}


export const getSubmitedPlans = async ()=>{
  let uid = localStorage.getItem('Id');
  let url = `http://localhost:8000/api/taskplan/submitedPlans/${uid}`;
  let { data } = await axios.get(url);
  return data;
}

//not used
export const plansSubited = async ()=>{
  let id = localStorage.getItem('Id');
  let url = `http://localhost:8000/api/planTask/${id}}`;
  let { data } = await axios.get(url);
  return data;
}


export const submitIdea = async(id,file)=>{
  let sid = localStorage.getItem('Id');
  let url = `${URL}idea/`;
  let data = new FormData();
  data.append("id", id);
  data.append("sid", sid);
  data.append("solFile", file);
  let res = await  axios.put(url,data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export const acceptedIdeas = async(id)=>{
  let uid = localStorage.getItem('Id');
  let url = `${URL}idea/get/${uid}`;
  let {data} = await  axios.get(url);
  return data;
}

export const getAllPlans = async()=>{
   
  const url = "http://localhost:8000/api/taskplan/get/";
  const { data } = await axios.get(url);
  return data;
}



export const getMembersTasks = async (m1,m2) => {
  try {

    let res = await axios.get(`${URL}taskplan/${m1}/${m2}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const updateIdea = async (id,type)=>{
 
  let url = `${URL}idea/${id}/${type}`;
  let {data} = await  axios.patch(url);
  return data;
}


export const deleteIdea = async(id)=>{
  
  let url = `${URL}idea/${id}`;
  let {data} = await  axios.delete(url);
  return data;
}



export const getAllIdeas = async()=>{ 

  let id = '123'
  let url = `${URL}idea/all/${id}`;
  let {data} = await  axios.get(url);
  return data;
}


export const getEvaluatorIdeas = async()=>{ 

  let id = localStorage.getItem('Id')
  let url = `${URL}idea/${id}`;
  let {data} = await  axios.get(url);
  return data;
}


export const cordinatorProposals = async () => {
  try {
    const status = 'accept'
    let rs = await axios.get(`${URL}proposal/getx/${status}`);
    return rs.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const adminHome = async () => {
  try {
 
    const status = 'accept2'
    let rs = await axios.get(`${URL}proposal/getx/${status}`);
    return rs.data;
  } catch (ex) {
    console.log(ex);
  }
};



export const updateFinalSatusProposal = async (id,eid) => {
  try {

    let rs = await axios.post(`${URL}proposal/${id}/${eid}`);
    return rs.data;
  } catch (ex) {
    console.log(ex);
  }
};



export const allProposal = async () => {
  try {

    let rs = await axios.get(`${URL}proposal/all`);
    console.log('all proposals', rs)
    let response = await axios.post(`${URL}proposal/calculate-averages`, {
      projectNames: rs?.data?.map(proposal => proposal?.proposal?.title)
    });
    // return {...rs.data, averages: response?.data?.averages};
    return {proposals: rs.data, averages: response?.data?.averages}
  } catch (ex) {
    console.log(ex);
  }
};


export const addTask = async (
  name,
  asgto,
  description,
  deadLine,
  proposalFile,
  proposalId
) => {
  try {
    let data = new FormData();
    data.append("name", name);
    data.append("proposalFile", proposalFile);
    data.append("asgby", localStorage.getItem("Id"));
    data.append("asgto", asgto);
    data.append("description", description);
    data.append("deadLine", deadLine);
    data.append("proposalId", proposalId);

    let res = await axios.post(`${URL}taskplan`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const addIdeaTask = async (
  name,
  asgto,
  description,
  deadLine,
  proposalFile,
  ideaId
) => {
  try {
    let data = new FormData();
    data.append("name", name);
    data.append("proposalFile", proposalFile);
    data.append("asgby", localStorage.getItem("Id"));
    data.append("asgto", asgto);
    data.append("description", description);
    data.append("deadLine", deadLine);
    data.append("ideaId", ideaId);

    let res = await axios.post(`${URL}taskplan/addIdea`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};


export const getInterims = async (
  sid1,
  sid2,
  interim) => {
  try {
    console.log('okkk')
    console.log(`taskplan/${sid1}/${sid2}/${interim}`)
    let res = await axios.get(`${URL}taskplan/${sid1}/${sid2}/${interim}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};



export const updateInterim = async(
  id,performance,range,system,design,technique,skills,domain,comments,
  progress,demonstration,conformance,innovation,presentation,organization,technical,result,integration
) =>{
   
  try {
    let  obj = {performance,range,system,design,technique,skills,domain,comments,
      progress,demonstration,conformance,innovation,presentation,organization,technical,result,integration};
     let res = await axios.put(`${URL}taskplan/interim/${id}`,obj);
    return res.data;
  } catch (ex) {
    console.log(ex);
  }

}

export const adminIdeas = async()=>{
  let url = `${URL}idea/admin/123`;
  let {data} = await  axios.get(url);
  return data;
}


export const getAdminPlans = async () => {
 
  const url = `${URL}taskplan/getAdmin`;
  const { data } = await axios.get(url);
   return data; 
};


export const addRemarksToPlans = async (id,remarks) => {
  const url = `${URL}taskplan/update/${id}`;
  const { data } = await axios.put(url,{remarks});
   return data; 
};


export const acceptedIdeasOnly = async()=>{
  let uid = localStorage.getItem('Id');
  let url = `${URL}idea/getx/${uid}`;
  let {data} = await  axios.get(url);
  return data;
}


export const createCplantoS = async (name, deadline) => {
  try {
    const data = {
      name,
      deadline,
    };
    const res = await axios.post(`${URL}cplantos/`, data);
    return res.data;
  } catch (ex) {
    console.log("Error", ex);
  }
};

export const getCplantoS = async () => {
  try {
    const res = await axios.get(`${URL}cplantos/`);
    return res.data;
  } catch (ex) {
    console.log("Error", ex);
  }
};



export const addCevaluation = async (cevaluationData) => {
  try {
    const response = await axios.post(`${URL}cevaluation/`, cevaluationData);
    return response.data;
  } catch (error) {
    console.error('Error adding Cevaluation:', error);
    throw error;
  }
};

export const getCevaluations = async () => {
  try {
    const response = await axios.get(`${URL}cevaluation/`);
    return response.data;
  } catch (error) {
    console.error('Error getting Cevaluations:', error);
    throw error;
  }
};

export const getCevaluationsByEname = async (ename) => {
  try {
    const response = await axios.get(`${URL}cevaluation/cevaluations?Ename=${ename}`);
    return response.data;
  } catch (error) {
    console.error('Error getting Cevaluations by Ename:', error);
    throw error;
  }
};

export const getCevaluationsBytitle = async (ptitle) => {
  try {
    const response = await axios.get(`${URL}cevaluation/cevaluations?ptitle=${ptitle}`);
    return response.data;
  } catch (error) {
    console.error('Error getting Cevaluations by Ename:', error);
    throw error;
  }
};

export const getCplantoSByName = async (name) => {
  try {
    const res = await axios.get(`${URL}cplantos/cplantos?name=${name}`);
    return res.data;
  } catch (error) {
    console.error('Error getting CplantoS by name:', error);
    throw error;
  }
};

export const addResult = async (resultData) => {
  try {
    const response = await axios.post(`${URL}results/`, resultData);
    return response.data;
  } catch (error) {
    console.error('Error adding Result:', error);
    throw error;
  }
};

export const getResults = async () => {
  try {
    const response = await axios.get(`${URL}results/`);
    return response.data;
  } catch (error) {
    console.error('Error getting Results:', error);
    throw error;
  }
};

export const updateResult = async (id, resultData) => {
  try {
    const response = await axios.put(`${URL}results/${id}`, resultData);
    return response.data;
  } catch (error) {
    console.error('Error updating Result:', error);
    throw error;
  }
};