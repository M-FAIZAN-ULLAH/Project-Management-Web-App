
import React,{useEffect,useState} from "react";
import { allRemarks, deleteRemarks } from "../../../DB/db";


const Hodfeedback = () => {
  
  const [data,setData] = useState([]);
  useEffect(()=>{
    load()
  },[])


  const load = async()=>{
     let rs = await allRemarks();
     setData(rs);
    
  }


  const deleteRecord = async(id) =>{
      await deleteRemarks(id);  
      load();
  }
    
  return (
    <div className="px-4 sm:px-6 lg:px-8">
    
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  From
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            For
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                   Description
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                   Action
                  </th>
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((person) => (
                  <tr key={person.remark._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {person.user.firstName} {person.user.lastName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.std.firstName} {person.std.lastName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.remark.detail}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                    <button 
                     onClick={()=>deleteRecord(person.remark._id)}
                     className='px-3 py-2 bg-red-500 rounded-lg text-white'>Delete</button>
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
  )
}

export default Hodfeedback
