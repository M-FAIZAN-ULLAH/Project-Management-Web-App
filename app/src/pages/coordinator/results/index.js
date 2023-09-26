import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { allProposal, addResult } from "../../../DB/db";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";


export default function Result() {



  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    let rs = await allProposal();
    setData(rs);
    console.log('on front', rs);
  };

  /////////////////////////////////////////


// const [ptitle , setPtitle] = useState("")
// const [gm , setGm] = useState("")
// const [interimA , setinterimA] = useState("")
// const [interimB , setinterimB] = useState("")
// const [interimC , setinterimC] = useState("")
// const [SupervisorR , setSupervisorR] = useState("")
const [Coordinator , setCoordinator] = useState("")
const [coordinatorValues, setCoordinatorValues] = useState([]);

const handleSubmit = async (ptitle,
  gm,
  interimA,
  interimB,
  interimC,
  SupervisorR,
  coordinatorValue,
  index
 ) => {
 

  const resultData = {
    Ftitle: ptitle,
    GM: gm,
    interimA: interimA,
    interimB: interimB,
    interimC: interimC,
    SupervisorR: SupervisorR,
    Coordinator: coordinatorValue,
  };

    try {
      await addResult(resultData);
      console.log("CplantoS created successfully!");
    } catch (error) {
      console.error("Error creating CplantoS:", error);
    }
};

const handleCoordinatorChange = (index, value) => {
  const updatedValues = [...coordinatorValues];
  updatedValues[index] = value;
  setCoordinatorValues(updatedValues);
};

const handleresutclick = () => {
  navigate("/rdetails")
}


///////////////////////////////



  return (



    <Card className="h-full w-full">
          <Button 
          onClick={handleresutclick}
   color="lightBlue" buttonType="outline" size="sm">
     View Final Result
   </Button>

      <CardHeader floated={false} shadow={false} className="rounded-none"></CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  FYP Title
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Group Members
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Interim 1
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Interim 2
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Final Interim
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Supervisor
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Coordinator
                </Typography>
              </th>
              {/* <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Result
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Grade
                </Typography>
              </th> */}
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"></th>
            </tr>
          </thead>
          <tbody>
            {data?.proposals?.map(({ proposal, user, std1, std2 }, index) => {
              const isLast = index === data?.proposals.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              const interim1Value = Math.floor(Math.random() * 5) + 1; // Random value between 1 and 5
              const interim2Value = Math.floor(Math.random() * 5) + 1; // Random value between 1 and 5
              const finalInterimValue = Math.floor(Math.random() * 11) + 40; // Random value between 40 and 50
              const supervisorValue = Math.floor(Math.random() * 11) + 20; // Random value between 20 and 30

              return (
                <tr key={proposal.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                          {proposal.title}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {std1.firstName} {std1.lastName} - {std2.firstName} {std2.lastName}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                  <div className="w-max">{interim1Value}</div>
                  </td>
                  <td className={classes}>
                  <div className="w-max">{interim2Value}</div>
                  </td>
                  <td className={classes}>
                  <div className="w-max">{finalInterimValue}</div>
                  </td>
                  <td className={classes}>
                    
                <Typography variant="small" color="blue-gray" className="font-normal">
                {data?.averages?.find(average => average?.ptitle === proposal?.title)?.average}
          
                      </Typography>
                  </td>
                  <td className={classes}>
                  <input
                        type="number"
                        min="0"
                        max="10"
                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Coordinator Marks"
                        value={coordinatorValues[index]}
                        onChange={(e) =>
                          handleCoordinatorChange(index, e.target.value)
                        }
                      />
                  </td>
                  {/* <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Add Result content here
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Add Grade content here
                    </Typography>
                  </td> */}
                  <td className={classes}>
                    <div className="flex items-center justify-center">
                      <Button
                       onClick={() => handleSubmit(proposal.title, `${std1.firstName} ${std1.lastName} - ${std2.firstName} ${std2.lastName}`, interim1Value, interim2Value, finalInterimValue,data?.averages?.find(average => average?.ptitle === proposal?.title)?.average,
                       coordinatorValues[index],
                       index )} 
                      color="lightBlue" buttonType="outline" size="sm">
                        Submit
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
  
}
