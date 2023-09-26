import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { downloadFile, getMembersTasks } from '../../../DB/db';


const ProjectDetail = () => {
  const navigate = useNavigate();
   const [data,setData] = useState([])
   
   let m1 = localStorage.getItem('m1Id')
   let m2 = localStorage.getItem('m2Id')


  useEffect(()=>{
        load()
  },[])

  const load = async ()=>{
    const r = await getMembersTasks(m1,m2)
    setData(r)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                   Name
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Assign To
                  </th>

                
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
Description                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
            File
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
  Deadline
                  </th>
           
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   SolutionFile     
                  </th>
                  {/* <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Marks      
                  </th> */}
                   <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Remarks      
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((transaction) => (
                  <tr key={transaction.taskPlan._id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {transaction.taskPlan.name}
                      </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                    {transaction.user.firstName}    {transaction.user.lastName}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.taskPlan.description}</td>
                    
                    <button className="text-white bg-gray-800 hover:bg-gray-100 px-2 py-2 rounded-lg "
                     onClick={async()=>await downloadFile(transaction.taskPlan.file)}
                    >
                    {transaction.taskPlan.file}
                    </button>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.taskPlan.deadline}</td>
                    
                    <button className="text-white bg-gray-800 hover:bg-gray-100 px-2 py-2 rounded-lg "
                      onClick={async()=>await downloadFile(transaction.taskPlan.solFile)}
                    >
                    {transaction.taskPlan.solFile}
                    </button>
                    
                    {/* <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.taskPlan.marks}</td> */}
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.taskPlan.remarks}</td>

                    <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button 
                       onClick={()=>{
                        localStorage.setItem('RID',transaction.taskPlan._id)
                        localStorage.setItem('MARKS',transaction.taskPlan.marks)
                        navigate('/remarksHod')
                       }}
                       className="text-white bg-gray-800 hover:bg-gray-500 px-2 py-2 rounded-lg "
                        
                       >
                       Add Remarks
                       <span className="sr-only">, {transaction.id}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
