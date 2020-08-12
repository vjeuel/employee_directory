const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema(
   {
      employees: [
         {
            first_name: {
               type: String,
               trim: true,
               required: "Must enter first name"
            },
            last_name: {
               type: String,
               trim: true,
               required: "Must enter last name"
            },
            phone_number: {
               type: Number,
               trim: true,
               required: "Must enter phone number"
            },
            email: {
               type: String,
               trim: true,
               required: "Must enter email"
            },
            dob: {
               type: Date,
               trim: true,
               required: "Must enter date of birth"
            }
         }
      ]
   }
);

const Employees = mongoose.model("Employees", employeeSchema);
module.exports = Employees;