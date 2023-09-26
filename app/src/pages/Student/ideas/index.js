import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { downloadFile, submitIdea } from "../../../DB/db";

const Studentideas = () => {
  const navigate = useNavigate();
  const [projectIdeas, setprojectIdeas] = useState([]);
  const getIdeas = async () => {
    const url = "http://localhost:8000/api/idea/";
    const { data } = await axios.get(url);
    setprojectIdeas(data);
    console.log("🚀 ~ file: index.js:15 ~ getIdeas ~ data:", data);
  };
  useEffect(() => {
    getIdeas();
  }, []);

  const handleClick = async (fileName) => {
       let res = await downloadFile(fileName);
       console.log('response',res)
  };


  const submit = async(id,file)=>{
   
    // let res = await submitIdea(id,file);
   
    getIdeas();
    navigate('/proposalform_idea')
    
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base mt-3  font-semibold leading-6 text-gray-900">
              Ideas{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  File
                </th>

                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Apply</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {projectIdeas.map((pideas) => (
                <tr key={pideas._id}>
                  <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                    {pideas.title}
                    <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {pideas.proposalFile}
                  </td>

                  <td className="relative py-4 space-x-4 text-right text-sm font-medium">
                    <button
                      onClick={() => handleClick(pideas.proposalFile)}
                      className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg "
                    >
                      Download
                      
                    </button>
                    <button
                      onClick={() => submit(pideas._id)}
                      className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg "
                    >
                      Apply
                      
                    </button>
                   
                   
                    {/* <input
                    type="file"
                    name="Submit"           
                    className=" bg-green-800 hover:bg-gray-600 text-white px-2 py-2 rounded-lg "
                    onChange={(e) => {                   
                      submit(pideas._id,e.target.files[0])
                    }}    
                  /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Studentideas;
