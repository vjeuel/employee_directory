import React from "react";
import "./style.css";
import EmployeesData from "../EmployeesData";


function Table() {
   return (
      <table>
         <tr className="tableHead">
            <th>photo</th>
            <th>first name</th>
            <th>last name</th>
            <th>phone number</th>
            <th>email</th>
            <th>dob</th>
         </tr>
         <tr>
            <td>
               <EmployeesData />
            </td>
         </tr>
         
         
      </table>
   );
};

export default Table;