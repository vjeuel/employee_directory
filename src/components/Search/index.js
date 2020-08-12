import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Search(props) {
   return (
      <form className="search">
          <i class="fas fa-search"></i>
         <input
           
            placeholder="&#xf002; search by name, date of birth, email or phone number"
            id="allSearch"
            />
         <FontAwesomeIcon icon={faSearch} />
      </form>
   );
};

export default Search;

// &#xf002 - Font Awesome Search
// style={{ fontFamily: FontAwesome }}