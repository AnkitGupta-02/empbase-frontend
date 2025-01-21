import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateEmployeeForm from "./components/Form/CreateEmployeeForm";

function App() {

  return (

    <BrowserRouter>
      <ToastContainer position="bottom-right"/>
      <Router />
    </BrowserRouter>
    // <CreateEmployeeForm/>
  );
}

export default App;
