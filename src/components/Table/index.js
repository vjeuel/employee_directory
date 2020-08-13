import React from "react";
import "./style.css";
import EmployeesData from "../EmployeesData";

function Table() {
   return (
      <main>
         <div className="tableHead">
            <div>photo</div>
            <div>first name</div>
            <div>last name</div>
            <div>phone number</div>
            <div>email</div>
            <div>dob</div>
         </div>
         <EmployeesData />
      </main>
   );
};

export default Table;