import React from "react";
import "./style.css";

function EmployeeRow(props) {
   const getImage = (id) => {
      switch (id) {
         case 1: return require("./images/Riley_Moore.jpg");
         default: return "https://via.placeholder.com/150";
         case 2: return require("./images/Erin_Anderson.jpg");
         default: return "https://via.placeholder.com/150";
      }
   }

   return (
      <tr className="employeeRow">
         <td>
            <img src={getImage(props.id)} alt={props.name} />
         </td>
         <td>{props.name}</td>
         <td>{props.phone_number}</td>
         <td>{props.email}</td>
         <td>{props.dob}</td>
      </tr>
   );

};

export default EmployeeRow;