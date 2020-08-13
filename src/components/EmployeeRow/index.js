import React from "react";
import "./style.css";

function EmployeeRow(props) {
   return (
      <div className="employeeRow">
         <div>
            <img src={props.photo} alt={props.first_name} />
         </div>
         <div>{props.first_name}</div>
         <div>{props.last_name}</div>
         <div>{props.phone_number}</div>
         <div>{props.email}</div>
         <div>{props.dob}</div>
      </div>
   );
};

export default EmployeeRow;
