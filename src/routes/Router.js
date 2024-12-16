import React from "react";
import Loging from "../pages/Loging";

import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Process1 from "../components/Process1";
import Sider from "../components/Sider";

import ProcessStatus from "../components/ProcessStatus";
import Paymentstatus from "../components/Paymentstatus";
import Pending from "../components/Pending";
import Dashboard from "../components/Dashboard";
import Project_managment from "../components/Project_management";
import Peoples from "../components/Peoples_details";
import Modula from "../modulas/Modula_institution";
import Modula_department from "../modulas/Modula_department";
import Modula_profession from "../modulas/Modula_profession";
import Process_statistic from "../form/Process_status-form";
import Institute_form from "../form/Process_details";

import Department_form from "../modulas/Department_form";

import Profession_form from "../modulas/Profession_form";

import Payment_form from "../form/Payment_form";
import Pending_form from "../form/Pending_form";
import Enterprocess_form from "../form/Enterprocess_form";
import Settings from "../components/Settings";
import Admin_profile from "../components/Admin_profile";
import Project_management_view from "../components/Project_management_view";
import Project_manager_dashboard from "../projectmanager/Project_manager_dashboard";
import Team_coordinator_dashboard from "../TeamCoordinator/Team_coordinator_dashboard.js";
import Internal_dashboard from "../inter/Internal_dashboard.js";
import Freelancer_dashboard from "../inter/Freelancer_dashboard.js";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project-management" element={<Project_managment/>} />
        <Route path="/entry-process" element={<Process1 />} />
        <Route path="/sider1" element={<Sider />} />
        <Route path="/processstatus" element={<ProcessStatus />} />
        <Route path="/paymentstatus" element={<Paymentstatus />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/people-details" element={<Peoples />} />
        <Route path="/admin-profile" element={<Admin_profile />} />
        <Route path ="/project-view" element={<Project_management_view />} />
        {/* modula */}
        <Route path="/modula-institution" element={<Modula />} />
        <Route path="/modula-department" element={<Modula_department />} />
        <Route path="/modula-profession" element={<Modula_profession />} />
        <Route path="/process-view-details" element={<Institute_form />} />
        <Route path="/department-form" element={<Department_form />} />
        <Route path="/profession-form" element={<Profession_form />} />
         {/* form */}
        <Route path="/enter_process_form" element={<Enterprocess_form />} />

        <Route path="/process-status-form" element={<Process_statistic />} />

        
        <Route path="/payment-form" element={<Payment_form />} />
        <Route path="/pending-form" element={<Pending_form />} />
        {/* dashboard */}
        <Route path="/project-manager-dashboard" element={<Project_manager_dashboard />} />
        <Route path="/team-coordinator-dashboard" element={<Team_coordinator_dashboard/>} />
        <Route path="/internal-dashboard" element={<Internal_dashboard/>} />
        <Route path="/freelancer-dashboard" element={<Freelancer_dashboard/>} />

      </Routes>
    </div>
  );
}

export default Router;


