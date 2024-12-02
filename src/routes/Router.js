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

import Process_statistic from "../form/Process_status-form";

import Payment_form from "../form/Payment_form";
import Pending_form from "../form/Pending_form";
import Enterprocess_form from "../form/Enterprocess_form";
import Settings from "../components/Settings";
import Admin_profile from "../components/Admin_profile";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/entry-process" element={<Process1 />} />
        <Route path="/sider1" element={<Sider />} />
        <Route path="/processstatus" element={<ProcessStatus />} />
        <Route path="/paymentstatus" element={<Paymentstatus />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin-profile" element={<Admin_profile />} />
         {/* form */}
        <Route path="/enter_process_form" element={<Enterprocess_form />} />

        <Route path="/process-status-form" element={<Process_statistic />} />

        
        <Route path="/payment-form" element={<Payment_form />} />
        <Route path="/pending-form" element={<Pending_form />} />

      </Routes>
    </div>
  );
}

export default Router;
