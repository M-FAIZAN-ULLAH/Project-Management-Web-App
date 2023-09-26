// import { Fragment } from 'react'
// import { useLocation } from "react-router-dom";

// const locations = [
//     {
//         name: 'Edinburgh',
//         people: [
//             { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
//             { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
//         ],
//     },
//     // More people...
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// export default function PlanDetails() {

//     const location = useLocation();
//     const person = location.state;
//     console.log('object', person);

//     return (
//         <div className="px-4 sm:px-6 lg:px-8">
//             <div className="sm:flex sm:items-center">
//                 <h1 className='text-xl font-bold'>Evaluation Details</h1>
//             </div>
//             <div>

//             </div>
//             <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                         {person?.taskPlan?.name
//                             ?(<>Name : {person?.taskPlan?.name} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.design
//                             ?(<>Design : {person?.taskPlan?.design} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.comments
//                             ?(<> Comments : {person?.taskPlan?.comments} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.comments
//                             ?(<> Comments : {person?.taskPlan?.comments} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.conformance
//                             ?(<> Confermence : {person?.taskPlan?.conformance} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.demonstration
//                             ?(<> Demonstration : {person?.taskPlan?.demonstration}</>) :(<></>)
//                         }
//                         {person?.taskPlan?.presentation
//                             ?(<> Presentation : {person?.taskPlan?.presentation} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.performance
//                             ?(<> Performance : {person?.taskPlan?.performance} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.progress
//                             ?(<> Progress : {person?.taskPlan?.progress} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.system
//                             ?(<> System : {person?.taskPlan?.system} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.organization
//                             ?(<> Organization : {person?.taskPlan?.organization} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.remarks
//                             ?(<> Remarks : {person?.taskPlan?.remarks} <br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.range
//                             ?(<> Range : {person?.taskPlan?.range}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.progress
//                             ?(<> Progress : {person?.taskPlan?.progress}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.presentation
//                             ?(<> Presentation : {person?.taskPlan?.presentation}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.performance
//                             ?(<> Performance : {person?.taskPlan?.performance}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.organization
//                             ?(<> Organization : {person?.taskPlan?.organization}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.innovation
//                             ?(<> Innovation : {person?.taskPlan?.innovation}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.domain
//                             ?(<> Domain : {person?.taskPlan?.domain}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.design
//                             ?(<> Design : {person?.taskPlan?.design}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.demonstration
//                             ?(<> Demonstration : {person?.taskPlan?.demonstration}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.conformance
//                             ?(<> Confermence : {person?.taskPlan?.conformance}<br /></>) :(<></>)
//                         }
//                         {person?.taskPlan?.comments
//                             ?(<> Comments : {person?.taskPlan?.comments}<br /></>) :(<></>)
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import { Fragment } from 'react';
// import { useLocation } from 'react-router-dom';

