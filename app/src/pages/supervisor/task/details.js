// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import { getProposals } from "../../../DB/db";

// const Details = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     loadProposals();
//   }, []);

//   const loadProposals = async () => {
//     let res = await getProposals("pending");
//     setData(res);
//   };

//   return (
//     <>
//       <div>details</div>
//       {data.map((person) => (
//         <div key={person.id}>
//           <h2>
//             {person.std1.firstName} {person.std1.lastName} & {person.std2.firstName} {person.std2.lastName}
//           </h2>
//           <hr />
//           <h2>{person.proposal.title}</h2>
//           <hr />
//           <h2>{person.proposal.background}</h2>
//           <hr />
//           <h2>{person.proposal.objectives}</h2>
//           <hr />
//           <h2>{person.proposal.complexR}</h2>
//           <hr />
//           <h2>{person.proposal.tools}</h2>
//           <hr />
//           <h2>{person.proposal.delleverables}</h2>
//           <h2></h2>
//           <hr></hr>
//           <h2>{person.std1.firstName} : {person.proposal.phoneNo1}</h2>
//           <h2></h2>
//           <hr></hr>
//           <h2>{person.std2.firstName} : {person.proposal.phoneNo2}</h2>
//           <h2></h2>
//           <hr></hr>
//           <button
//                     onClick={() =>
//                       navigate('/Proposals') 
//                     }
//                     className="bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
//                   >
//                     Back 
//                   </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Details;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProposals } from '../../../DB/db';

const Details = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadProposals();
  }, []);

  const loadProposals = async () => {
    let res = await getProposals('pending');
    setData(res);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4">Details</h1>
          {data.map((person, index) => (
            <div key={person.id}>
              <div className={`${index !== 0 ? 'mt-4' : ''}`}>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Student 1:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">
                      {person.std1.firstName} {person.std1.lastName}
                    </h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Student 2:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">
                      {person.std2.firstName} {person.std2.lastName}
                    </h2>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className={`${index !== 0 ? 'mt-4' : ''}`}>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Title:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.title}</h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Background:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.background}</h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Objectives:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.objectives}</h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Complex Requirements:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.complexR}</h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Tools:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.tools}</h2>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">Deliverables:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.delleverables}</h2>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className={`${index !== 0 ? 'mt-4' : ''}`}>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">{person.std1.firstName} Phone No:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.phoneNo1}</h2>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className={`${index !== 0 ? 'mt-4' : ''}`}>
                <div className="flex mb-2">
                  <div className="w-1/2">
                    <h2 className="text-sm font-semibold">{person.std2.firstName} Phone No:</h2>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-sm">{person.proposal.phoneNo2}</h2>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
            </div>
          ))}
          <button
            onClick={() => navigate('/Proposals')}
            className="mt-4 bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;

