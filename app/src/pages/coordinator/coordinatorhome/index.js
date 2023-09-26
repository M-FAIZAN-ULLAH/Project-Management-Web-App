// import React,{useEffect,useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { allProposal, getAllTaskCordinator } from "../../../DB/db";

// const Coordinatorhome = () => {


//   const navigate = useNavigate();
//   const[data,setData] = useState([]);

//   useEffect(()=>{
//     load();
//   },[])

//   const load = async() =>{
//     let rs = await allProposal();
//     setData(rs);
//   }

//   return (
//     <>
//       {" "}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      
//       {
//         data?.proposals?.map((i)=>(
           
//           <div className="max-w-sm py-6 relative rounded shadow bg-red-600     dark:bg-gray-800">
//           <div className="px-6">
//             <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="w-6 h-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="border-t-2  px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
//             <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
//               {i.proposal.title}
//             </p>
//             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
//               {i.std1.firstName}  {i.std1.lastName}  
//             </p>          
            
//             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
//              {i.std2.firstName}  {i.std2.lastName}
//             </p>
            
//             <div className="space-x-4 mt-3">
//               <button
//                 onClick={() => {
//                   localStorage.setItem('taskId',i.proposal._id)
//                   navigate("/taskhistory")
//                 }}
//                 className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white "
//               >
//                 Task History
//               </button>
//             </div>
//           </div>
//         </div>


//         ))
//       }
           
//       </div>
//     </>
//   );
// };

// export default Coordinatorhome;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allProposal, getAllTaskCordinator } from "../../../DB/db";

const CoordinatorHome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    let rs = await allProposal();
    setData(rs);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data?.proposals?.map((i) => (
        <div
          key={i.proposal._id}
          className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          onClick={() => {
            localStorage.setItem("taskId", i.proposal._id);
            navigate("/taskhistory");
          }}
        >
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            Task history
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {i.proposal.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {i.std1.firstName} {i.std1.lastName}
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {i.std2.firstName} {i.std2.lastName}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                localStorage.setItem("taskId", i.proposal._id);
                navigate("/taskhistory");
              }}
              type="button"
              className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoordinatorHome;

