let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/employees", {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
});

let employeeSeed = [
   {
      employees: [
         {
            first_name: "Riley",
            last_name: "Moore",
            phone_number: "718-854-5922",
            email: "riley_moore@companyname.com",
            dob: 02/09/1992
         },
         {
            first_name: "Erin ",
            last_name: "Anderson",
            phone_number: "510-596-3045",
            email: "erin_anderson@companyname.com",
            dob: 05/28/1998
         },
         {
            first_name: "Elliot",
            last_name: "May",
            phone_number: "941-276-0935",
            email: "elliot_may@companyname.com",
            dob: 12/03/1982
         },
         {
            first_name: "Gene",
            last_name: "Brooks",
            phone_number: "617-258-2478",
            email: "gene_brooks@companyname.com",
            dob: 08/12/1985
         },
         {
            first_name: "Franky",
            last_name: "Cunningham",
            phone_number: "603-616-5754",
            email: "franky_cunningham@companyname.com",
            dob: 06/02/1989
         },
         {
            first_name: "Skylar",
            last_name: "Holland",
            phone_number: "610-273-8320",
            email: "skylar_holland@companyname.com",
            dob: 11/05/1987
         },
         {
            first_name: "Jo",
            last_name: "Hutchinson",
            phone_number: "210-200-4638",
            email: "jo_hutchinson@companyname.com",
            dob: 05/23/1982
         },
         {
            first_name: "Elliot",
            last_name: "Santana",
            phone_number: "214-200-3861",
            email: "elliot_santana@companyname.com",
            dob: 07/19/1991
         },
         {
            first_name: "Gail",
            last_name: "Pitts",
            phone_number: "214-207-2475",
            email: "gail_pitts@companyname.com",
            dob: 01/13/1988
         },
         {
            first_name: "Charlie",
            last_name: "Macias",
            phone_number: "214-293-3752",
            email: "charlie_macias@companyname.com",
            dob: 03/22/1994
         },
         {
            first_name: "Gabe",
            last_name: "Brooks",
            phone_number: "254-309-8208",
            email: "gabe_brooks@companyname.com",
            dob: 06/21/1999
         },
         {
            first_name: "Ash",
            last_name: "Fletcher",
            phone_number: "281-316-3272",
            email: "ash_fletcher@companyname.com",
            dob: 04/11/2000
         },
         {
            first_name: "Cameron",
            last_name: "Elliot",
            phone_number: "325-641-1834",
            email: "cameron_elliot@companyname.com",
            dob: 02/09/1993
         },
         {
            first_name: "Alexis",
            last_name: "Riley",
            phone_number: "409-727-5531",
            email: "alexis_riley@companyname.com",
            dob: 12/24/1997
         },
         {
            first_name: "Silver",
            last_name: "Lane",
            phone_number: "469-327-6137",
            email: "silver_lane@companyname.com",
            dob: 08/12/1991
         },
         {
            first_name: "Jackie",
            last_name: "Fox",
            phone_number: "469-233-3591",
            email: "jackie_fox@companyname.com",
            dob: 03/19/1985
         },
         {
            first_name: "Sam",
            last_name: "Morgan",
            phone_number: "214241-0467",
            email: "sam_morgan@companyname.com",
            dob: 10/01/1983
         },
         {
            first_name: "Ray",
            last_name: "Wall",
            phone_number: "469-242-2818",
            email: "ray_wall@companyname.com",
            dob: 02/05/1992
         },
         {
            first_name: "Alex",
            last_name: "Willis",
            phone_number: "972-231-5186",
            email: "alex_willis@companyname.com",
            dob: 09/12/1992
         },
         {
            first_name: "Elliot",
            last_name: "Gates",
            phone_number: "972-225-9225",
            email: "elliot_gates@companyname.com",
            dob: 08/02/1999
         },
         {
            first_name: "Phoenix",
            last_name: "Thomson",
            phone_number: "972-222-9834",
            email: "phoenix_thomson@companyname.com",
            dob: 09/18/1988
         },
         {
            first_name: "Mel",
            last_name: "Ball",
            phone_number: "214-814-8294",
            email: "mel_ball@companyname.com",
            dob: 12/11/1996
         },
         {
            first_name: "Jody",
            last_name: "Hunt",
            phone_number: "972-815-5655",
            email: "jody_hunt@companyname.com",
            dob: 02/12/1993
         },
         {
            first_name: "Alexis",
            last_name: "Butler",
            phone_number: "214-803-5541",
            email: "alexis_butler@companyname.com",
            dob: 07/23/1992
         },
         {
            first_name: "Ash",
            last_name: "Poole",
            phone_number: "601-676-6678",
            email: "ash_poole@companyname.com",
            dob: 01/29/1999
         },
         {
            first_name: "Clem",
            last_name: "Stout",
            phone_number: "724-761-3452",
            email: "clem_stout@companyname.com",
            dob: 09/22/2001
         },
         {
            first_name: "Sidney",
            last_name: "Lucas",
            phone_number: "919-269-4640",
            email: "sidney_lucas@companyname.com",
            dob: 11/02/1989
         },
         {
            first_name: "Lesley",
            last_name: "Giles",
            phone_number: "920-371-9004",
            email: "lesley_giles@companyname.com",
            dob: 04/21/1980
         },
         {
            first_name: "Sam",
            last_name: "Henderson",
            phone_number: "214-532-5088",
            email: "sam_henderson@companyname.com",
            dob: 12/19/1988
         }
      ]
   }
]