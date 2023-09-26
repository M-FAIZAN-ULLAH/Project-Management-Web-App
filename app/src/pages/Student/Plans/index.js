// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { downloadFile,getAllPlans,planTask ,updatePlanStatus} from "../../../DB/db";

// const Plans = () => {
  
//   const [getPlans, setgetPlans] = useState([]);
//   const [file,setFile] = useState('')
  
//   const getmyPlans = async () => {
//     // const url = `http://localhost:8000/api/taskplan/get/${localStorage.getItem('Id')}`;
//     // const { data } = await axios.get(url);
//     // console.log("🚀 ~ file: index.js:17 ~ getmyPlans ~ data:", data);
//     // setgetPlans(data);

//     let data = await getAllPlans();
//     setgetPlans(data);
//   };


//   useEffect(() => {
//     getmyPlans();
//   }, []);


  
//   const submit = async (id,proposalFile) => {
//     // const uid = localStorage.getItem('Id');
//     // const planTaskId = id;
//     // let pl = await planTask(uid,planTaskId,proposalFile);
//    let r =  await updatePlanStatus(id, "completed",proposalFile);
//    console.log(r);
//    getmyPlans();
    
//   };

//   return (
//     <>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className="text-base mt-3  font-semibold leading-6 text-gray-900">
//               Plans
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flow-root overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <table className="w-full text-left">
//             <thead className="bg-white">
//               <tr>
//                 <th
//                   scope="col"
//                   className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
//                 >
//                   Name
//                   <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
//                   <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
//                 </th>
//                 <th
//                   scope="col"
//                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
//                 >
//                   Description
//                 </th>
//                 <th
//                   scope="col"
//                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
//                 >
//                   File
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                 >
//                   Deadline
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                 >
//                   Remarks
//                 </th>
//                 <th scope="col" className="relative py-3.5 pl-3">
//                   <span className="sr-only">Apply</span>
//                 </th>
//                 <th scope="col" className="relative py-3.5 pl-3">
//                   <span className="sr-only">Download</span>
//                 </th>
//                 <th scope="col" className="relative py-3.5 pl-3">
//                   <span className="sr-only">Submit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {getPlans.map((plans) =>
            
//                   <tr key={plans._id}>
//                     <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
//                       {plans.name}
//                       <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
//                       <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
//                     </td>
//                     <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
//                       {plans.description}
//                     </td>
//                     <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
//                       {plans.file}
//                     </td>
//                     <td className="px-3 py-4 text-sm text-gray-500">
//                       {plans.deadline.split("T")[0]}
//                     </td>
//                     <td className="px-3 py-4 text-sm text-gray-500"></td>
//                     {/* <td className="relative py-4 pl-3 text-right text-sm font-medium">
//                       {plans.taskPlan.status != "completed" ? (
//                         <button className=" bg-blue-600 hover:bg-blue-500 text-white px-2 py-2 rounded-lg ">
//                           Apply
//                         </button>
//                       ) : (
//                         <div></div>
//                       )}
//                     </td> */}
//                     <td className="relative py-4 space-x-4 text-right text-sm font-medium">
//                       <button 
//                        onClick={()=>downloadFile(plans.file)}
//                        className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg ">
//                         Download
//                       </button>
//                       <input
//                     type="file"
//                     name="Submit"           
//                     className=" bg-green-800 hover:bg-gray-600 text-white px-2 py-2 rounded-lg "
//                     onChange={(e) => {    
//                       setFile(e.target.files[0])              
//                       //submit(plans._id,e.target.files[0])
//                     }}
//                   />
//                     </td>
                    
//                     <td className="relative py-4 space-x-4 text-right text-sm font-medium">
//                       <button 
//                       onClick={()=> submit(plans._id,file)}
//                        className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg ">
//                         Submit
//                       </button>                     
//                     </td>
//                   </tr>
//                 )
//               }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Plans;


// import React, { useEffect, useState } from "react";
// import { downloadFile, getAllPlans, planTask, updatePlanStatus } from "../../../DB/db";

// const Plans = () => {
//   const [getPlans, setGetPlans] = useState([]);
//   const [file, setFile] = useState('');

//   const getMyPlans = async () => {
//     let data = await getAllPlans();
//     setGetPlans(data);
//   };

//   useEffect(() => {
//     getMyPlans();
//   }, []);

