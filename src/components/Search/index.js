import React from "react";
import "./style.css";

function Search(props) {
   return (
      <form className="search">
         <input
            placeholder="search by name"
            id="allSearch"
            type="text"
            value={props.search}
            onChange={props.onchange}
         />
      </form>
   );
};

export default Search;