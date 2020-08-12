import React, { Component } from "react";
import "./style.css"
import employees from "../employees.json";
import EmployeeRow from "../EmployeeRow";

class EmployeesData extends Component {
   state = {
      employees
   };
   
   render() {
      return (
         this.state.employees.map(employee => {
            const { id, photo, first_name, last_name, phone_number, email, dob } = employee;
            <EmployeeRow
               id={id}
               key={id}
               photo={photo}
               first_name={first_name.first_name}
               last_name={last_name}
               phone_number={phone_number}
               email={email}
               dob={dob}
            />
         })
      );
   };
}

export default EmployeesData;