//   const submit = async (id, proposalFile) => {
//     let r = await updatePlanStatus(id, "completed", proposalFile);
//     console.log(r);
//     getMyPlans();
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className="text-base mt-3 font-semibold leading-6 text-gray-900">Plans</h1>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flow-root overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <table className="w-full text-left">
//             <thead className="bg-white">
//               <tr>
//                 <th className="relative py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
//                   Name
//                 </th>
//                 <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
//                   Description
//                 </th>
//                 <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell">
//                   File
//                 </th>
//                 <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                   Deadline
//                 </th>
//                 <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                   Remarks
//                 </th>
//                 <th className="relative py-3.5 pl-3">
//                   <span className="sr-only">Download</span>
//                 </th>
//                 <th className="relative py-3.5 pl-3">
//                   <span className="sr-only">Submit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {getPlans.map((plans) => (
//                 <tr key={plans._id}>
//                   <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
//                     {plans.name}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
//                     {plans.description}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
//                     {plans.file}
//                   </td>
//                   <td className="px-3 py-4 text-sm text-gray-500">
//                     {plans.deadline.split("T")[0]}
//                   </td>
//                   <td className="px-3 py-4 text-sm text-gray-500"></td>
//                   <td className="relative py-4 space-x-4 text-right text-sm font-medium">
//                     <button
//                       onClick={() => downloadFile(plans.file)}
//                       className="bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg"
//                     >
//                       Download
//                     </button>
//                   </td>
//                   <td className="relative py-4 space-x-4 text-right text-sm font-medium">
//                     <div className="flex items-center">
//                       <label
//                         htmlFor={`file-upload-${plans._id}`}
//                         className="bg-green-600 hover:bg-gray-600 text-white px-2 py-2 rounded-lg cursor-pointer"
//                       >
//                         Choose File
//                       </label>
//                       <input
//                         id={`file-upload-${plans._id}`}
//                         type="file"
//                         name="Submit"
//                         className="hidden"
//                         onChange={handleFileChange}
//                       />
//                       {file && (
//                         <span className="ml-2 text-gray-500">{file.name}</span>
//                       )}
//                     </div>
//                     <button
//                       onClick={() => submit(plans._id, file)}
//                       className="bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg"
//                     >
//                       Submit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Plans;
import React, { useEffect, useState } from "react";
import { downloadFile, getAllPlans, planTask, updatePlanStatus } from "../../../DB/db";

const Plans = () => {
  const [getPlans, setGetPlans] = useState([]);
  const [file, setFile] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const getMyPlans = async () => {
    let data = await getAllPlans();
    setGetPlans(data);
  };

  useEffect(() => {
    getMyPlans();
  }, []);

  const submit = async (id, proposalFile) => {
    let r = await updatePlanStatus(id, "completed", proposalFile);
    console.log(r);
    getMyPlans();
    setSuccessMessage("Submission successful");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {successMessage && (
          <div className="mt-4 bg-green-100 text-green-600 px-4 py-2 rounded-lg">
            {successMessage}
          </div>
        )}
        <div className="mt-8 flow-root overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <table className="w-full text-left">
              <thead className="bg-white">
                <tr>
                  <th className="relative py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                    Description
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Deadline
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    File
                  </th>
                  <th className="relative py-3.5 pl-3">
                    <span className="sr-only">Download</span>
                  </th>
                  <th className="relative py-3.5 pl-3">
                    <span className="sr-only">Submit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {getPlans.map((plans) => (
                  <tr key={plans._id}>
                    <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                      {plans.name}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {plans.description}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {plans.deadline.split("T")[0]}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {plans.file}
                    </td>
                    <td className="relative py-4 space-x-4 text-right text-sm font-medium">
                      <button
                        onClick={() => downloadFile(plans.file)}
                        className="bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg"
                      >
                        Download
                      </button>
                    </td>
                    <td className="relative py-4 space-x-4 text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <label
                          htmlFor={`file-upload-${plans._id}`}
                          className="bg-green-600 hover:bg-gray-600 text-white px-2 py-2 rounded-lg cursor-pointer"
                        >
                          Choose File
                        </label>
                        <input
                          id={`file-upload-${plans._id}`}
                          type="file"
                          name="Submit"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        {file && <span className="text-gray-500">{file.name}</span>}
                      </div>
                      </td>
                      <td>
                      <button
                        onClick={() => submit(plans._id, file)}
                        className="bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg"
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
