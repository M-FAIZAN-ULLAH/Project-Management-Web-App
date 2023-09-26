import React,{useState,useEffect} from "react";
import {getUserByRole,addProposal} from '../../../DB/db'
import { useNavigate } from "react-router-dom";



const Addproposal_idea = () => {
  const navigate = useNavigate();
  const[supervisors,setSupervisors] = useState([]);

  const[students,setStudents] = useState([]);
  
  const [title,setTitle] = useState();
  const [member1,setMember1] = useState();
  const [member2,setMember2] = useState();
  const [supervisorId,setSupervisorId] = useState();
  const [proposalFile,setProposalFile] = useState();
  const [phoneNo1,setPhoneNO1] = useState();
  const [phoneNo2,setPhoneNO2] = useState();
  // changes
  const [background,setbackground] = useState();
  const [objectives,setobjectives] = useState();
  const [complexR,setcomplexR] = useState();
  const [tools,settools] = useState();
  const [deleverables,setdeleverables] = useState();
   
  useEffect(()=>{
      getSupervisors()
  },[])

   const getSupervisors = async()=>{
        
   let data = await getUserByRole('Supervisor');
   setSupervisors(data);
   setSupervisorId(data[0]._id)

   let data2 = await getUserByRole('Student');
   setStudents(data2);
   setMember2(data2[0]._id)

   }

   const submit = async() =>{   
    try{

    let response = await addProposal(title,localStorage.getItem('Id'),member2,
    supervisorId,proposalFile,phoneNo1,phoneNo2,complexR,background,objectives,tools,deleverables); 
    navigate("/studenthome")
    console.log(response)
     if(response){
      setTitle('')
      setMember1('')
      setMember2('')
      setSupervisorId('')
      setProposalFile('')
      setPhoneNO1('')
      setPhoneNO2('')
      //changes
      setbackground('')
      setobjectives('')
      setcomplexR('')
      settools('')
      setdeleverables('')
     }
    }catch(ex){
       console.log(ex)
    }   
 
   }

  return (
    <>
     
        <div className="space-y-12 p-3 sm:space-y-16">
          <div>
            <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
              Add Propsal Form
            </h2>
            {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
 */}
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Project title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Group Member{" "}
                </label>
                <div className="mt-2">
              
                
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={member2}
                  onChange={e=>setMember2(e.target.value)}
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
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Supervisor
                </label>
               
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={supervisorId}
                  onChange={e=>setSupervisorId(e.target.value)}
                >
                   {supervisors.map((i)=>(
                  <>

                 <option value={i._id}>{i.firstName } { i.lastName}</option>
                 
                  </>
                ))}
                </select>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Propsal file
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="email"
                    id="email"
                    className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    onChange={(e) => setProposalFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 PhoneNo member 1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="your phone number"
                    onChange={(e) => setPhoneNO1(e.target.value)}
                  />
                </div>
              </div>


              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 PhoneNo member 2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="your phone number"
                    onChange={(e) => setPhoneNO2(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Give a brief description of related work/background study of your
                </label>
                <div className="mt-2">
                <textarea
                onChange={(e) => setbackground(e.target.value)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
                </div>
              </div>
              
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Project Objectives
                </label>
                <div className="mt-2">
                <textarea
              onChange={(e) => setobjectives(e.target.value)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Complex Engineering Requirements
                </label>
                <div className="mt-2">
                <textarea
              onChange={(e) => setcomplexR(e.target.value)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Tools and Technologies
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Tools and Technologies"
                    onChange={(e) => settools(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Delverables
                </label>
                <div className="mt-2">
                <textarea
              onChange={(e) => setdeleverables(e.target.value)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
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

export default Addproposal_idea;
