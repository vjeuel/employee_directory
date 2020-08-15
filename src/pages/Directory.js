import React from "react"
import Title from "../components/Title";
import DirectoryContainer from "../components/DirectoryContainer";

function Directory() {
   return (
      <div>
         <Title>
            <h1>Employee Directory</h1>
            <h3>click on carets to filter by heading or use the search box to narrow your results</h3>
         </Title>
         <DirectoryContainer />
      </div>
   );
};

export default Directory;