// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { updateInterim } from "../../../DB/db";

// const Thirdinterim = () => {
//   const navigate = useNavigate();
//   const [performance, setperformance] = useState(0);

//     const [formValues, setformValues] = useState({
//       peroformanceIndiactor:"",
//       range:"",
//       systemSpec:"",
//       designSpec:"",
//       standardTech:"",
//       presentSkill:"",
//       domainKnowledge:"",
//       comments:"",
  
//       progress:"",
//       demonstration:"",
//       conformance:"",
//       innovation:"",
//       presentation:"",
//       organization:"",
//       result:"",
//       integration:""
//     })
   
  
//     const handleProgressed = (params) => setformValues({...formValues,progress:params.target.value});
//     const handledemonstration = (params) => setformValues({...formValues,demonstration:params.target.value});
//     const handleconformance = (params) => setformValues({...formValues,conformance:params.target.value});
//     const handleresult = (params) => setformValues({...formValues,result:params.target.value});
  
//     const handleinnovation = (params) => setformValues({...formValues,innovation:params.target.value});
//     const handlpresentation = (params) => setformValues({...formValues,presentation:params.target.value});
//     const handleintegration = (params) => setformValues({...formValues,integration:params.target.value});
  
    
//     const handleorganization = (params) => setformValues({...formValues,organization:params.target.value});
   
//     const handlechange = (params) => {
//       let range = params.target.value;
//       setperformance(range/20)
//        setformValues({...formValues,range:range / 20})
//     };
  
//     const handlePerformance = (params) => { 
  
//       setformValues({...formValues,peroformanceIndiactor:params.target.value})
   
//      }
    
//      const handlesystemSpec = (params) => {  
//       setformValues({...formValues,systemSpec:params.target.value})
  
//       }
//       const handledesignSpec = ( params) => {  
//       setformValues({...formValues,designSpec:params.target.value})
  
//        }
  
//        const handleStandard = ( params) => {
//       setformValues({...formValues,standardTech:params.target.value})
        
//          }
  
//          const handlePresentation = (params) => {  
//       setformValues({...formValues,presentSkill:params.target.value})
  
//             }
  
//             const handledomainKnowledge = (params) => { 
//       setformValues({...formValues,domainKnowledge:params.target.value})
  
//              }
//              const handleComments = (params ) => {  
//               setformValues({...formValues,comments:params.target.value})
  
  
//               }


//               const submit = async()=>{
            
//                let res = await updateInterim(localStorage.getItem('taskPlanId'),formValues.peroformanceIndiactor,formValues.range,
//                formValues.systemSpec,formValues.designSpec,formValues.standardTech,formValues.domainKnowledge,
//                 formValues.comments,formValues.progress,formValues.demonstration,formValues.conformance,formValues.presentSkill,
//                 formValues.organization,formValues.standardTech,formValues.result,formValues.integration
//                )
//                console.log('res',res)
//               }


//   return (
//     <>
//       <h1 className="text-start font-semibold text-xl ">Final interim form</h1>
      // <div className="max-w-md mx-auto mt-6">
      //   <div className="mb-4">
      //     <label htmlFor="performance">Performance Indicator</label>
      //     <select
      //        onChange={(event)=>handlePerformance(event)}
      //       id="performance"
      //       className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      //     >
      //       <option>Exemplary</option>
      //       <option>Satisfactory</option>
      //       <option>Satisfactory with Few Changes</option>

      //       <option>Unsatisfactory</option>
      //     </select>
      //   </div>
