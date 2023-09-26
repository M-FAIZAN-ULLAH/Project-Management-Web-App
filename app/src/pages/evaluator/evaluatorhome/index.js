import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { downloadFile, getEvaluatorIdeas, getEvaluatorProposals } from "../../../DB/db";

const Evaluatorhome = () => {
  const navigate = useNavigate();
 const[data,setData] = useState([]);
 const [dt,setDt] = useState([]);

 useEffect(()=>{
  load();
  },[])
  

  const load= async () =>{

   let r = await getEvaluatorProposals();
   setData(r);
   let rs = await getEvaluatorIdeas();
   setDt(rs);

   console.log('r',r)
   console.log('rs',rs)
  }


  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
         {data.map((i)=>(
           
           <div className="max-w-sm py-6 relative rounded shadow bg-white dark:bg-gray-800" 
             onClick={()=>{
              localStorage.setItem('StdId1',i.std1._id)
              localStorage.setItem('StdId2',i.std2._id)
              navigate('/interimMain');
             }}
           >
           <div className="px-6">
             <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                 />
               </svg>
             </div>
           </div>
           <div className="border-t-2  px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
             <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              {i.proposal.title}
             </p>
             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
               {i.user.firstName} {i.user.lastName}
             </p>
             {/* <div className="space-x-4 mt-3">
               <button
                 onClick={() =>{
                  localStorage.setItem('Pid',i.proposal._id)
                  navigate("/projectdetails")
                 }}
                 className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white "
               >
                 Details
               </button>
             </div> */}
           </div>
         </div>

         ))}
      </div>

      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
         {dt.map((i)=>(
           
           <div className="max-w-sm py-6 relative rounded shadow bg-white dark:bg-gray-800"
           onClick={()=>{
            localStorage.setItem('StdId1',i.user._id)
            localStorage.setItem('StdId2',i.user._id)
            navigate('/interimMain');
           }}
           >
           <div className="px-6">
             <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                 />
               </svg>
             </div>
           </div>
           <div className="border-t-2  px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
             <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              {i.idea.title}
             </p>
             <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
               {i.user.firstName} {i.user.lastName}
             </p>
             <button
                onClick={async()=>await downloadFile(i.idea.proposalFile)}
                 className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white "
               >
                 {i.idea.proposalFile}
               </button>
               
             <div className="space-x-4 mt-3">
            

               <button
                onClick={async()=>await downloadFile(i.idea.solFile)}
                 className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white "
               >
                 {i.idea.solFile}
               </button>
             </div>
           </div>
         </div>

         ))}
      </div>

    </>
  );
};

export default Evaluatorhome;
