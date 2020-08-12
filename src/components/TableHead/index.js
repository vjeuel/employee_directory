import React from "react";
import "./style.css"

function TableHead() {
   return (
         <tr className="tableHead">
            <th>photo</th>
            <th>first name</th>
            <th>last name</th>
            <th>phone number</th>
            <th>email</th>
            <th>dob</th>
         </tr>
   );
};

export default TableHead;