import React from "react";
import "./style.css";

function TableBody(props) {
   return (
      <tr className="rowEmployees">
         <td><img></img></td>
         <td>{props.first_name}</td>
         <td>{props.last_name}</td>
         <td>{props.phone_number}</td>
         <td>{props.email}</td>
         <td>{props.dob}</td>
      </tr>
   ); 
};  


export default TableBody;