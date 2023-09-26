import React from 'react'
import { useState, useEffect } from "react";
import { createCplantoS, getCplantoS } from "../../../DB/db";
import { useNavigate } from 'react-router-dom';


function CplantoS() {


  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && deadline) {
      try {
        await createCplantoS(name, deadline);
        setName("");
        setDeadline("");
        console.log("CplantoS created successfully!");
        fetchCplantoS();
      } catch (error) {
        console.error("Error creating CplantoS:", error);
      }
    }
  };

  const fetchCplantoS = async () => {
    try {
      const cplantoSList = await getCplantoS();
      console.log(cplantoSList);
      setData(cplantoSList);
      // Update state or perform further operations with the CplantoS list
    } catch (error) {
      console.error("Error fetching CplantoS:", error);
    }
  };

  useEffect(() => {
    fetchCplantoS();
  }, []);

  const handleViewClick = (item) => {
    navigate('/splandetails', { state: { value: item.name } });
  };





  // const [name, setName] = useState("");
  // const [deadline, setDeadline] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (name && deadline) {
  //     try {
  //       await createCplantoS(name, deadline);
  //       setName("");
  //       setDeadline("");
  //       console.log("CplantoS created successfully!");
  //     } catch (error) {
  //       console.error("Error creating CplantoS:", error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const fetchCplantoS = async () => {
  //     try {
  //       const cplantoSList = await getCplantoS();
  //       console.log(cplantoSList);
  //       // Update state or perform further operations with the CplantoS list
  //     } catch (error) {
  //       console.error("Error fetching CplantoS:", error);
  //     }
  //   };
  
  //   fetchCplantoS();
  // }, []);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchCplantoS = async () => {
  //     try {
  //       const cplantoSList = await getCplantoS();
  //       console.log(cplantoSList);
  //       setData(cplantoSList);
  //       // Update state or perform further operations with the CplantoS list
  //     } catch (error) {
  //       console.error("Error fetching CplantoS:", error);
  //     }
  //   };

  //   fetchCplantoS();
  // }, []);
  
  

  return (
    <>
      {/* <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-left space-y-2 sm:space-y-2">
          <div className="sm:flex-auto">
            <h1 className="text-base text-left mt-6 font-semibold leading-6 text-gray-900">
              Supervisors plan
            </h1>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <input
              type="date"
              placeholder="Deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2 sm:ml-4">
            <button
              onClick={handleSubmit}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div> */}

<div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-base text-left mt-6 font-semibold leading-6 text-gray-900">
            Supervisors plan
          </h1>
          <div className="mt-2">
            {/* <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}

            <select
            value={name}
            className="w-full px-4 py-2 mb-4 border rounded"
            onChange={(e) => setName(e.target.value)}
          >
            <option value="E1">Evaluation 1</option>
            <option value="E2">Evaluation 2</option>
            <option value="E3">Evaluation 3</option>
            <option value="E4">Evaluation 4</option>
            <option value="E5">Evaluation 5</option>
            <option value="E6">Evaluation 6</option>
            <option value="E7">Evaluation 7</option>
            <option value="E8">Evaluation 8</option>
            <option value="E9">Evaluation 9</option>
          </select>

          </div>
          <div className="mt-2">
            <input
              type="date"
              placeholder="Deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="block w-52 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                     
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
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data && data.map((item) => (
                      <tr key={item._id}>
                       
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.deadline.split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        
                        <button
                          //  onClick={navigate('/splandetails')}
                          // onClick={() =>
                          //   navigate('/splandetails') 
                          // }
                          onClick={() => handleViewClick(item)}
                           type="button"
                          className="block rounded-md bg-blue-600 px-3 py-2 text-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                          View
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
      </div>


    </>
  )
}

export default CplantoS