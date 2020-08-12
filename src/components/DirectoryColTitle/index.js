import React, { Component } from "react";
import "./style.css"

function DirectoryColTitle() {
   return (
      <div className="rowTitle">
         <div className="colTitle">
            <div className="colTitleItem">photo</div>
            <div className="colTitleItem">name</div>
            <div className="colTitleItem">phone number</div>
           <div className="colTitleItem">email</div>
            <div className="colTitleItem">dob</div>
         </div>
      </div>
   );
};

export default DirectoryColTitle;