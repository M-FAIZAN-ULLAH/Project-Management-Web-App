import React, { useEffect, useState } from "react";
import { getUserByRole, addRemarks } from "../../../DB/db";

const Addfeedback = () => {
  const [students, setStudents] = useState([]);
  const [sid, setSid] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    let data = await getUserByRole("Student");
    setStudents(data);
    setSid(data[0]._id);
  };

  const submit = async () => {
    let res = await addRemarks(sid, description);
    console.log("res", res);
    if (res) {
      setDescription("");
    }
  };

  return (
    <>
      <form>
        <div className="space-y-12 p-3 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Feedback
            </h2>

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  To
                </label>
                <div className="mt-2">
                  <select
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={sid}
                    onChange={(e) => setSid(e.target.value)}
                  >
                    {students.map((i) => (
                      <>
                        <option value={i._id}>
                          {i.firstName} {i.lastName}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

export default Addfeedback;
