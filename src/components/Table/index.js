import React from "react";
import "./style.css";

function Table(props) {
   return (
      <table>{props.children}</table>
   );
};

export default Table;