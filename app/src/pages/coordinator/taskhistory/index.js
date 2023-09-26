import React, { useEffect, useState } from "react";
import { getAllTaskHistory, projectTaskHistory } from "../../../DB/db";

const Taskhistory = () => {
  const taskId = localStorage.getItem("taskId");
  const [data, setData] = useState([]);
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    console.log(taskId);
   // let rs = await getAllTaskHistory();
    let rs = await projectTaskHistory(taskId);
    console.log("🚀 ~ file: index.js:19 ~ load ~ rs:", rs);
    setData(rs);  
  };

  return (
    <>
      {" "}
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl mt-6">Task History</h1>
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
                      Description{" "}
                    </th>
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
                      Type
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Marks{" "}
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Remarks{" "}
                    </th>

                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      solFile{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((i) => (
                    <>
                      <tr>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                          {i.taskPlan.name}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {i.user.firstName} {i.user.lastName}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                          {i.taskPlan.description}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {i.taskPlan.file}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {i.taskPlan.deadline.split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {i.taskPlan.type}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {i.taskPlan.marks}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {i.taskPlan.remarks}
                        </td>

                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {i.taskPlan.solFile}
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

export default Taskhistory;