//         <div className="mb-4">
//           <label htmlFor="range">Range</label>
//           <input
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             id="range"
//             defaultValue={0}
//             type="range"
//             onChange={(event) => handlechange(event)}
//           />
//           {performance}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="spec-confor">Specification Conformance</label>
//           <input
//            onChange={(event) => handleconformance(event)}
//             type="text"
//             id="spec-confor"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="origin-inno">Originality / Innovation</label>
//           <input
//            onChange={(event) => handleinnovation(event)}
//             type="text"
//             id="origin-inno"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sys-inn">System Integration</label>
//           <input
//              onChange={(event) => handleintegration(event)}
//             type="text"
//             id="sys-inn"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="presentation">Presentation </label>
//           <input
//            onChange={(event) => handlePresentation(event)}
//             type="text"
//             id="presentation"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="demonstration">Demonstration</label>
//           <input 
//             onChange={(event) => handledemonstration(event)}
//             type="text"
//             id="demonstration"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="domain-knowledge">Domain Knowledge</label>
//           <input
//            onChange={(event) => handledomainKnowledge(event)}
//             type="text"
//             id="domain-knowledge"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="org-report">
//             Organization and Clarity of the report
//           </label>
//           <input 
//             onChange={(event) => handleorganization(event)}
//             type="text"
//             id="org-report"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="tech-spec">Technical Specifications</label>
//           <input 
//            onChange={(event) => handleStandard(event)}
//             type="text"
//             id="tech-spec"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="result">Results and Conclusion</label>
//           <input 
//            onChange={(event) => handleresult(event)}
//             type="text"
//             id="result"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="comments">Comments</label>
//           <textarea
//              onChange={(event) => handleComments(event)}
//             id="comments"
//             className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           ></textarea>
//         </div>
//         <div className="space-x-7">
//           <button 
//            onClick={()=>submit()}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
//             Submit
//           </button>
//           <button
//             onClick={() => navigate("/evaluatorinterims")}
//             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Thirdinterim;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateInterim } from "../../../DB/db";

