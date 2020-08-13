import React, { Component } from "react";
import "./style.css"
import employeesInfo from "../employees.json";
import EmployeeRow from "../EmployeeRow";

class EmployeesData extends Component {
   state = {
      employeesInfo
   };
   
   render() {
      return (
         <div>
            {this.state.employeesInfo.map(employee => (
               <EmployeeRow
                  id={employee.id}
                  key={employee.id}
                  photo={employee.photo}
                  first_name={employee.first_name}
                  last_name={employee.last_name}
                  phone_number={employee.phone_number}
                  email={employee.email}
                  dob={employee.dob}
               />
            ))}
         </div>
      );
   };
}

export default EmployeesData;