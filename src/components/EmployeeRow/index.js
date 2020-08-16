import React from "react";
import "./style.css";

function EmployeeRow(props) {
   const getImage = (id) => {
      switch (id) {
         case 1: return require("./images/Riley_Moore.jpg");
         case 2: return require("./images/Erin_Anderson.jpg");
         case 3: return require("./images/Elliot_May.jpg");
         case 4: return require("./images/Gene_Brooks.jpg");
         case 5: return require("./images/Franky_Cunningham.jpg");
         case 6: return require("./images/Skylar_Holland.jpg");
         case 7: return require("./images/Jo_Hutchinson.jpg");
         case 8: return require("./images/Elliot_Santana.jpg");
         case 9: return require("./images/Gail_Pitts.jpg");
         case 10: return require("./images/Charlie_Macias.jpg");
         case 11: return require("./images/Gabe_Brooks.jpg");
         case 12: return require("./images/Ash_Fletcher.jpg");
         case 13: return require("./images/Cameron_Elliot.jpg");
         case 14: return require("./images/Alexis_Riley.jpg");
         case 15: return require("./images/Silver_Lane.jpg");
         case 16: return require("./images/Jackie_Fox.jpg");
         case 17: return require("./images/Sam_Morgan.jpg");
         case 18: return require("./images/Ray_Wall.jpg");
         case 19: return require("./images/Alex_Willis.jpg");
         case 20: return require("./images/Elliot_Gates.jpg");
         case 21: return require("./images/Phoenix_Thompson.jpg");
         case 22: return require("./images/Mel_Ball.jpg");
         case 23: return require("./images/Jody_Hunt.jpg");
         case 24: return require("./images/Alexis_Butler.jpg");
         case 25: return require("./images/Ash_Poole.jpg");
         case 26: return require("./images/Clem_Stout.jpg");
         case 27: return require("./images/Sidney_Lucas.jpg");
         case 28: return require("./images/Lesley_Giles.jpg");
         case 29: return require("./images/Sam_Henderson.jpg");
         default: return "https://via.placeholder.com/150";
      }
   }

   return (
      <tr className="employeeRow">
         <td>
            <img src={getImage(props.id)} alt={props.name} />
         </td>
         <td>{props.name}</td>
         <td>{props.phone_number}</td>
         <td>{props.email}</td>
         <td>{props.dob}</td>
      </tr>
   );

};

export default EmployeeRow;