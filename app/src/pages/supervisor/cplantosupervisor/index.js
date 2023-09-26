import React, { useState, useEffect } from "react";
import { createCplantoS, getCplantoS, getProjectTitles } from "../../../DB/db";
import { useNavigate } from "react-router-dom";

function Cplantosupervisor() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()


  ////////////////////////


  // useEffect(() => {
  //   loadData();
  //   loadIdeas();
  // }, []);

  //let res = await getUserPropsals();

  // const loadData = async () => {
  //  let res =  await getProposals('accept2');
   
  //   setData(res);
  //   console.log('ok',res)
  // };



  ///////////////////////



  useEffect(() => {
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

    fetchCplantoS();
  }, []);

  const handleViewClick = (item) => {
    navigate('/Cevaluation', { state: { value: item.name } });
  };
  

  return (
    <>

<div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base text-left mt-6 font-semibold leading-6 text-gray-900">
              Coordinators Plan 
            </h1>
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data && data.map((item) => (
                      <tr key={item._id}>
                       
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        EVALUATION {item.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.deadline.split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <button 
                            // onClick={()=>navigate('/Cevaluation')}
                            onClick={() => handleViewClick(item)}
                           className="px-3 py-2 bg-blue-500 rounded-lg text-white">
                            Evaluate
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
  );
}

export default Cplantosupervisor;
