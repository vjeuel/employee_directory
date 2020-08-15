import React, { Component } from "react";
import "./style.css"
import employeesInfo from "../employees.json";
import EmployeeRow from "../EmployeeRow";
import Search from "../Search";


class EmployeesData extends Component {
   // state = {
   //    employeesInfo,
   //    search: "",
   //    direction: {
   //       name: "asc",
   //    }
   // };

   constructor() {
      super()
      this.state = {
         employeesInfo,
         direction: {
            name: "asc",
            phone_number: "asc",
            email: "asc",
            dob: "asc"
         },
         search: ""
      }
      this.sortBy = this.sortBy.bind(this);
   }
   
   sortBy(key) {
      this.setState({
         employeesInfo: employeesInfo.sort((a, b) =>
            (this.state.direction[key] === "asc"
               ? a[key] - b[key] : b[key] - a[key]
            )),
         direction: {
            [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
         }
      });
   };

   onchange = event => {
      this.setState({ search: event.target.value });
   };

   render() {
      const filteredData = this.state.employeesInfo.filter(
         employee => {
            return (
               employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            )
         }
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
            <table>
               <thead className="tableHead">
                  <tr>
                     <th>photo</th>
                     <th>
                        <button
                           onClick={() => this.sortBy("name")}
                        >
                           name&nbsp;
                           <i class="fas fa-caret-up"></i>
                           <i class="fas fa-caret-down"></i>
                        </button>
                     </th>
                     <th>
                        <button
                           onClick={() => this.sortBy("phone_number")}
                        >
                           phone number&nbsp;
                           <i class="fas fa-caret-up"></i>
                           <i class="fas fa-caret-down"></i>
                        </button>
                     </th>
                     <th>
                        <button
                           onClick={() => this.sortBy("email")}
                        >
                           email&nbsp;
                           <i class="fas fa-caret-up"></i>
                           <i class="fas fa-caret-down"></i>
                        </button>
                     </th>
                     <th>
                        <button
                           onClick={() => this.sortBy("dob")}
                        >
                           dob&nbsp;
                           <i class="fas fa-caret-up"></i>
                           <i class="fas fa-caret-down"></i>
                        </button>
                     </th>
                  </tr>
               </thead>
               <tbody>
                     {filteredData.map(employee => (
                        <EmployeeRow
                           employeesInfo={this.state.employeesInfo}
                           sortBy={this.sortBy}   
                           id={employee.id}
                           key={employee.id}
                           photo={employee.photo}
                           name={employee.name}
                           phone_number={employee.phone_number}
                           email={employee.email}
                           dob={employee.dob}
                        />
                     ))}
               </tbody>
            </table>
         </main>
         // {/* </React.Fragment> */}
      );
   };
}

export default EmployeesData;