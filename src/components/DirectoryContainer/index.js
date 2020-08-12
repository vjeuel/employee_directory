import React from "react";
import "./style.css";
import Table from "../Table";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

function DirectoryContainer() {
   return (
      <div className="container">
         <Table>
            <TableHead />
            <TableBody />
         </Table>
      </div>
   );
};

export default DirectoryContainer;