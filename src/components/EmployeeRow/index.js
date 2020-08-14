import React from "react";
import "./style.css";

function EmployeeRow(props) {
   return (
      <div className="employeeRow">
         <div>
            <img src={props.photo} alt={props.name} />
         </div>
         <div>{props.name}</div>
         <div>{props.phone_number}</div>
         <div>{props.email}</div>
         <div>{props.dob}</div> 
      </div>
   );
};

export default EmployeeRow;
