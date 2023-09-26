// import React, { useState, useEffect } from "react";
// import { downloadFile, getSubmitedPlans } from "../../../DB/db";
// import { useNavigate } from "react-router-dom";

// const PlanHistory = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     let res = await getSubmitedPlans();
//     setData(res);
//     console.log('check this out', res);
//   };


//   return (
//     <>
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className="text-base font-semibold leading-6 text-gray-900">
//               Plans Submitted
//             </h1>
//           </div>
        
//         </div>
//         <div className="mt-8 flow-root">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//               <table className="min-w-full divide-y divide-gray-300">
//                 <thead>
//                   <tr>
//                     <th
//                       scope="col"
//                       className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                     >
//                       Task
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Student
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Description
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                      Task File
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Deadline
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                     >
//                      Solution File
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                     >
                     
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                     >
                     
//                     </th>

//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {data.map((person) => (
//                     <tr key={person.taskPlan._id}>
//                       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                         {person.taskPlan.name}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person?.user?.firstName} {person?.user?.lastName}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.taskPlan.description}
//                       </td>
//                       <td 
//                         onClick={async()=>await downloadFile(person.taskPlan.file)}
//                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.taskPlan.file}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.taskPlan.deadline}
//                       </td>
//                       <td 
//                        onClick={async()=>await downloadFile(person.taskPlan.solFile)}
//                        className="relative whitespace-nowrap py-4  text-right text-sm font-medium sm:pr-0">
//                       {person.taskPlan.solFile}
//                       </td>
//                       <td></td>
//                       <td
//                        className="relative rounded-xl bg-blue-600 pl-5 text-white"
//                        onClick={()=>{
//                         const myObject = { taskPlan:person.taskPlan };
//                         navigate('/planDetails', { state: myObject });
//                        }}
//                       >
//                         Details
//                       </td>
                   

//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


// export default PlanHistory;

import React, { useState, useEffect } from "react";
import { downloadFile, getSubmitedPlans } from "../../../DB/db";
import { useNavigate } from "react-router-dom";

const PlanHistory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let res = await getSubmitedPlans();
    setData(res);
    console.log('check this out', res);
  };


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Plans Submitted
          </h1>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Task
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Student
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Description
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Task File
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Deadline
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  Solution File
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((person) => (
                <tr key={person.taskPlan._id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {person.taskPlan.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person?.user?.firstName} {person?.user?.lastName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.taskPlan.description}
                  </td>
                  <td
                    onClick={async () => await downloadFile(person.taskPlan.file)}
                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer hover:text-blue-600"
                  >
                    {person.taskPlan.file}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.taskPlan.deadline}
                  </td>
                  <td
                    onClick={async () => await downloadFile(person.taskPlan.solFile)}
                    className="relative whitespace-nowrap py-4 text-right text-sm font-medium sm:pr-0 cursor-pointer hover:text-blue-600"
                  >
                    {person.taskPlan.solFile}
                  </td>
                  <td></td>
                  <td
                    className="relative bg-blue-600 px-4 py-2 text-xs text-white rounded-lg cursor-pointer hover:bg-blue-700 mt-2"
                    onClick={() => {
                      const myObject = { taskPlan: person.taskPlan };
                      navigate('/planDetails', { state: myObject });
                    }}
                  >
                    Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanHistory;
