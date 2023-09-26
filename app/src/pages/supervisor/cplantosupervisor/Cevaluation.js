import React, { useState, useEffect } from 'react';
import { addCevaluation, getCevaluations, getProposals_title, getProposals, getCplantoS } from '../../../DB/db';
import { useLocation } from 'react-router-dom';

function Cevaluation() {
  const [data, setData] = useState([]);
  const [projecttitle, setProjecttitle] = useState([]);

  const location = useLocation();
  const { value } = location.state;


  const [ptitle, setPtitle] = useState('');
  const [Ename, setEname] = useState('');
  const [projectS, setProjectS] = useState(0);
  const [projectI, setProjectI] = useState(0);
  const [projectMS, setProjectMS] = useState(0);
  const [indivisualTW, setIndivisualTW] = useState(0);
  const [fypDS, setFypDS] = useState(0);

  // setEname(value)

  const handleSubmit = async (e) => {
    setEname(value)
    console.log(Ename)
    e.preventDefault();
    const cevaluationData = {
      ptitle,
      Ename,
      projectS,
      projectI,
      projectMS,
      indivisualTW,
      fypDS,
    };

    try {
      const addedCevaluation = await addCevaluation(cevaluationData);
      // Do something with the addedCevaluation
      console.log(addedCevaluation);
    } catch (error) {
      console.error('Error adding Cevaluation:', error);
    }
  };

  const handleInputClick = (e, heading) => {
    setHeading(heading);
  };

  useEffect(() => {
    loadData_2();
  }, []);

  const loadData_2 = async () => {
    
    try {
      const res = await getProposals("accept2");
      const Titles = res.map((item) => item?.proposal.title);
      setProjecttitle(Titles);
      setData(res);
      console.log("Titles are here:", projecttitle);
      console.log("Data:", res);
    } catch (error) {
      console.error('Error fetching proposals:', error);
    }
  };

  const [heading, setHeading] = useState('');

  return (
    <>
      <div className="flex">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
          <select
            value={ptitle}
            onChange={(e) => setPtitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) => handleInputClick(e, 'Title Heading')}
          >
            <option value="">Select Title</option>
            {projecttitle.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>


          {/* <input
            type="String"
            placeholder={value}
            value={Ename}
            onChange={(e) => setEname(value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          /> */}
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Project S"
            value={projectS}
            onChange={(e) => setProjectS(parseInt(e.target.value))}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) =>
              handleInputClick(e,
                `Requirement and design specification are completed and correct.\n` +
    `[5] Requirement and design specification are completed and correct with incorrect format\n[4-3]\n\n` +
    `Requirement and design specification are completed but incorrect with improper format\n[2-1]\n\n` +
    `Requirement and design specification are incomplete and incorrect, with improper format\n[0]`
              )
            }
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Project I"
            value={projectI}
            onChange={(e) => setProjectI(parseInt(e.target.value))}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) =>
              handleInputClick(
                e,
                `Project is implemented as per the given specifications and meets all functional and nonfunctional requirements.\n[5]\n\nProject is implemented as per the given specifications and meets requirements to some extent.\n[4-3]\n\nAll specifications are not implemented and meets requirements to some extent.\n[2-1]\n\nProject is not implemented as per the given specifications and does not meet requirements\n[0]`
              )
            }
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Project MS"
            value={projectMS}
            onChange={(e) => setProjectMS(parseInt(e.target.value))}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) =>
              handleInputClick(
                e,
                `Regular meetings are held and progress is shown as per the milestones set for the project.\nAll deliverables are submitted within time.\n[5]\n\nRegular meetings are held and progress is shown as per the milestones set for the project.\nMost of the deliverables are submitted within time.\n[4-3]\n\nRegular meetings are held and progress is shown as per the milestones set for the project.\nFew deliverables are submitted within time.\n[2-1]\n\nNo meetings are held and failed to submit deliverables within time.\n[0]`
              )
            }
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Individual TW"
            value={indivisualTW}
            onChange={(e) => setIndivisualTW(parseInt(e.target.value))}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) =>
              handleInputClick(
                e,
                `Student took the lead role in project execution and demonstrated strong management skills.\n[5]\n\nMost of the time student took the lead role in project execution and was able to manage effectively.\n[3-4]\n\nMost of the time student took the lead role in project execution.\n[2-1]\n\nStudent did not participate in project execution and had poor management skills.\n[0]`
              )
            }
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="FYP DS"
            value={fypDS}
            onChange={(e) => setFypDS(parseInt(e.target.value))}
            className="w-full px-4 py-2 mb-4 border rounded"
            onClick={(e) =>
              handleInputClick(
                e,
                `Complete and correct documents were submitted before due date.\n[5]\n\nComplete and correct documents were submitted on due date.\n[4-3]\n\nComplete and partially correct documents were submitted on due date.\n[2-3]\n\nIncomplete, incorrect documents were submitted after due date.\n[0]`
              )
            }
          />

          <button
            type="submit"
            className="w-full py-2 px-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg w-[400px] h-68">
          <h3>{heading}</h3>
        </div>
      </div>
    </>
  );
}

export default Cevaluation;
