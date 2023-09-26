// import React,{useEffect,useState} from 'react'
// import {  adminHome, adminIdeas } from '../../../DB/db';
// import { useNavigate } from "react-router-dom";

// export default function Hodhome() {
   
//     const navigate = useNavigate();
//     const [data,setData] = useState([])
//     const [data2, setData2] = useState([]);

  
//     useEffect(()=>{
//      load()     
//     },[])

//     const load = async()=>{
//        let rs = await adminHome();
//        setData(rs)
//        let idea = await adminIdeas();
//        setData2(idea);
//         console.log('idea',idea)
//     }

//   return (
//     <>

// <div className='flex flex-wrap mt-3 '>
        
// {
//     data.map((i)=>(
//         <>
//         <div 
//         onClick={()=>{
//           localStorage.setItem('m1Id',i.proposal.member1)
//           localStorage.setItem('m2Id',i.proposal.member2)
//           navigate('/projectdetail')
//         }}
//         class="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
//   <div class="p-5">
//       <a >
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
//            {i.proposal.title}
//           </h5>
//       </a>
//       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//         {i.std1.firstName} {i.std1.lastName} <br/>
//         {i.std2.firstName} {i.std2.lastName} <br/>
//       </p>
//       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.user.firstName} {i.user.lastName}</p>
//       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//        {
//         i.ev !== null? <>{i.ev.firstName} {i.ev.lastName}</>:''
//        }
//       </p>
    
//   </div>
// </div>
//         </>
//     ))
// }

// </div>
  
// <div className="rounded mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {data2.map((i) => (
//           <>
//             <div className="max-w-sm rounded shadow py-7  bg-gray-800">
//               <div
//                 onClick={() => {
//                   localStorage.setItem('m1Id',i.ob2._id)
//                   localStorage.setItem('m2Id',i.ob2._id)
//                   navigate('/projectdetail')
//                   //  localStorage.setItem("ideaId", i.ob1._id);
//                   //  localStorage.setItem("sid1", i.ob2._id);
//                   //  navigate("/idea-tasks");
//                 }}
//                 className="px-8 flex flex-col items-center"
//               >
//                 <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     class="w-6 h-6"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-lg sm:text-xl font-bold leading-10 text-center mt-6 text-gray-800 dark:text-gray-100">
//                   {i.ob1.title}
//                 </p>
//                 <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
//                   {i.ob2.firstName} {i.ob2.lastName}
//                 </p>
               
//               </div>

             
//             </div>
           
//           </>
//         ))}
//       </div>


//     </>
//   )
// }

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
                navigate("/hodtaskhistory");
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


