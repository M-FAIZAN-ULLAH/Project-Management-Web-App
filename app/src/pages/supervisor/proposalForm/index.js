import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import { addPForm } from '../../../DB/db'
import { getProposals} from "../../../DB/db";

// getUserProposals_id,



  const ProposalForms = () => {

    const navigate = useNavigate();

  // const [title, setTitle] = useState();
  const [telephone, settelephone] = useState();
  const [email, setEmail] = useState();
  const [designation, setdesignation] = useState();
  const [comments, setcomments] = useState();

  // const [supervisorId,setSupervisorId] = useState();


  //     useEffect(()=>{
  //       getSupervisors()
  //   },[])

  //   const getSupervisors = async()=>{
          
  //   let data = await getUserByRole('Supervisor');
  //   setSupervisorId(data[0]._id)
  //   }
  
////////////////////////////////////
const sid = localStorage.getItem('Id')

const [data, setData] = useState([]);

useEffect(() => {
  loadProposals();
}, []);

const loadProposals = async () => {
  let res = await getProposals('accept');
  setData(res);
  console.log(data[0].proposal.title)
};

///////////////////////////////




///////////////////////
// useEffect(() => {
//   if (data.length > 0) {
//     const _id = data[0]._id;
//     console.log(_id);
//     // Further use of _id...
//   }
// }, [data]);
  


  // const formData = {
  //   title: title,
  //   telephone: telephone,
  //   email: email,
  //   designation: designation,
  //   comments: comments,
  // };
  // const _id = data.map((i) => (i.title))
 
  // const newtitle =  data[0].proposal.title
  // setTitle(newtitle)

  const handleSubmit = async () => {
    const sid = localStorage.getItem('Id')
     
    console.log(data.proposal)
    console.log(telephone, email, designation, comments, sid)
    
    // console.log(formData)
    try {
      const newPForm = await addPForm(data[0].proposal.title, telephone, email, designation, comments,sid);
      console.log('New PForm:', newPForm);
    } catch (error) {
      console.error('Error adding PForm:', error);
    }
    navigate('/supervisorhome');
  };


  return (
    <>
    <div className="space-y-12 p-3 sm:space-y-16">
    <div>
      <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
        Propsal Form (C)
      </h2>
      {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
*/}
      <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
        {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title of Project being supervised
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3>
              {data[0].proposal.title}
            </h3>


            <input
              type="text"
              name="title"
              id="title"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={data.length > 0 ? data.filter(person => person.proposal.supervisorId === localStorage.getItem('Id')).map(person => person.proposal.title) : ''}
              value={data.length > 0 ? data.filter(person => person.proposal.supervisorId === localStorage.getItem('Id')).map(person => person.proposal.title) : ''}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div> */}

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="telephone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Telephone number
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Telephone number"
              value={telephone}
              onChange={(e) => settelephone(e.target.value)}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="designation"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Designation
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="designation"
              id="designation"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setdesignation(e.target.value)}
            />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="comments"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Supervisor Comments
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="comments"
              id="comments"
              className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Supervisor Comments"
              value={comments}
              onChange={(e) => setcomments(e.target.value)}
            />
          </div>
        </div>


  



      </div>

      <div className="mt-3 flex items-center justify-center gap-x-6">
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
        >
          Submit
        </button>
      </div>
    </div>
  </div>

</>
  )
}

export default ProposalForms