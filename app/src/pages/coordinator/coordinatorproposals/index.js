// import React, { useEffect, useState } from "react";
// import {
//   getAllIdeas,
//   updateIdea,
//   getUserByRole,
//   cordinatorProposals,
//   updateFinalSatusProposal,
//   removeProposal,
// } from "../../../DB/db";

// import { useNavigate } from "react-router-dom";

// const CoordinatorProposals = () => {

// ////////////////////////////

// const handleDelete = (id) => {
//   // Call the removeProposal function with the ID of the selected data
//   removeProposal(id)
//     .then(() => {
//       console.log('Data deleted successfully.');
//       // Perform any additional actions after successful deletion
//     })
//     .catch((error) => {
//       console.error('Error deleting data:', error);
//       // Handle error case
//     });
// };

// const handleKeyPress = (event) => {
//   if (event.key === 'Enter') {
//     const selectedId = 'your_selected_id'; // Replace with the actual ID of the selected data
//     handleDelete(selectedId);
//   }
// };


// ////////////////////////////

 
//   const navigate = useNavigate();

//   const [data, setData] = useState([]);
//   const [proposal, setProposal] = useState([]);
//   const [evalator, setEvalator] = useState([]);
//   const [evid, setEvid] = useState();

//   useEffect(() => {
//     load();
//     getProjects();  
//   }, []);

//   const getProjects = async () => {
//     let rs = await getAllIdeas();
//     let rv = await cordinatorProposals();
    
//     rs = rs.filter(item => item.eid === null  || item.eid === undefined);
    
//     setData(rs);
//     setProposal(rv);
   
//   };
  

//   const load = async () => {
//     let rs = await getUserByRole("Evaluator");
//     setEvalator(rs);
//     setEvid(rs[0]._id);
//     console.log('Evaluator',rs)
//   };

//   const accept = async (id) => {
//     const res = await updateIdea(id, evid);
//     load();
//     getProjects();  
//   };


//   const submit = async(id)=>{
   
//     let r = await updateFinalSatusProposal(id,evid)
    
//     load();
//     getProjects();  
//   }