// const locations = [
//   {
//     name: 'Edinburgh',
//     people: [
//       { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
//       { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
//     ],
//   },
//   // More people...
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function PlanDetails() {
//   const location = useLocation();
//   const person = location.state;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <h1 className="text-xl font-bold">Evaluation Details</h1>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 gap-4">
//               {person?.taskPlan?.name && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Name:</p>
//                   <p className="text-sm">{person?.taskPlan?.name}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.design && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Design:</p>
//                   <p className="text-sm">{person?.taskPlan?.design}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.conformance && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Confermence:</p>
//                   <p className="text-sm">{person?.taskPlan?.conformance}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.demonstration && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Demonstration:</p>
//                   <p className="text-sm">{person?.taskPlan?.demonstration}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.presentation && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Presentation:</p>
//                   <p className="text-sm">{person?.taskPlan?.presentation}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.performance && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Performance:</p>
//                   <p className="text-sm">{person?.taskPlan?.performance}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.progress && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Progress:</p>
//                   <p className="text-sm">{person?.taskPlan?.progress}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.system && (
//                 <Fragment>
//                   <p className="text-sm font-medium">System:</p>
//                   <p className="text-sm">{person?.taskPlan?.system}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.organization && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Organization:</p>
//                   <p className="text-sm">{person?.taskPlan?.organization}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.remarks && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Remarks:</p>
//                   <p className="text-sm">{person?.taskPlan?.remarks}</p>
//                 </Fragment>
//               )}
//               {person?.taskPlan?.innovation && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Innovation:</p>
//                   <p className="text-sm">{person?.taskPlan?.innovation}</p>
//                 </Fragment>
//               )}
              
//               {person?.taskPlan?.comments && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Domain Knowledge:</p>
//                   <p className="text-sm">{person?.taskPlan?.comments}</p>
//                 </Fragment>
//               )}

              
// {person?.taskPlan?.range && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Overall Rating:</p>
//                   <p className="text-sm">{person?.taskPlan?.range}/5</p>
//                 </Fragment>
//               )}
              
//               {person?.taskPlan?.domain && (
//                 <Fragment>
//                   <p className="text-sm font-medium">Comments:</p>
//                   <p className="text-sm">{person?.taskPlan?.domain}</p>
//                 </Fragment>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Fragment } from 'react';
import { useLocation, useHistory, useNavigate } from 'react-router-dom';

const locations = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PlanDetails() {
  const location = useLocation();
  const person = location.state;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/planHistory")
  };

  return (
    <div className="flex items-start justify-center mt-10">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold">Evaluation Details</h1>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              {person?.taskPlan?.name && (
                <Fragment>
                  <p className="text-sm font-medium">Name:</p>
                  <p className="text-sm">{person?.taskPlan?.name}</p>
                </Fragment>
              )}
              {person?.taskPlan?.design && (
                <Fragment>
                  <p className="text-sm font-medium">Design:</p>
                  <p className="text-sm">{person?.taskPlan?.design}</p>
                </Fragment>
              )}
              {person?.taskPlan?.conformance && (
                <Fragment>
                  <p className="text-sm font-medium">Confermence:</p>
                  <p className="text-sm">{person?.taskPlan?.conformance}</p>
                </Fragment>
              )}
              {person?.taskPlan?.demonstration && (
                <Fragment>
                  <p className="text-sm font-medium">Demonstration:</p>
                  <p className="text-sm">{person?.taskPlan?.demonstration}</p>
                </Fragment>
              )}
              {person?.taskPlan?.presentation && (
                <Fragment>
                  <p className="text-sm font-medium">Presentation:</p>
                  <p className="text-sm">{person?.taskPlan?.presentation}</p>
                </Fragment>
              )}
              {person?.taskPlan?.performance && (
                <Fragment>
                  <p className="text-sm font-medium">Performance:</p>
                  <p className="text-sm">{person?.taskPlan?.performance}</p>
                </Fragment>
              )}
              {person?.taskPlan?.progress && (
                <Fragment>
                  <p className="text-sm font-medium">Progress:</p>
                  <p className="text-sm">{person?.taskPlan?.progress}</p>
                </Fragment>
              )}
              {person?.taskPlan?.system && (
                <Fragment>
                  <p className="text-sm font-medium">System:</p>
                  <p className="text-sm">{person?.taskPlan?.system}</p>
                </Fragment>
              )}
              {person?.taskPlan?.organization && (
                <Fragment>
                  <p className="text-sm font-medium">Organization:</p>
                  <p className="text-sm">{person?.taskPlan?.organization}</p>
                </Fragment>
              )}
              {person?.taskPlan?.remarks && (
                <Fragment>
                  <p className="text-sm font-medium">Remarks:</p>
                  <p className="text-sm">{person?.taskPlan?.remarks}</p>
                </Fragment>
              )}
              {person?.taskPlan?.innovation && (
                <Fragment>
                  <p className="text-sm font-medium">Innovation:</p>
                  <p className="text-sm">{person?.taskPlan?.innovation}</p>
                </Fragment>
              )}
              {person?.taskPlan?.comments && (
                <Fragment>
                  <p className="text-sm font-medium">Domain Knowledge:</p>
                  <p className="text-sm">{person?.taskPlan?.comments}</p>
                </Fragment>
              )}
              {person?.taskPlan?.range && (
                <Fragment>
                  <p className="text-sm font-medium">Overall Rating:</p>
                  <p className="text-sm">{person?.taskPlan?.range}/5</p>
                </Fragment>
              )}
              {person?.taskPlan?.domain && (
                <Fragment>
                  <p className="text-sm font-medium">Comments:</p>
                  <p className="text-sm">{person?.taskPlan?.domain}</p>
                </Fragment>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-100 text-right">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
            onClick={handleGoBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

