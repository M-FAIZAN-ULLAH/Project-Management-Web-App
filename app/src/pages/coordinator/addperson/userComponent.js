import React, { useEffect, useState } from "react";
import { getUserByRole } from "../../../DB/db";

const UserComponent = ({props}) => {
   
  const [data, setData] = useState([]);
  useEffect(() => {
    load();
  }, [props]);

  const load = async () => {
   
    let rs = await getUserByRole(props)
    console.log("🚀 ~ file: index.js:19 ~ load ~ rs:", rs);
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
                    {" "}
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((data) => (
                    <>
                      <tr>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        {data.firstName} {data.lastName}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data.email}  
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                        <img
                              className="h-11 w-11 rounded-full"
                              src={`http://localhost:8000/uploads/${data.profileImage}`}
                              alt=""
                            />
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

export default UserComponent;
