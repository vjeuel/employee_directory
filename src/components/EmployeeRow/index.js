import React from "react";
import "./style.css";

function EmployeeRow(props) {
   return (
      <tr className="employeeRow">
         <td>
            <img src={props.photo} alt={props.name} />
         </td>
         <td>{props.name}</td>
         <td>{props.phone_number}</td>
         <td>{props.email}</td>
         <td>{props.dob}</td>
      </tr>
   );
};

export default EmployeeRow;