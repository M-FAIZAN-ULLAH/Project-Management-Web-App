import React, { useEffect, useState } from "react";
import {
  addEvaluator,
  changeProposalStatus,
  getProposals,
  getUserByRole,
} from "../../../DB/db";

const CoordinatorProposals = () => {
  const [data, setData] = useState([]);
  const [evalator, setEvalator] = useState([]);
  const [evid, setEvid] = useState();

  useEffect(() => {
    getProjects();
    load();
  }, []);

  const getProjects = async () => {
    let rs = await getProposals("accept");
    setData(rs);
  };

  const load = async () => {
    let rs = await getUserByRole("Evaluator");
    setEvalator(rs);
    setEvid(rs[0]._id);
  };

  const accept = async (id) => {
    await addEvaluator(id, evid, "accept2");
    getProjects();
  };

  const reject = async (id) => {
    await changeProposalStatus(id, "reject");
    getProjects();
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className=" text-center text-2xl mt-6 font-semibold leading-6 text-gray-900">
              Proposals
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((i) => (
          <>
            <div className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800">
              <img
                className="h-48 w-96"
                src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
              />

              <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
                <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
                  {i.title}
                </p>

                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Evaluator
                </label>
                <select
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={evid}
                  onChange={(e) => setEvid(e.target.value)}
                >
                  {evalator.map((y) => (
                    <>
                      <option value={y._id}>
                        {y.firstName} {y.lastName}
                      </option>
                    </>
                  ))}
                </select>
                <div className="space-x-4 mt-3">
                  <button
                    onClick={() => accept(i._id)}
                    className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-lg text-white "
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => reject(i._id)}
                    className="bg-red-500 hover:bg-red-700  px-2 py-1 rounded-lg text-white "
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        ))}
      </div>
    </>
  );
};

export default CoordinatorProposals;
