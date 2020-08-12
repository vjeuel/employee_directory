import React from "react";
import "./style.css";
import DirectoryColTitle from "../DirectoryColTitle";
import DirectoryEmployees from "../DirectoryEmployees";

function DirectoryContainer() {
   return (
      <div className="container">
         <DirectoryColTitle />
         <DirectoryEmployees />
      </div>
   );
};

export default DirectoryContainer;