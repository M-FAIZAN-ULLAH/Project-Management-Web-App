import React, { useEffect, useState } from "react";
import { downloadFile, getInterims } from "../../../DB/db";
import { useNavigate } from "react-router-dom";


const IntrimComponent = ({props}) => {
    
  const navigate = useNavigate();
  const sid1 = localStorage.getItem('StdId1');
  const sid2 = localStorage.getItem('StdId2');

  const [data, setData] = useState([]);
  useEffect(() => {
    load();
  }, [props]);

  const load = async () => {
    let rs = await getInterims(sid1,sid2,props)
    setData(rs);

  };

  return (
    <>
      {" "}
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
                     Email
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     Title
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     description
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     file
                    </th>

                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     solution file
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                    {" "}
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((data) => (
                    <>
                      <tr>
                         <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        {data.user.firstName} {data.user.lastName}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.user.email}  
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.taskPlan.name}  
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.taskPlan.description}  
                        </td>
                        <td 
                        onClick={async()=>await downloadFile(data.taskPlan.file)}
                         className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.taskPlan.file}  
                        </td>
                        <td 
                            onClick={async()=>await downloadFile(data.taskPlan.solFile)}
                         className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.taskPlan.solFile}  
                        </td>
                       
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            <button onClick={()=>{
                                localStorage.setItem('taskPlanId',data.taskPlan._id)
                                navigate(`/${props}interim`)
                            }}>
                                Evaluate
                            </button>  
                        </td>
                       
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntrimComponent;
