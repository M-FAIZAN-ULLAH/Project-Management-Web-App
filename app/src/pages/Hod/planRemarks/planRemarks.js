
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminPlans } from "../../../DB/db";



const HodPlans = () => {
  const navigate = useNavigate();
  const [allPlans, setallPlans] = useState([]);
 

  const getPlans = async () => {
   
    let data = await getAdminPlans();
    setallPlans(data);
    console.log("Here",data);
   
  };



  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                  
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Remarks
                    </th>
                   
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                    
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allPlans.length == 0 ? (
                    <h1>No Data Found</h1>
                  ) : (
                    allPlans.map((plan) => (
                      <tr key={plan._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {plan.taskPlan.name}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan.taskPlan.description}
                        </td>
                      
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan.taskPlan.deadline}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan?.taskPlan?.remarks}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-500">
                          <button 
                            onClick={()=>{
                                localStorage.setItem('planID',plan.taskPlan._id)
                                navigate('/hodPlanRemarksForm')
                            }}
                          >
                            Add Remarks
                          </button>
                        </td>      
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HodPlans;
