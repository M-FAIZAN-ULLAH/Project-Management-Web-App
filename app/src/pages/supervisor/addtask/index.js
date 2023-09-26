import React,{useEffect,useState} from "react";
import {getUserByRole,addTask,editTask,singleTask, addIdeaTask} from '../../../DB/db';

const Addtask = () => {

  const[students,setStudents] = useState([]);
  
  const [name,setName] = useState();
  const [asgto,setAsgTo] = useState();
  const [description,setDescription] = useState();
  const [deadLine,setDeadLine] = useState();
  const [proposalFile,setProposalFile] = useState();

  const asgto1 = localStorage.getItem('sid1')
  const asgto2 = localStorage.getItem('sid2')
  const proposalId = localStorage.getItem('proposalId')


  
  const editTaskId = localStorage.getItem('editTaskId')
 
  const idea = localStorage.getItem('IdeaTask');
 


  useEffect(()=>{
   
    getStudents()
   
    if(editTaskId !== '-1'){
      setEdit();
    }else{
      setAsgTo(asgto1)
    }
  },[])


  const setEdit =async () =>{
    
    let data =await singleTask(editTaskId)
    setName(data.name)
    setDeadLine(`${data.deadline}`)
    setDescription(data.description)
    setAsgTo(data.asgto)
    setProposalFile(data.proposalFile)

  }


  const getStudents = async () => {
    try {
      let data = await getUserByRole('Student');
      let filteredData = data.filter(
        user => user._id === asgto1 || user._id === asgto2
      );
      setStudents(filteredData);
    } catch (error) {
      console.log('error',error)
    }
  };
  


    const submit = async() =>{   
     try{
      let response;
      if(editTaskId  === '-1'){
        if(idea === '1'){
        
          const ideaId = localStorage.getItem('ideaId');
          response = await addIdeaTask(name,asgto1,description,deadLine,proposalFile,ideaId);
     
        }else{          
          response = await addTask(name,asgto,description,deadLine,proposalFile,proposalId);
        }
         
      }else{
        response = await editTask(name,asgto,description,deadLine,proposalFile,editTaskId);
      }
  
       if(response){
       setName('')
       setDeadLine('')
       setDescription('')
       setAsgTo('')
       setProposalFile('')
       setProposalFile('')
      }
     }catch(ex){
        console.log(ex)
     }   
  
    }

  return (
    <>
      {" "}
     
        <div className="space-y-12 p-3 sm:space-y-16">
          <div>
            <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
            Add Task Form
            </h2>
            {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p> */}

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter name here"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Assignto
                </label>
                <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={asgto}
                  onChange={e=>setAsgTo(e.target.value)}
                >
                   {students.map((i)=>(
                  <>

                 <option value={i._id}>{i.firstName } { i.lastName}</option>
                 
                  </>
                ))}
                </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Description"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  File
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    onChange={(e) => setProposalFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Deadline
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="email"
                    id="email"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Description"
                    value={deadLine}
                    onChange={e=>setDeadLine(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-x-6">
              <button
              onClick={submit}
                type="button"
                className="bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Addtask;
