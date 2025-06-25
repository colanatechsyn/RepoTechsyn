import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/company/dashboard";
import Impulsionamento from "../Pages/company/paginaImpulsionamento";

const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Impulsionamento" element={<Impulsionamento />} />
    </Routes>
  );
};

export default CompanyRoutes;
