// import React,{useState,useEffect} from "react";
// import {getUserPropsals,downloadFile} from '../../../DB/db'

// const StudentHome = () => {

//   const [data,setData] = useState([]);

//   useEffect(()=>{  
//    loadData()
//   },[])


//   const loadData = async ()=>{
//    let response = await getUserPropsals();
//    setData(response);
   
//   }

//   const download = async(proposalFile)=>{
      
//       let response = await downloadFile(proposalFile);
//       console.log('response',response)
//   }

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
       
//          {
//           data.map((i)=>(
            
//             <>
//                <div className="max-w-sm py-6 relative rounded shadow bg-white dark:bg-gray-800">
//           <div className="px-6">
//             <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
//             <svg width="34" height="24" xmlns="http://www.w3.org/2000/svg"
//              fill-rule="evenodd"
//               clip-rule="evenodd">
//                 <path d="M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-1.271-1.297-3.042-2.103-5-2.103-3.863 0-7 3.137-7 7 0 1.958.806 3.729 2.103 5zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/>

//               </svg>
//             </div>
//           </div>
//           <div className="border-t-2 px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
//             <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
//              Proposal : {i.proposal.title} 
//             </p>
//             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
//             Supervisor : {i.user.firstName}  {i.user.lastName}
//             </p>
//             <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
//              Member-1 :{i.std1.firstName} {i.std1.lastName}
//              <br/>
//              Member-2 : {i.std2.firstName} {i.std2.lastName}
//             </p>
//             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
//             Status : {i.proposal?.status}
//             </p>
//             <div className="space-x-4 mt-3">
//               <button className="bg-green-500 px-2 py-1 rounded-lg text-white "
//                onClick={()=>download(i.proposal.proposalFile)}
//               >
//                 File Download
//               </button>
//               {/* <button className="bg-blue-500 px-2 py-1 rounded-lg text-white ">
//                 Apply
//               </button> */}
//             </div>
//           </div>
//         </div>
//             </>

//           ))
//          } 
       
//       </div>
//     </>
//   );
// };

// export default StudentHome;


import React, { useState, useEffect } from "react";
import { getUserPropsals, downloadFile } from "../../../DB/db";
import { motion } from "framer-motion";

const StudentHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let response = await getUserPropsals();
    setData(response);
  };

  const download = async (proposalFile) => {
    let response = await downloadFile(proposalFile);
    console.log("response", response);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((i) => (
          <motion.div
            key={i.proposal.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm py-6 relative rounded shadow bg-white dark:bg-gray-800"
          >
            <div className="px-6">
              <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
                <svg
                  width="34"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-1.271-1.297-3.042-2.103-5-2.103-3.863 0-7 3.137-7 7 0 1.958.806 3.729 2.103 5zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                </svg>
              </div>
            </div>
            <div className="border-t-2 px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
              <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
                Proposal: {i.proposal.title}
              </p>
              <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
                Supervisor: {i.user.firstName} {i.user.lastName}
              </p>
              <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
                Member-1: {i.std1.firstName} {i.std1.lastName}
                <br />
                Member-2: {i.std2.firstName} {i.std2.lastName}
              </p>
              <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
                Status: {i.proposal?.status}
              </p>
              <div className="space-x-4 mt-3">
                <button
                  className="bg-green-500 px-2 py-1 rounded-lg text-white"
                  onClick={() => download(i.proposal.proposalFile)}
                >
                  File Download
                </button>
                {/* <button className="bg-blue-500 px-2 py-1 rounded-lg text-white ">
                  Apply
                </button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default StudentHome;
