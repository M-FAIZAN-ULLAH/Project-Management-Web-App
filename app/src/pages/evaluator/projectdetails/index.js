import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProposalsTask } from "../../../DB/db";

const Projectdetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    let rs = await getProposalsTask();
    setData(rs);
   
  };

  return (
    <>
      {" "}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl  font-semibold leading-6 text-gray-900">
              Project Detail
            </h1>
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
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Assignto
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
                      Marks
                    </th>
                     
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     Type
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.length > 0 ? (
                    data.map((person) => (
                      <tr key={person.ob._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {person.ob.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.user.firstName} {person.user.lastName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.ob.description}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.ob.deadline.split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.ob.marks}
                        </td>
                        {person.ob.asgto === '-1'? <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Plan
                        </td>: <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          Task
                        </td>}
                        <td className="relative whitespace-nowrap py-4  pr-4 text-right text-sm font-medium sm:pr-0">
                          <button
                            onClick={() => {
                              localStorage.setItem("Tid", person.ob._id);
                              navigate("/evaluate");
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Evaluate
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
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

export default Projectdetails;
