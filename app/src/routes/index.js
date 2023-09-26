import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Hodhome from "../pages/Hod/Home";
import HodLayout from "../layout/hodLayout";
import Hodfeedback from "../pages/Hod/Feedback";
import Users from "../pages/Hod/users";
import ProjectDetail from "../pages/Hod/Projectdetail";
import Adduser from "../pages/Hod/adduser";
import StudentLayout from "../layout/studentLayout";
import StudentHome from "../pages/Student/Studenthome";
import Addproposal from "../pages/Student/Addpropsal";
import Plans from "../pages/Student/Plans";
import Studentstasks from "../pages/Student/Tasks";
import SupervisorLayout from "../layout/supervisorLayout";
import Supervisorhome from "../pages/supervisor/supervisorhome";

import Addidea from "../pages/supervisor/addidea";
import Addtask from "../pages/supervisor/addtask";
import Evaluatorlayout from "../layout/evaluaterLayout";
import Evaluatorhome from "../pages/evaluator/evaluatorhome";
import Projectdetails from "../pages/evaluator/projectdetails";
import Addfeedback from "../pages/supervisor/addfeedback";
import Supervisorfeedback from "../pages/supervisor/ideas";
import Proposals from "../pages/supervisor/task";
import Supervisortask from "../pages/supervisor/supervisortasks";
import Evaluteform from "../pages/evaluator/evaluateform";
import Evaluatorfeedback from "../pages/evaluator/evaluatorfeedback";
import Efeedbackform from "../pages/evaluator/feedbackform";
import Coordinatorlayout from "../layout/coordinatorLayout";
import Coordinatorhome from "../pages/coordinator/coordinatorhome";
import Taskhistory from "../pages/coordinator/taskhistory";
import Coordinatorfeedback from "../pages/coordinator/coordinatorfeedback";
import Coordinatorfeedbackform from "../pages/coordinator/coordinatorfeedbackform";
import Coordinatorplans from "../pages/coordinator/coordinatorplan";
import CoordinatorProposals from "../pages/coordinator/coordinatorproposals";
import AddStudent from "../pages/supervisor/addStudent/addStudent";
import Studentideas from "../pages/Student/ideas";
import Addperson from "../pages/coordinator/addperson";
import MyPieChart from "../pages/coordinator/Graph";
import TaskhistoryHod from "../pages/Hod/task";
import EvaluteformHod from "../pages/Hod/remarks";
import SubmittedTasks from "../pages/supervisor/submittedTasks";
import AcceptedIdeas from "../pages/supervisor/acceptedIdes";
import PlanHistory from "../pages/coordinator/planHistory";
import Supervisorideas from "../pages/supervisor/Ideas-tasks/supervisorIDeas";
import InterimMain from "../pages/evaluator/interims";
import Firstinterim from "../pages/evaluator/interimFirst";
import SecondInterim from "../pages/evaluator/interimSecond";
import Thirdinterim from "../pages/evaluator/interimThird";
import HodPlans from "../pages/Hod/planRemarks/planRemarks";
import AddPlanRemarks from "../pages/Hod/planRemarks/addplanRemarks";
import PlanDetails from "../pages/coordinator/planHistory/planDetails";

import ProposalForms from "../pages/supervisor/proposalForm";
import Cplantosupervisor from "../pages/supervisor/cplantosupervisor";


import Splandetails from "../pages/coordinator/splandetails";

import Details from "../pages/supervisor/task/details";
import DetailsC from "../pages/coordinator/coordinatorproposals/details";

import ProposalForms_idea from "../pages/Student/ideas/proposalform_idea";
import CplantoS from "../pages/coordinator/supervisorsplan/index";


import Cevaluation from "../pages/supervisor/cplantosupervisor/Cevaluation";

import Results from "../pages/coordinator/results/index"

import Rdetails from "../pages/coordinator/results/details"

import HODtaskhistory from "../pages/Hod/taskhistory/index"

