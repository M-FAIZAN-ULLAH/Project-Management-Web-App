// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getProposals,
//   downloadFile,
//   changeProposalStatus,
// } from "../../../DB/db";

// const Proposals = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     loadProposals();
//   }, []);

//   const loadProposals = async () => {
//     let res = await getProposals("pending");
//     setData(res);
   
//   };

//   const download = async (fileName) => await downloadFile(fileName);

//   const accept_reject = async (id, status) => {
//     let response = await changeProposalStatus(id, status);
//     console.log("response", response);
//     loadProposals();
//     navigate('/proposalForms');
//   };

//   return (
//     <>
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className="text-base text-center mt-6 font-semibold leading-6 text-gray-900">
//               Proposals
//             </h1>
//           </div>
          
//         </div>
//       </div>

//       <ul
//         role="list"
//         className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//       >
//         {data.map((person) => (
//           <li
//             key={person.proposal._id}
//             className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-200 shadow mt-6"
//           >
//             <div className="flex w-full items-center justify-between space-x-6 p-6">
//               <div className="flex-1 truncate">
//                 <div className="flex items-center space-x-3">
//                   <h3 className="truncate text-sm font-medium text-gray-900">
//                     {person.std1.firstName} {person.std1.lastName} & {person.std2.firstName} {person.std2.lastName}
//                   </h3>
//                 </div> 
//                 {/* adding new feture */}
//                 <p className="mt-1 truncate text-sm text-gray-500">
//                   {person.proposal.title}
//                 </p>
//                 <button
//                     onClick={() =>
//                       navigate('/details') 
//                     }
//                     className="bg-White-200 hover:bg-white-200 relative underline -mr-px  w-15 flex-1  gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
//                   >
//                     Details 
//                   </button>
//               </div>
//               <a
//                 href="#"
//                 class="text-blue-500 underline"
//                 onClick={() => download(person.proposal.proposalFile)}
//               >
//                 Download File
//               </a>
//             </div>
//             <div>
//               <div className="-mt-px flex divide-x divide-gray-200">
//                 <div className="flex w-0 flex-1">
//                   <button
//                     onClick={() =>
//                        accept_reject(person.proposal._id, "accept")
//                       }
//                     className="bg-green-500 hover:bg-green-400 relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
//                   >
//                     Accept
//                   </button>
//                 </div>
//                 <div className="-ml-px flex w-0 flex-1">
//                   <button
//                     onClick={() => accept_reject(person.proposal._id, "reject")}
//                     className="bg-red-600 hover:bg-red-500 text-white relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold "
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Proposals;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProposals,
  downloadFile,
  changeProposalStatus,
} from "../../../DB/db";

const Proposals = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadProposals();
  }, []);

  const loadProposals = async () => {
    let res = await getProposals("pending");
    setData(res);
  };

  const download = async (fileName) => await downloadFile(fileName);

  const accept_reject = async (id, status) => {
    let response = await changeProposalStatus(id, status);
    console.log("response", response);
    loadProposals();
    navigate('/proposalForms');
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base text-center mt-6 font-semibold leading-6 text-gray-900">
              Proposals
            </h1>
          </div>
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((person) => (
          <li
            key={person.proposal._id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {person.std1.firstName} {person.std1.lastName} & {person.std2.firstName} {person.std2.lastName}
                  </h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {person.proposal.title}
                </p>
                <button
                  onClick={() => navigate('/details')}
                  className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2 mt-2 text-sm font-semibold"
                >
                  Details
                </button>
              </div>
              <a
                href="#"
                className="text-blue-500 underline"
                onClick={() => download(person.proposal.proposalFile)}
              >
                Download File
              </a>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <button
                    onClick={() => accept_reject(person.proposal._id, "accept")}
                    className="bg-green-500 hover:bg-green-400 text-white relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold"
                  >
                    Accept
                  </button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    onClick={() => accept_reject(person.proposal._id, "reject")}
                    className="bg-red-600 hover:bg-red-500 text-white relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Proposals;
