import React,{useState} from 'react'
import {loginUser} from '../../DB/db'

import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();
   const[email,setEmail] = useState();
   const[password,setPassword] = useState();
   const [passwordError, setPasswordError] = useState(false)


   const login = async() =>{
        try{
          let res =  await loginUser(email,password)
          
          switch(res){
               
           case 'Co-ordinator':{
            navigate('coordinatorhome')
               break;
           }
           case 'Supervisor':{
            navigate('supervisorhome')
            break;
          }
          case 'HOD':{
            navigate('hodhome')
            break;
          }
          case 'Student':{
            navigate('studenthome')
               break;
           }
           case 'Evaluator':{
            navigate('evaluatorhome')
               break;
           }
           default:
           setPasswordError(true)
           break;
          }

      }catch(ex){
        console.log(ex)
     }
 
   }

    return (
      <>   
        <div className="bg-gray-800 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 h-screen">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <img
              className="mx-auto h-32 w-auto"
              src="https://crystalpng.com/wp-content/uploads/2022/06/bahria-university-logo.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
             FYP Management System
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <div className="space-y-6" >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={e=>setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {passwordError && (
                  <div className="text-red-500 text-sm">Invalid Credential. Please try again</div>
                )}
               
                <div>
                  <button
                    type="submit"
                    onClick={login}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </div>
  
       
            </div>
  
            
          </div>
        </div>
      </>
    )
  }
  