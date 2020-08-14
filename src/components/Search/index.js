import React from "react";
import "./style.css";

function Search(props) {
   return (
      <form className="search">
         <input
            placeholder="search by name, date of birth, email or phone number"
            id="allSearch"
            type="text"
            value={props.search}
            onChange={props.onchange}
            // icon="search"
         />
      </form>
   );
};

export default Search;