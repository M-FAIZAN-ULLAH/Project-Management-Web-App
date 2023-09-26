import React,{useState} from "react";
import { addRemarksToPlans } from "../../../DB/db";




const AddPlanRemarks = () => {
  
  const [remarks,setRemarks] = useState();
  let id = localStorage.getItem('planID');
  

  const submit = async() =>{
   let r =  await addRemarksToPlans(id,remarks);
   console.log(r);
   setRemarks('');
   }

  return (
    <>
      <form>
        <div className="space-y-12 p-3 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
             
            </p>

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
             
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add Remarks
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter re-marks"
                    numeric
                    value={remarks}
                    onChange={e=>setRemarks(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-x-6">
              <button
                 onClick={submit}
                type="button"
                className="bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPlanRemarks;
