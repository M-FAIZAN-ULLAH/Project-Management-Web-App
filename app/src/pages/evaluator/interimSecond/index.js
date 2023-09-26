import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateInterim } from "../../../DB/db";

const SecondInterim = () => {
  const navigate = useNavigate();
  const [performance, setperformance] = useState(0);
  const [formValues, setformValues] = useState({
    peroformanceIndiactor:"",
    range:"",
    systemSpec:"",
    designSpec:"",
    standardTech:"",
    presentSkill:"",
    domainKnowledge:"",
    comments:"",

    progress:"",
    demonstration:"",
    conformance:"",
    innovation:"",
    presentation:"",
    organization:"",
    result:"",
    integration:""
  })
 

  const handleProgressed = (params) => setformValues({...formValues,progress:params.target.value});
  const handledemonstration = (params) => setformValues({...formValues,demonstration:params.target.value});
 

 
  const handlechange = (params) => {
    let range = params.target.value;
    setperformance(range/20)
     setformValues({...formValues,range:range / 20})
  };

  const handlePerformance = (params) => { 

    setformValues({...formValues,peroformanceIndiactor:params.target.value})
 
   }
  
   const handlesystemSpec = (params) => {  
    setformValues({...formValues,systemSpec:params.target.value})

    }
  

     const handleStandard = ( params) => {
    setformValues({...formValues,standardTech:params.target.value})
      
       }

       const handlePresentation = (params) => {  
    setformValues({...formValues,presentSkill:params.target.value})

          }

          const handledomainKnowledge = (params) => { 
    setformValues({...formValues,domainKnowledge:params.target.value})

           }
           const handleComments = (params ) => {  
            setformValues({...formValues,comments:params.target.value})


            }


            const submit = async()=>{
            
             let res = await updateInterim(localStorage.getItem('taskPlanId'),formValues.peroformanceIndiactor,formValues.range,
             formValues.systemSpec,formValues.designSpec,formValues.standardTech,formValues.domainKnowledge,
              formValues.comments,formValues.progress,formValues.demonstration,formValues.conformance,formValues.presentSkill,
              formValues.organization,formValues.standardTech,formValues.result,formValues.integration
             )
             console.log('res',res)
            }



  return (
    // <>
    //   <h1 className="text-start font-semibold text-xl ">Interim 2nd Form</h1>
    //   <div className="max-w-md mx-auto mt-6">
    //   <div className="mb-4">
    //       <label htmlFor="performance">Performance Indicator</label>
    //       <select
    //         id="performance"
    //         onChange={(event)=>handlePerformance(event)}
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       >
    //         <option>Exemplary</option>
    //         <option>Satisfactory</option>
    //         <option>Satisfactory with Few Changes</option>

    //         <option>Unsatisfactory</option>
    //       </select>
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="range">Range</label>
    //       <input
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //         id="range"
    //         defaultValue={0}
    //         type="range"
    //         onChange={(event) => handlechange(event)}
    //       />
    //       {performance}
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="system-spec">System Specification</label>
    //       <input 
    //         onChange={(e)=>handlesystemSpec(e)}
    //         type="text"
    //         id="system-spec"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="system-spec">Project Progress</label>
    //       <input
    //         type="text"
    //         id="proj-prog"
    //         onChange={(e)=>handleProgressed(e)}
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="standard-techniques">
    //         Use of Standard Techniques
    //       </label>
    //       <input
    //       onChange={(e)=>handleStandard(e)}
    //         type="text"
    //         id="standard-techniques"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="demonstration">Demonstration</label>
    //       <input
    //         onChange={(e)=>handledemonstration(e)}
    //         type="text"
    //         id="demonstration"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="presentation-skills">Presentation Skills</label>
    //       <input
    //       onChange={(e)=>handlePresentation(e)}
    //         type="text"
    //         id="presentation-skills"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="domain-knowledge">Domain Knowledge</label>
    //       <input
    //       onChange={(e)=>handledomainKnowledge(e)}
    //         type="text"
    //         id="domain-knowledge"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="comments">Comments</label>
    //       <textarea
    //          onChange={(e)=>handleComments(e)}
    //         id="comments"
    //         className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    //       ></textarea>
    //     </div>
    //     <div className="space-x-7">
    //       <button 
    //        onClick={()=>submit()}
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
    //         Submit
    //       </button>
    //       <button
    //         onClick={() => navigate("/evaluatorinterims")}
    //         className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
    //       >
    //         Back
    //       </button>
    //     </div>
    //   </div>
    // </>

    <>
  <h1 className="text-2xl font-semibold text-center">Interim 2nd Form</h1>
  <div className="max-w-4x3 mx-auto mt-6">
    <table className="border-collapse">
      <thead>
        <tr>
          <th     ></th>
          <th >Points</th>
          <th className="border">Exemplary (5)</th>
          <th className="border">Satisfactory (4 – 3)</th>
          <th className="border">Satisfactory with few changes (2 – 1)</th>
          <th className="border">Unsatisfactory (0)</th>
        </tr>
      </thead>
      <tbody>
  {/* Rows */} 
  {/* <tr>
    <td >
      <label htmlFor="performance">Performance Indicator</label>
    </td>
    <td className="border">
      <select
        id="performance"
        onChange={(event) => handlePerformance(event)}
        className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      >
        <option>Exemplary</option>
        <option>Satisfactory</option>
        <option>Satisfactory with Few Changes</option>
        <option>Unsatisfactory</option>
      </select>
    </td>
    <td className="border">Row 1, Column 2</td>
    <td className="border">Row 1, Column 3</td>
    <td className="border">Row 1, Column 4</td>
    <td className="border">Row 1, Column 5</td>
    <td className="border">Row 1, Column 6</td>
  </tr> */}
  {/* <tr>
    <td >
       <label htmlFor="range">Range</label>
    </td>
    <td className="border">Row 2, Column 2</td>
    <td className="border">Row 2, Column 3</td>
    <td className="border">Row 2, Column 4</td>
    <td className="border">Row 2, Column 5</td>
    <td className="border">Row 2, Column 6</td>
  </tr> */}
  <tr>
    <td >
    <label htmlFor="system-spec" style={{ fontSize: "18px", fontWeight: "bold" }}>
    System Specification
    </label>
      
    </td>
    <td >
    <select
            id="system-spec"
            onChange={(event)=>handlesystemSpec(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>

    {/*<input 
            onChange={(e)=>handlesystemSpec(e)}
            type="text"
            id="system-spec"
//            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mr-20 "

/>*/}
    </td>
    <td className="border text-sm p-2">System specification is well documented covering functional, non-functional requirements and any other constraints or requirements with significant analysis necessary to carry out such a project in the relevant domain.</td>
    <td className="border text-sm p-2">System specification documents most significant functional, non-functional requirements and some constraints or requirements are mentioned without any analysis necessary to carry out such a project in the relevant domain.</td>
    <td className="border text-sm p-2">System specification documents few functional, non-functional requirements missing on significant FR?NFRs without mentioning any constraints or analysis</td>
    <td className="border text-sm p-2">No system requirements are mentioned demonstrating lack of understanding of RE process</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="proj-prog" style={{ fontSize: "18px", fontWeight: "bold" }}>
    Project Progress
    </label> 
    
    </td>
    <td >

    <select
            id="proj-prog"
            onChange={(event)=>handleProgressed(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>

    {/*<input
            type="text"
            id="proj-prog"
            onChange={(e)=>handleProgressed(e)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}
    </td>
    <td className="border text-sm p-2">Student fully meets the required milestones showing timely completion of project meeting all project specifications</td>
    <td className="border text-sm p-2">Student has shown significance progress in  meeting the required milestones but requires little effort for timely completion of project meeting all project specifications</td>
    <td className="border text-sm p-2">Student is behind schedule in  meeting the required milestones and requires additional effort for timely completion of project meeting all project specifications</td>
    <td className="border text-sm p-2">Student is behind schedule in  meeting the required milestones showing no significant progress</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="standard-techniques" style={{ fontSize: "18px", fontWeight: "bold" }}>
    Use of Standard Techniques
    </label>
    </td>
    <td >
      {/*<input
           onChange={(e)=>handleStandard(e)}
             type="text"
             id="standard-techniques"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}

<select
            id="standard-techniques"
            onChange={(event)=>handleStandard(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>

    </td>
    <td className="border text-sm p-2">Latest implementation techniques are appropriately used</td>
    <td className="border text-sm p-2">Adequate level of implementation techniques is used</td>
    <td className="border text-sm p-2">Implementation  techniques need to be revised</td>
    <td className="border text-sm p-2">Poor implementation techniques are used</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="demonstration" style={{ fontSize: "18px", fontWeight: "bold",marginRight: "20px" }}>
  Demonstration
</label>
    
    </td>
    <td >

    <select
            id="demonstration"
            onChange={(event)=>handledemonstration(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    {/*<input
            onChange={(e)=>handledemonstration(e)}
            type="text"
            id="demonstration"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}
    </td>
    <td className="border text-sm p-2">Project demonstration (executable code/working hardware) meets all project specifications without any significant errors/faults</td>
    <td className="border text-sm p-2">Project demonstration (executable code/working hardware) meets majority of the project specifications with some errors/faults</td>
    <td className="border text-sm p-2">Project demonstration (executable code/working hardware) some of the  project specifications with major errors/faults.</td>
    <td className="border text-sm p-2">Project (hardware/software) cannot be demonstrated (run or executed) successfully</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="presentation-skills" style={{ fontSize: "18px", fontWeight: "bold",marginRight: "20px" }}>
    Presentation Skills
    </label>

    </td>
    <td >
    <select
            id="presentation-skills"
            onChange={(event)=>handlePresentation(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>

          </td>
    {/*<input
          onChange={(e)=>handlePresentation(e)}
            type="text"
            id="presentation-skills"
//            className="block w-full md:w-60 lg:w-40 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
*/}
    <td className="border text-sm p-2">Explains well with confidence and  formally dressed</td>
    <td className="border text-sm p-2">Explains with confidence</td>
    <td className="border text-sm p-2">Explains to some extent</td>
    <td className="border text-sm p-2">Unable to explain and informally dressed</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="domain-knowledge" style={{ fontSize: "18px", fontWeight: "bold" }}>
    Domain Knowledge
    </label>
    
    </td>
    <td >

    <select
            id="domain-knowledge"
            onChange={(event)=>handledomainKnowledge(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>


    {/*<input
          onChange={(e)=>handledomainKnowledge(e)}
            type="text"
            id="domain-knowledge"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}
    </td>
    <td className="border text-sm p-2">Demonstrate full knowledge of the subject with explanations and elaboration</td>
    <td className="border text-sm p-2">Explain and elaborate to some degree</td>
    <td className="border text-sm p-2">Only basic concepts are interpreted</td>
    <td className="border text-sm p-2">No domain knowledge and unable to answer question</td>
  </tr>
  
  {/*<tr>
    <td >
    <label htmlFor="comments" style={{ fontSize: "18px", fontWeight: "bold" }}>
    Comments
    </label>

    </td>
    {/*<td className="border">
    <textarea
             onChange={(e)=>handleComments(e)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
</td>*/}
    {/* <td className="border">Row 2, Column 3</td>
    <td className="border">Row 2, Column 4</td>
    <td className="border">Row 2, Column 5</td>
    <td className="border">Row 2, Column 6</td> 
  </tr>*/}
  {/* Add more rows as needed */}
</tbody>
{/*<td >
    <label htmlFor="comments" style={{ fontSize: "18px", fontWeight: "bold" }}>
    Comments
    </label>

    </td>

<td className="border">
    <textarea
             onChange={(e)=>handleComments(e)}
            id="comments"
            className="block w-full md:w-64 lg:w-96 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
    </td>*/}

    </table>

    <td >
    <label htmlFor="comments" style={{ fontSize: "18px", fontWeight: "bold", marginRight: "65px" }}>
    Comments
    </label>

    </td>

<td className="border">
    <textarea
             onChange={(e)=>handleComments(e)}
            id="comments"
            className="block w-full md:w-50 lg:w-80 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
    </td>

<div className="mb-4">
  <label htmlFor="range" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "30px" }}>
    Range
  </label>
  <input
    className="block w-full mt-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-bold"
    id="range"
    defaultValue={0}
    type="range"
    onChange={(event) => handlechange(event)}
  />
  {performance}
</div>


    <div className="flex justify-center mt-8">
  <button
    onClick={() => submit()}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2"
  >
    Submit
  </button>
  <button
    onClick={() => navigate("/evaluatorinterims")}
    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none ml-2"
  >
    Back
  </button>
</div>
  </div>
</>
 

  );
};

export default SecondInterim;
