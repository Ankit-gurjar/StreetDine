# StreetDine

## Steps

Step 1 : git clone -> https://github.com/Ankit-gurjar/StreetDine.git <br/>
Step 2: Open the cloned folder in any ide like vs code <br/>
Step 3: Open Terminal <br/>
Step 4: run cmd in terminal `npm install` <br/>
Step 5: run cmd `npm start` if nodemone is installed as a global otherwise run `node server.js` <br/>

## Our server is running and ready for handling backend service related to the CURD operations for employees


## Services Implemented

> #### For DataBase management <br/>
> /api/auth/signup -> for registering an user <br/>
> /api/auth/login -> for login to account


> ### For Employee management
> /api/employee/employees/ ->   **POST**    for registering an Employee last name is not mandatory if employee dont have no issue <br/>
> /api/employee/employees/employeeid -> **GET** it will fetch all the details of the employeeid provided <br/>
> /api/employee/employees/employeeid -> **PUT** it will update the details of the employee <br/>
> /api/employee/employees/employeeid -> **DELETE** it will delete the employees all details of provided employeeid <br/>
