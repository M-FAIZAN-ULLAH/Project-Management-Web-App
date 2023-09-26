import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTask, downloadFile, getIDeaTaskById } from "../../../DB/db";

const Supervisorideas = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let res = await getIDeaTaskById(localStorage.getItem("ideaId"));
    setData(res);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadData();
  };

 

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Supervisor Idea-Tasks
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
          
              onClick={() => {
                localStorage.setItem('editTaskId','-1')
                localStorage.setItem('IdeaTask','1')
                navigate("/Addtask")
            }}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Task
            </button>
          </div>
        </div>
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
                      Asignto
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
                      File
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Solution File
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Deadline
                    </th>
                   
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((person) => (
                    <tr key={person.taskPlan._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.taskPlan.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.user.firstName} {person.user.lastName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.taskPlan.description}
                      </td>
                      <td 
                       onClick={async()=>await downloadFile(person.taskPlan.file)}
                       className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.taskPlan.file}
                      </td>
                      <td 
                         onClick={async()=>await downloadFile(person.taskPlan.solFile)}
                       className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.taskPlan.solFile}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.taskPlan.deadline}
                      </td>
                     
                      <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium sm:pr-0">
                        <button
                          onClick={() => removeTask(person.taskPlan._id)}
                          href="#"
                          className="text-white hover:bg-red-600 bg-red-500 px-2 py-2 rounded-lg"
                        >
                          Delete
                          <span className="sr-only">
                            , {person.taskPlan.name}
                          </span>
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
    </>
  );
};

export default Supervisorideas;
