import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { deleteRemarks, getRemarks } from "../../../DB/db";

const Supervisorfeedback = () => {
  const navigate = useNavigate();
  const [data,setData] = useState([])

  useEffect(()=>{
     loadData();
  },[])

  const loadData = async()=>{

    let res = await getRemarks();
    setData(res)
  }
  


  const delereRecord = async(id)=>{

    await deleteRemarks(id);
    loadData()
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base text-center mt-6 font-semibold leading-6 text-gray-900">
              Feedback
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => navigate("/Addfeedback")}
              type="button"
              className="block mt-6 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Feedback
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
                        For
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person) => (
                      <tr key={person.remark._id}>
                       
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.user.firstName}  {person.user.lastName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.remark.detail}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <button 
                            onClick={()=>delereRecord(person.remark._id)}
                           className="px-3 py-2 bg-red-500 rounded-lg text-white">
                            Delete
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
};

export default Supervisorfeedback;
