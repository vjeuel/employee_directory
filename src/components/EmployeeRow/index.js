import React from "react";
import "./style.css";

function EmployeeRow(props) {
   return (
      <tr className="employeeRow">
         <td><img alt="employee"></img></td>
         <td>{props.first_name}</td>
         <td>{props.last_name}</td>
         <td>{props.phone_number}</td>
         <td>{props.email}</td>
         <td>{props.dob}</td>
      </tr>
   );
};

export default EmployeeRow;
