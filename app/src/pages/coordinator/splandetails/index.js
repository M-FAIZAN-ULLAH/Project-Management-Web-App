// import React, { useEffect, useState } from 'react';
// import { getCevaluationsByEname } from '../../../DB/db';
// import { useLocation } from 'react-router-dom';

// function Index() {
//   const [cevaluations, setCevaluations] = useState([]);
//   const [filteredCevaluations, setFilteredCevaluations] = useState([]);

//   const location = useLocation();
//   const { value } = location.state;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const cevaluationsData = await getCevaluationsByEname(value);
//         setFilteredCevaluations(cevaluationsData);
//       } catch (error) {
//         console.error('Error getting Cevaluations by Ename:', error);
//       }
//     };

//     fetchData();
//   }, [value]);

//   return (
//     <>
//       <div>
//         {filteredCevaluations.map((cevaluation) => (
//           <div key={cevaluation._id}>
//             <h>Title :{cevaluation.ptitle}</h>
//             <p>Project spefications :{cevaluation.projectS}</p>
//             <p>Project Implementation :{cevaluation.projectI}</p>
//             <p>Project MS :{cevaluation.projectMS}</p>
//             <p>Individual TM :{cevaluation.indivisualTW}</p>
//             <p>Demonstration :{cevaluation.fypDS}</p>
//             <br></br>
//             <hr></hr>
//           </div>
          
//         ))}
//       </div>
//     </>
//   );
// }

// export default Index;


import React, { useEffect, useState } from 'react';
import { getCevaluationsByEname } from '../../../DB/db';
import { useLocation } from 'react-router-dom';

function Index() {
  const [cevaluations, setCevaluations] = useState([]);
  const [filteredCevaluations, setFilteredCevaluations] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const location = useLocation();
  const { value } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cevaluationsData = await getCevaluationsByEname(value);
        setFilteredCevaluations(cevaluationsData);
      } catch (error) {
        console.error('Error getting Cevaluations by Ename:', error);
      }
    };

    fetchData();
  }, [value]);

  const handleCardExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCevaluations.map((cevaluation, index) => (
          <li
            key={cevaluation._id}
            className="bg-white shadow-md rounded p-4 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{cevaluation.ptitle}</h2>
            <div className="text-left">
              <p className="text-gray-600">
                Project specifications: {cevaluation.projectS}
              </p>
              {expandedCard === index ? (
                <>
                  <p className="text-gray-600">
                    Project Implementation: {cevaluation.projectI}
                  </p>
                  <p className="text-gray-600">
                    Project MS: {cevaluation.projectMS}
                  </p>
                  <p className="text-gray-600">
                    Individual TM: {cevaluation.indivisualTW}
                  </p>
                  <p className="text-gray-600">
                    Demonstration: {cevaluation.fypDS}
                  </p>
                </>
              ) : null}
              <button
                className="text-blue-500 underline mt-2"
                onClick={() => handleCardExpand(index)}
              >
                {expandedCard === index ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Index;
