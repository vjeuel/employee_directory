import React, { Component } from "react";
import "./style.css"
import employees from "../employees.json";
import EmployeeRow from "../EmployeeRow";

class DirectoryEmployees extends Component {
   state = {
      employees
   };
   
   render() {
      return (
         <div className="rowEmployees">
            <div className="colTitle">
               {this.state.employees.map(employee => (
               <EmployeeRow
                  id = { employee.id }
                  key = { employee.id }
                  photo = { employee.photo }
                  first_name = { employee.first_name }
                  last_name = { employee.last_name }
                  phone_number = { employee.phone_number }
                  email = { employee.email }
                  dob={employee.dob}
               />
            ))}
         </div>
      </div>
      );
   };
}

export default DirectoryEmployees;