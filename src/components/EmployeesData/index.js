import React, { Component } from "react";
import "./style.css"
import employeesInfo from "../employees.json";
import EmployeeRow from "../EmployeeRow";
import Search from "../Search";


class EmployeesData extends Component {
   state = {
      employeesInfo,
      search: ""
   };
   
   onchange = event => {
      this.setState({ search: event.target.value });
   };

   render() {
      const filteredData = this.state.employeesInfo.filter(
         employee => {
            return (
               employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            )}
      );

      return (
         // <React.Fragment>
         <main>
            <div>
               <Search
                  search={this.state.search}
                  onchange={this.onchange}
               />
            </div>
            <div className="tableHead">
               <div>photo</div>
               <div>name</div>
               <div>phone number</div>
               <div>email</div>
               <div>dob</div>
            </div>
            <div>
               {filteredData.map(employee => (
                  <EmployeeRow
                     id={employee.id}
                     key={employee.id}
                     photo={employee.photo}
                     name={employee.name}
                     phone_number={employee.phone_number}
                     email={employee.email}
                     dob={employee.dob}
                  />
               ))}
            </div>
         </main>
         // {/* </React.Fragment> */}
      );
   };
}

export default EmployeesData;