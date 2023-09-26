import React, { useState, useEffect } from "react";
import { addUser, getSingleUser, updateUser } from "../../../DB/db";
import { Navigate, useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';


const notificationMethods = [
  { id: "Supervisor", title: "Supervisor" },
  { id: "Student", title: "Student" },
  { id: "Evaluator", title: "Evaluator" },
];



const Addpersons = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("editId");
  console.log("data", id);

  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError]= useState();
  const [role, setRole] = useState('Evaluator');
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {   
    if (id === "-1") {
      setUser();    
    }
  }, []);

  const setUser = async () => {
    let data = await getSingleUser(id);

    setFirstName(data.firstName);
    setlastName(data.lastName);
    setEmail(data.email);
    setPassword(data.password);
    setRole(data.role);
    setProfileImage(data.profileImage);
  };

  const submit = async () => {
    try {
        if(!password || password.length<8) {
          toast.error("Password must be of 8 characters or more");
          return;
        }
        if(!email.endsWith("gmail.com") ) {
          toast.error("Email should be of the format example@gmail.com");
          return;
        }


      let response;
      if (id === "-1") {
       
        response = await updateUser(
          id,
          firstName,
          lastName,
          email,
          password,
          role,
          profileImage
        );
      } else {

         console.log(role,'role')
         response = await addUser(
         firstName,
           lastName,
           email,
           password,
           role,
           profileImage
       );
      }

      if (response) {
        setFirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setRole("");
        setProfileImage("");
        toast.success("User saved successfully")
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      {" "}
      <div className="space-y-12 p-3 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add User From
          </h2>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
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
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-1 sm:space-y-0">
  {notificationMethods.map((notificationMethod) => (
    <div key={notificationMethod.id} className="flex justify-between items-center">
      <input
        checked={role === notificationMethod.title} // Update checked attribute based on selected value
        name="notification-method"
        type="radio"
        onChange={(e) => setRole(notificationMethod.title)}
        className="h-4 w-4 ml-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
        {notificationMethod.title}
      </label>
    </div>
  ))}
</div>

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
              onClick={() => navigate("/hodhome")}
              type="button"
              className="bg-red-500 hover:bg-red-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpersons;