//   return (
//     <>
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className=" text-center text-2xl mt-6 font-semibold leading-6 text-gray-900">
//               Proposals 
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {data.map((i) => (
//           <>
//             <div className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800">
           
//               <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
//                 <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
//                   {i?.title} 
//                 </p>

//                 <label
//                   htmlFor="location"
//                   className="block text-sm font-medium leading-6 text-white"
//                 >
//                   Evaluator
//                 </label>
//                 <select
//                   className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={evid}
//                   onChange={(e) => setEvid(e.target.value)}
//                 >
//                   {evalator.map((y) => (
//                     <>
//                       <option value={y._id}>
//                         {y.firstName} {y.lastName} 
//                       </option>
//                     </>
//                   ))}
//                 </select>
//                 <div className="space-x-4 mt-3">
//                   <button
//                     onClick={() => accept(i._id)}
//                     className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-lg text-white "
//                   >
//                     Assign
//                   </button>
//                   <button 
//               onClick={() =>
//               navigate('/proposaldetails', {state: {evaluator: evalator, data: data} }) 
//               }
//               class="inline-flex items-right px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   Details
//                   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//               </button> 
//                 </div>
//               </div>
//             </div>{" "}
//           </>
//         ))}
//       </div>

      
//    <div className='flex items-center justify-center justify-evenly mt-3 '>
        
//         {
//             proposal.map((i)=>(
//                 <>
//                 <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
//           <div class="p-5">
//               <a >
//                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
//                    {i.proposal.title}
//                   </h5>
//               </a>
//               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 {i.std1.firstName} {i.std1.lastName} <br/>
//                 {i.std2.firstName} {i.std2.lastName} <br/>
//               </p>
//               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.user.firstName} {i.user.lastName}</p>
               
//               <label
//                   htmlFor="location"
//                   className="block text-sm font-medium leading-6 text-white"
//                 >
//                   Evaluator
//                 </label>
//                 <select
//                   className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={evid}
//                   onChange={(e) => setEvid(e.target.value)}
//                 >
//                   {evalator.map((y) => (
//                     <>
//                       <option value={y._id}>
//                         {y.firstName} {y.lastName} 
//                       </option>
//                     </>
//                   ))}
//                 </select>
//                 <br></br>
                
//               <button 
//               onClick={()=>submit(i.proposal._id)}
//               class="inline-flex items-left px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   Accept
//                   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//               </button> 
//               {/* <p></p> */}
              
              
//               <button 
//               onClick={() =>
//                 navigate('/proposaldetails', {state: i }) 
//               }
//               class="inline-flex items-right px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   Details
//                   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//               </button> 
//           </div>
//         </div>
//                 </>
//             ))
//         }
        
//         </div>
               
//     </>
//   );
// };

// export default CoordinatorProposals;

import React, { useEffect, useState } from "react";
import {
  getAllIdeas,
  updateIdea,
  getUserByRole,
  cordinatorProposals,
  updateFinalSatusProposal,
  removeProposal,
} from "../../../DB/db";
import { useNavigate } from "react-router-dom";

const CoordinatorProposals = () => {
  const handleDelete = (id) => {
    // Call the removeProposal function with the ID of the selected data
    removeProposal(id)
      .then(() => {
        console.log("Data deleted successfully.");
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        // Handle error case
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const selectedId = "your_selected_id"; // Replace with the actual ID of the selected data
      handleDelete(selectedId);
    }
  };

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [proposal, setProposal] = useState([]);
  const [evaluator, setEvaluator] = useState([]);
  const [evid, setEvid] = useState();

  useEffect(() => {
    load();
    getProjects();
  }, []);

  const getProjects = async () => {
    let rs = await getAllIdeas();
    let rv = await cordinatorProposals();

    rs = rs.filter((item) => item.eid === null || item.eid === undefined);

    setData(rs);
    setProposal(rv);
  };

  const load = async () => {
    let rs = await getUserByRole("Evaluator");
    setEvaluator(rs);
    setEvid(rs[0]._id);
    console.log("Evaluator", rs);
  };

  const accept = async (id) => {
    const res = await updateIdea(id, evid);
    load();
    getProjects();
  };

  const submit = async (id) => {
    let r = await updateFinalSatusProposal(id, evid);
    load();
    getProjects();
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-center text-2xl mt-6 font-semibold leading-6 text-gray-900">
              Proposals
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-6">
        {data.map((i) => (
          <div
            key={i._id}
            className="max-w-sm mx-2 my-4 overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
          >
            <div className="px-6 py-4">
              <div className="font-semibold text-lg text-gray-800 dark:text-white">
                {i?.title}
              </div>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0">
                  <p className="text-gray-700 dark:text-gray-300">
                    {i.std1.firstName} {i.std1.lastName}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {i.std2.firstName} {i.std2.lastName}
                  </p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={() => accept(i._id)}
                    className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
                  >
                    Assign
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() =>
                    navigate("/proposaldetails", {
                      state: { evaluator: evaluator, data: data },
                    })
                  }
                  className="text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2"
                >
                  Details
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-6">
        {proposal.map((i) => (
          <div
            key={i.proposal._id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <a>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.proposal.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {i.std1.firstName} {i.std1.lastName} <br />
                  {i.std2.firstName} {i.std2.lastName} <br />
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {i.user.firstName} {i.user.lastName}
                </p>

                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Evaluator
                </label>
                <select
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={evid}
                  onChange={(e) => setEvid(e.target.value)}
                >
                  {evaluator.map((y) => (
                    <option key={y._id} value={y._id}>
                      {y.firstName} {y.lastName}
                    </option>
                  ))}
                </select>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => submit(i.proposal._id)}
                    className="text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2"
                  >
                    Accept
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={() => navigate("/proposaldetails", { state: i })}
                    className="text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2"
                  >
                    Details
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoordinatorProposals;
