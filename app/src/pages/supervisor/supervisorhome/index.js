// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { acceptedIdeasOnly, getProposals } from "../../../DB/db";

// const Supervisorhome = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);

//   localStorage.setItem("sid1", "-1");
//   localStorage.setItem("sid2", "-1");

//   useEffect(() => {
//     loadData();
//     loadIdeas();
//   }, []);

//   //let res = await getUserPropsals();

//   const loadData = async () => {
//    let res =  await getProposals('accept2');
   
//     setData(res);
//     console.log('ok',res)
//   };
  



//   const loadIdeas = async()=>{
//     let idea = await acceptedIdeasOnly();
//     setData2(idea);
  
//   }

//   return (
//     <>
//       {" "}
//       <div className="rounded mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {data.map((i) => (
//           <>
//             <div className="max-w-sm rounded shadow py-7  bg-gray-800">
//               <div
//                 onClick={() => {
//                   localStorage.setItem("proposalId", i.proposal._id);
//                   localStorage.setItem("sid1", i.std1._id);
//                   localStorage.setItem("sid2", i.std2._id);
//                   navigate("/Supervisortasks");
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
//                   {i.proposal.title}
//                 </p>
//                 <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
//                   {i.std1.firstName} {i.std1.lastName}
//                 </p>
//                 <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
//                   {i.std2.firstName} {i.std2.lastName}
//                 </p>
//               </div>

             
//             </div>
           
//           </>
//         ))}
//       </div>

     
//       <div className="rounded mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {data2.map((i) => (
//           <>
//             <div className="max-w-sm rounded shadow py-7  bg-gray-800">
//               <div
//                 onClick={() => {
//                    localStorage.setItem("ideaId", i.ob1._id);
//                    localStorage.setItem("sid1", i.ob2._id);
//                    navigate("/idea-tasks");
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
//   );
// };

// export default Supervisorhome;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { acceptedIdeasOnly, getProposals } from "../../../DB/db";

const Supervisorhome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  localStorage.setItem("sid1", "-1");
  localStorage.setItem("sid2", "-1");

  useEffect(() => {
    loadData();
    loadIdeas();
  }, []);

  const loadData = async () => {
    let res = await getProposals("accept2");
    setData(res);
    console.log("ok", res);
  };

  const loadIdeas = async () => {
    let idea = await acceptedIdeasOnly();
    setData2(idea);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((i) => (
          <div
            key={i.proposal._id}
            className="max-w-sm rounded shadow bg-white overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            onClick={() => {
              localStorage.setItem("proposalId", i.proposal._id);
              localStorage.setItem("sid1", i.std1._id);
              localStorage.setItem("sid2", i.std2._id);
              navigate("/Supervisortasks");
            }}
          >
            <div className="p-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold leading-10 text-center text-gray-800 dark:text-gray-100">
                {i.proposal.title}
              </p>
              <p className="text-base leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
                {i.std1.firstName} {i.std1.lastName}
              </p>
              <p className="text-base leading-9 text-center mt-2 text-gray-500 dark:text-gray-400">
                {i.std2.firstName} {i.std2.lastName}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data2.map((i) => (
          <div
            key={i.ob1._id}
            className="max-w-sm rounded shadow bg-white overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            onClick={() => {
              localStorage.setItem("ideaId", i.ob1._id);
              localStorage.setItem("sid1", i.ob2._id);
              navigate("/idea-tasks");
            }}
          >
            <div className="p-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold leading-10 text-center text-gray-800 dark:text-gray-100">
                {i.ob1.title}
              </p>
              <p className="text-base leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
                {i.ob2.firstName} {i.ob2.lastName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Supervisorhome;
