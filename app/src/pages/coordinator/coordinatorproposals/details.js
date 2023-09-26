// import React, { useEffect, useState } from 'react';
// // import { useNavigate } from "react-router-dom";

// import { getPFormByTitle, getPFormById } from "../../../DB/db";
// import { useLocation } from 'react-router-dom';

// const Details = () => {
//   // const navigate = useNavigate();
//   const location = useLocation();
//   const [pForm, setPForm] = useState(null);

//   useEffect(() => {
//     loadPForm();
//   }, []);

//   const loadPForm = async () => {
//     try {
//       const title = location?.state?.proposal?.title;
//       if (title) {
//         const pFormData = await getPFormByTitle(title);
//         setPForm(pFormData);
//       }
//     } catch (error) {
//       console.error('Error fetching PForm:', error);
//     }
//   };
  



//   console.log(location?.state);


//   return (
//     <>
//       <div>details</div>
//       <hr></hr>
//       <div>
//        <h2>{location?.state?.proposal?.title}</h2>
//         <h2>{location?.state?.std1?.firstName} : {location?.state?.proposal?.phoneNo1}</h2>
//         <h2>{location?.state?.std2?.firstName} : {location?.state?.proposal?.phoneNo2}</h2>
//         <h2>{location?.state?.proposal?.objectives}</h2>
//         <h2>{location?.state?.proposal?.deleverables}</h2>
//         <h2>{location?.state?.proposal?.complexR}</h2>
//         <h2>{location?.state?.proposal?.background}</h2>
//         <hr></hr>
//         <h2>Form C</h2>
//         <hr></hr>
//         <h2>{location?.state?.user?.firstName} {location?.state?.user?.lastName}</h2>
//         <h2>{location?.state?.user?.role}</h2>
//       </div>
//       <div>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.objectives}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       <h2>{location?.state?.data?.[0]?.title}</h2>
//       </div>


// <div>

// {pForm && (
//         <div>
          
//           {/* <h2>Title: {pForm.title}</h2> */}
//           <h2>Telephone: {pForm.telephone}</h2>
//           <h2>Email: {pForm.email}</h2>
//           <h2>Designation: {pForm.designation}</h2>
//           <h2>Comments: {pForm.comments}</h2>
//         </div>
//       )}

// </div>
//     </>
//   );
// };

// export default Details;

import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getPFormByTitle, getPFormById } from "../../../DB/db";

const Details = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const [pForm, setPForm] = useState(null);

  useEffect(() => {
    loadPForm();
  }, []);

  const loadPForm = async () => {
    try {
      const title = location?.state?.proposal?.title;
      if (title) {
        const pFormData = await getPFormByTitle(title);
        setPForm(pFormData);
      }
    } catch (error) {
      console.error('Error fetching PForm:', error);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="w-3/4 bg-white shadow-md rounded p-4">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Title:</p>
              <p className="text-sm text-gray-500">Student 1:</p>
              <p className="text-sm text-gray-500">Student 2:</p>
              <p className="text-sm text-gray-500">Objectives:</p>
              <p className="text-sm text-gray-500">Deliverables:</p>
              <p className="text-sm text-gray-500">Complex Requirements:</p>
              <p className="text-sm text-gray-500">Background:</p>
            </div>
            <div>
              <p className="text-sm">{location?.state?.proposal?.title}</p>
              <p className="text-sm">
                {location?.state?.std1?.firstName} : {location?.state?.proposal?.phoneNo1}
              </p>
              <p className="text-sm">
                {location?.state?.std2?.firstName} : {location?.state?.proposal?.phoneNo2}
              </p>
              <p className="text-sm">{location?.state?.proposal?.objectives}</p>
              <p className="text-sm">{location?.state?.proposal?.deleverables}</p>
              <p className="text-sm">{location?.state?.proposal?.complexR}</p>
              <p className="text-sm">{location?.state?.proposal?.background}</p>
              
            </div>
          </div>
          <div className="my-8">
            {pForm && (
              <div>
                <p className="text-sm">
                  <span className="font-bold">Telephone:</span> {pForm.telephone}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Email:</span> {pForm.email}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Designation:</span> {pForm.designation}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Comments:</span> {pForm.comments}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate("/coordinatorproposals")
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Details;

