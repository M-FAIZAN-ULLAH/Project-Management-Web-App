import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../../DB/db";

const options = [
  { title:'1st interim',value:'1' },
  { title:'2nd interim',value:'2' },
  { title:'3rd interim',value:'3' }
]

const Coordinatorplans = () => {
  const navigate = useNavigate();
  const [allPlans, setallPlans] = useState([]);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [File, setFile] = useState(null);
  const [Date, setDate] = useState("");
  const [selectedOption, setSelectedOption] = useState('1');


  const addPlan = async () => {
   let asgto = '-1'
   let data  = await addTask(Name,asgto,Description,Date,File,'');
  getPlans()
  };

  const getPlans = async () => {

    console.log('id',localStorage.getItem('Id'))
    const url = `http://localhost:8000/api/taskplan/submitedPlans/${localStorage.getItem('Id')}`;
    const { data } = await axios.get(url);
    setallPlans(data);
    console.log("Here");
    console.log(data);
    console.log("Done");
    
  };

  const MarkCompleted = async (params) => {
    const url = `http://localhost:8000/api/taskplan/${params}`;
    const { data } = await axios.put(url,{'interim':selectedOption});
    
    getPlans();
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl  font-semibold leading-6 text-gray-900">
              Plans
            </h1>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mt-2">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="planname"
              id="planname"
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
            />
          </div>

          <div className="mt-2">
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="plandescription"
              id="plandescription"
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              // onChange={(e) => setFile(e.target.files[0])}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="planfile"
              id="planfile"
              className=" p-1 w-52 rounded-md  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="File"
            />
          </div>

          <div className="mt-2">
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              name="plandate"
              id="plandate"
              className="block p-2 w-52 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Deadline"
            />
          </div>
          <div className="mt-2">
            <button
              onClick={addPlan}
              className="flex flex-row bg-green-500 hover:bg-green-600 px-4 py-1 text-white rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
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
                          {plan.taskPlan.file}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan.taskPlan.deadline}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan?.taskPlan?.remarks}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {plan.taskPlan.status != "completed" ? (
                            <>
                          
                            <button
                              onClick={() => MarkCompleted(plan.taskPlan._id)}
                              className="bg-green-500 px-2 py-1 text-white rounded-lg hover:bg-green-600"
                            >
                              Complete Plan
                            </button>
                          
                            <select
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    {options.map((i) => (
                      <>
                        <option value={i.value}>
                          {i.title}
                        </option>
                      </>
                    ))}
                  </select>

                            </>
                          ) : (
                            <p>{plan.taskPlan.status}</p>
                          )}
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

export default Coordinatorplans;
