import React from "react";
import "./style.css";

function EmployeeRow(props) {
   return (
      <div className="rowEmployees">
         <img></img>
         <p>{props.first_name}</p>
         <p>{props.last_name}</p>
         <p>{props.phone_number}</p>
         <p>{props.email}</p>
         <p>{props.dob}</p>
      </div>
   ); 
};  


export default EmployeeRow;