const Thirdinterim = () => {
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
    const handleconformance = (params) => setformValues({...formValues,conformance:params.target.value});
    const handleresult = (params) => setformValues({...formValues,result:params.target.value});
  
    const handleinnovation = (params) => setformValues({...formValues,innovation:params.target.value});
    const handlpresentation = (params) => setformValues({...formValues,presentation:params.target.value});
    const handleintegration = (params) => setformValues({...formValues,integration:params.target.value});
  
    
    const handleorganization = (params) => setformValues({...formValues,organization:params.target.value});
   
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
      const handledesignSpec = ( params) => {  
      setformValues({...formValues,designSpec:params.target.value})
  
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
    <>
      {/*<h1 className="text-start font-semibold text-xl ">Final interim form</h1>
      <div className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label htmlFor="performance">Performance Indicator</label>
          <select
             onChange={(event)=>handlePerformance(event)}
            id="performance"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>Exemplary</option>
            <option>Satisfactory</option>
            <option>Satisfactory with Few Changes</option>

            <option>Unsatisfactory</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="range">Range</label>
          <input
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="range"
            defaultValue={0}
            type="range"
            onChange={(event) => handlechange(event)}
          />
          {performance}
        </div>
        <div className="mb-4">
          <label htmlFor="spec-confor">Specification Conformance</label>
          <input
           onChange={(event) => handleconformance(event)}
            type="text"
            id="spec-confor"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="origin-inno">Originality / Innovation</label>
          <input
           onChange={(event) => handleinnovation(event)}
            type="text"
            id="origin-inno"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sys-inn">System Integration</label>
          <input
             onChange={(event) => handleintegration(event)}
            type="text"
            id="sys-inn"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="presentation">Presentation </label>
          <input
           onChange={(event) => handlePresentation(event)}
            type="text"
            id="presentation"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="demonstration">Demonstration</label>
          <input 
            onChange={(event) => handledemonstration(event)}
            type="text"
            id="demonstration"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="domain-knowledge">Domain Knowledge</label>
          <input
           onChange={(event) => handledomainKnowledge(event)}
            type="text"
            id="domain-knowledge"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="org-report">
            Organization and Clarity of the report
          </label>
          <input 
            onChange={(event) => handleorganization(event)}
            type="text"
            id="org-report"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tech-spec">Technical Specifications</label>
          <input 
           onChange={(event) => handleStandard(event)}
            type="text"
            id="tech-spec"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="result">Results and Conclusion</label>
          <input 
           onChange={(event) => handleresult(event)}
            type="text"
            id="result"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comments">Comments</label>
          <textarea
             onChange={(event) => handleComments(event)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="space-x-7">
          <button 
           onClick={()=>submit()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Submit
          </button>
          <button
            onClick={() => navigate("/evaluatorinterims")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Back
          </button>
        </div>
  </div>*/}
     <h1 className="text-2xl font-semibold text-center">Final Interim Evaluation Form</h1>
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
      <tr>
    <td >
    <label htmlFor="spec-confor" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Specification Conformance
    </label>
      
    </td>
    <td >
    {/*<input 
            onChange={(e)=>handleconformance(e)}
            type="text"
            id="spec-confor"
//            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mr-20 "

/>*/}

<select
            id="spec-confor"
            onChange={(event)=>handledomainKnowledge(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    </td>
    <td className="border text-sm p-2">Present a fully functioning working product as per given specifications (requirements, design and implementation).
Show strong effort was made in breaking new ground and 
building an exciting system/product.</td>
    <td className="border text-sm p-2">Present a working product which implements all desired functions as per given specifications (requirements, design and implementation). Offer some new way of doing things or tasks through the new system/product. 
</td>
    <td className="border text-sm p-2">Present a working product but some desired functions are not supported or malfunctioning as per given specification (requirements, design and implementation). Simply show how the application works. </td>
    <td className="border text-sm p-2">The product is incomplete or does not work. Show little effort in building the application. </td>
  </tr>
  <tr>
    <td >
    <label htmlFor="origin-inno" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Originality / Innovation
    </label> 
    
    </td>
    <td >
    {/*<input
            type="text"
            id="origin-inno"
            onChange={(event)=>handleinnovation(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}
    
<select
            id="origin-inno"
            onChange={(event)=>handleinnovation(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    

    </td>
    <td className="border text-sm p-2">Project presents several original/inventive elements demonstrating strong application of Software Engineering principles.</td>
    <td className="border text-sm p-2">Project presents some original/inventive elements demonstrating application of Software Engineering principles most of the time. </td>
    <td className="border text-sm p-2">Project presents very few original/inventive elements with partial application of Software Engineering principles.</td>
    <td className="border text-sm p-2">Project lacks any original/inventive element demonstrating lack of application of Software Engineering principles.</td>
  </tr>
  <tr>
    <td >
    <label htmlFor="sys-inn" style={{ fontSize: "17px", fontWeight: "bold" }}>
    System Integration
    </label>
    </td>
    <td >
      {/*<input
           onChange={(e)=>handleintegration(e)}
             type="text"
             id="sys-inn"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}

<select
            id="sys-inn"
            onChange={(event)=>handleintegration(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    </td>
    <td className="border text-sm p-2">System is well integrated with different components working correctly as a whole meeting all interface requirements.</td>
    <td className="border text-sm p-2">Components integration is carried out with care however, some components may not work under certain conditions.</td>
    <td className="border text-sm p-2">Components work independently but cause system failure very often when work with other system components. </td>
    <td className="border text-sm p-2">No system integration of system components leading to a non-usable system. </td>
  </tr>
  <tr>
  <td >
    <label htmlFor="demonstration" style={{ fontSize: "17px", fontWeight: "bold",marginRight: "20px" }}>
    Demonstration
    </label>

    </td>
    <td >
    {/*<input
          onChange={(e)=>handledemonstration(e)}
            type="text"
            id="demonstration"
//            className="block w-full md:w-60 lg:w-40 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>*/}
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

    </td>
    <td className="border text-sm p-2">Demonstration techniques are imaginative or effective in conveying ideas to the audience.</td>
    <td className="border text-sm p-2">Demonstration techniques are effective in conveying main ideas.</td>
    <td className="border text-sm p-2">Demonstration only conveys main ideas.</td>
    <td className="border text-sm p-2">Demonstration failed to capture the interest of the audience and/or is confusing in what was communicated.</td>
  </tr>

  <tr>
  <td >
    <label htmlFor="presentation" style={{ fontSize: "17px", fontWeight: "bold",marginRight: "20px" }}>
    Presentation
    </label>

    </td>
    <td >
    {/*<input
          onChange={(e)=>handlePresentation(e)}
            type="text"
            id="presentation"
//            className="block w-full md:w-60 lg:w-40 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />*/}

          <select
            id="presentation"
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
    <td className="border text-sm p-2">Multimedia presentation is comprehensive covering all aspects of project with appropriate use of graphs, tables and figures. Oral presentation is fluent, confident and engaging.</td>
    <td className="border text-sm p-2">Multimedia presentation covers most of the important aspects of project with fair use of graphs, tables and figures. Oral presentation is moderate in fluency, confidence and audience engagement. </td>
    <td className="border text-sm p-2">Multimedia presentation covers some of the important aspects of project with limited use of graphs, tables and figures. Oral presentation is poor in fluency, confidence and audience engagement.</td>
    <td className="border text-sm p-2">Multimedia presentation misses the important aspects of project with no use of graphs, tables and figures. Oral presentation is unstructured and demonstrates confusion & lack of confidence.</td>
  </tr>

  <tr>
    <td >
    <label htmlFor="domain-knowledge" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Domain Knowledge
    </label>
    
    </td>
    <td >
    {/*<input
          onChange={(e)=>handledomainKnowledge(e)}
            type="text"
            id="domain-knowledge"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />*/}

<select
            id="domain-knowledg"
            onChange={(event)=>handledomainKnowledge(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    </td>
    <td className="border text-sm p-2">Demonstrate full knowledge of the subject with explanations and elaboration. Answer questions correctly with sound rational.</td>
    <td className="border text-sm p-2">Explain and elaborate most of the time. Answers most of the questions correctly. </td>
    <td className="border text-sm p-2">Only basic concepts are interpreted. Answer basic questions only</td>
    <td className="border text-sm p-2">No domain knowledge and unable to answer question</td>
  </tr>
  
  <tr>
    <td >
    <label htmlFor="org-report" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Organization and Clarity of the report
    </label>
    
    </td>
    <td >
    {/*<input
          onChange={(e)=>handleorganization(e)}
            type="text"
            id="org-report"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />*/}
    <select
            id="org-report"
            onChange={(event)=>handleorganization(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>

    </td>
    <td className="border text-sm p-2">Report is well organized and clearly written.Use of vocabulary, grammar and writing style shows proficiency in technical writing skills. </td>
    <td className="border text-sm p-2">Report is organized and clearly written for the most part.Use of vocabulary, grammar and writing style is good with fewer mistakes.</td>
    <td className="border text-sm p-2">Report has some organization and structure but lacks clarity.There are some mistakes in the use of vocabulary, grammar and inconsistency in writing style.</td>
    <td className="border text-sm p-2">Report lacks both organization and clarity and frequent mistakes in the use of vocabulary, grammar and no writing style</td>
  </tr>\
  

  <tr>
    <td >
    <label htmlFor="tech-spec" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Technical Specifications
    </label>
    
    </td>
    <td >
    {/*<input
          onChange={(e)=>handleStandard(e)}
            type="text"
            id="tech-spec"
            className
            ="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />*/}

<select
            id="tech-spec"
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
    <td className="border text-sm p-2">All technical specifications (software requirements, design specifications, implementation details, and user manual) are documented in the report with in depth analysis of requirements and design choices.</td>
    <td className="border text-sm p-2">Majority of the technical specifications (software requirements, design specifications, implementation details and user manual) is documented in the report with some analysis of requirements and design choices made. </td>
    <td className="border text-sm p-2">Some of the technical specifications (software requirements, design specifications, implementation details and user manual) is documented in the report with very less analysis of requirements and design choices carried out.</td>
    <td className="border text-sm p-2">Technical specification (software requirements, design specifications, implementation details and user manual) is incomplete with no analysis or reflection.</td>
  </tr>


  
  <tr>
    <td >
    <label htmlFor="result" style={{ fontSize: "17px", fontWeight: "bold" }}>
    Results and Conclusion
    </label>
    
    </td>
    <td >
    {/*<input
          onChange={(e)=>handleresult(e)}
            type="text"
            id="result"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  />*/}
  <select
            id="result................................................................................................................................................................................."
            onChange={(event)=>handleresult(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>

            <option>4</option>
            <option>5</option>
          </select>
    </td>
    <td className="border text-sm p-2">Results are shown with in-depth analysis and discussion covering all test cases with complete details.</td>
    <td className="border text-sm p-2">Results are shown with correct analysis. </td>
    <td className="border text-sm p-2">Results are shown with wrong analysis.</td>
    <td className="border text-sm p-2">Discussion on results is missing thus making the report inconclusive.</td>
  </tr>

  </tbody>
  </table>

<td >
<label htmlFor="comments" style={{ fontSize: "17px", fontWeight: "bold", marginRight: "30px" }}>
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
<div className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label htmlFor="performance">Performance Indicator</label>
          <select
             onChange={(event)=>handlePerformance(event)}
            id="performance"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>Exemplary</option>
            <option>Satisfactory</option>
            <option>Satisfactory with Few Changes</option>

            <option>Unsatisfactory</option>
          </select>
        </div>
        </div>
        
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

export default Thirdinterim;