import HODresult from "../pages/Hod/result/details"



const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HodLayout />}>
          <Route path="/hodhome" element={<Hodhome />} />
          <Route path="/feedback" element={<Hodfeedback />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
          <Route path="/adduser" element={<Adduser />} />
          {/* <Route path="/taskhistoryHod" element={<TaskhistoryHod/>}/> */}
          <Route path="/remarksHod" element={<EvaluteformHod/>} />
          <Route path="/HodPlans" element={<HodPlans/>}/>
          <Route path="/hodPlanRemarksForm" element={<AddPlanRemarks/>}/>
          <Route path="/hodtaskhistory" element={<HODtaskhistory/>}/> 
          <Route path="/hodresult" element={<HODresult/>}/>
        </Route>
        <Route element={<StudentLayout />}>
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/addproposal" element={<Addproposal />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/tasks" element={<Studentstasks />} />
          <Route path="/ideas" element={<Studentideas />} />
          <Route path="/proposalform_idea" element={<ProposalForms_idea />} />
        </Route>

        <Route element={<SupervisorLayout />}>
          <Route path="/supervisorhome" element={<Supervisorhome />} />
          <Route path="/supervisorfeedback" element={<Supervisorfeedback />} />
          <Route path="/Addfeedback" element={<Addfeedback />} />
          <Route path="/Proposals" element={<Proposals />} />
          <Route path="/Addidea" element={<Addidea />} />
          <Route path="/Addtask" element={<Addtask />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/Supervisortasks" element={<Supervisortask />} />
          <Route path="/tasksSubmited" element={<SubmittedTasks/>} />
          <Route path="/acceptedIdeas" element={<AcceptedIdeas/>} />
          <Route path="/idea-tasks" element={<Supervisorideas/>}/>
          <Route path="/proposalForms" element={<ProposalForms/>} />
          <Route path="/cplantoSupervisor" element={<Cplantosupervisor/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/Cevaluation" element={<Cevaluation/>} />
        </Route>

        <Route element={<Evaluatorlayout />}>
          
          <Route path="/evaluatorhome" element={<Evaluatorhome />} />
          <Route path="/projectdetails" element={<Projectdetails />} />
          <Route path="/evaluate" element={<Evaluteform />} />
          <Route path="/evaluatorfeedback" element={<Evaluatorfeedback />} />
          <Route path="/evaluatorfeedbackform" element={<Efeedbackform />} />
          <Route path="/interimMain" element={<InterimMain/>} />
          <Route path="/1interim" element={<Firstinterim />} />
          <Route path="/2interim" element={<SecondInterim />} />
          <Route path="/3interim" element={<Thirdinterim />} />

        </Route>
        <Route element={<Coordinatorlayout />}>
          <Route path="/coordinatorhome" element={<Coordinatorhome />} />
          <Route path="/coordinatorplan" element={<Coordinatorplans />} />
          <Route path="/addperson" element={<Addperson />} />
          <Route path="/rdetails" element={<Rdetails/>} />
          
          <Route path="/myPieChart" element={<MyPieChart />} />
          <Route path="/splandetails" element={<Splandetails />} />

          <Route path="/taskhistory" element={<Taskhistory />} />
          <Route path="/planHistory" element={<PlanHistory />} />
          <Route path="/proposaldetails" element={<DetailsC/>} />
          <Route path="/results" element={<Results/>} />
          <Route
            path="/coordinatorfeedback"
            element={<Coordinatorfeedback />}
          />
          <Route
            path="/coordinatorfeedbackform"
            element={<Coordinatorfeedbackform />}
          />
          <Route path="/coordinatorplan" element={<Coordinatorplans />} />
          <Route
            path="/coordinatorproposals"
            element={<CoordinatorProposals />}
          />
          <Route
            path="/planDetails"
            element={<PlanDetails/>}
          />
          <Route
            path="/CplantoS"
            element={<CplantoS/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
