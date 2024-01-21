const expressAsyncHandler = require("express-async-handler");
const Employee = require("../models/employee");

const registerUser = expressAsyncHandler(async (req, res) => {
  const {
    employee_id,
    first_name,
    last_name,
    email_id,
    date_of_birth,
    department,
    position,
  } = req.body;

  if (
    !employee_id ||
    !first_name ||
    !email_id ||
    !date_of_birth ||
    !department ||
    !position
  ) {
    res.status(400);
    throw new Error("Provide All details!!");
  }

  const existmail = await Employee.findOne({ email_id });
  const existempid = await Employee.findOne({ employee_id: employee_id });
  if (existempid || existmail) {
    res.status(400);
    throw new Error("Employee already Exist");
  }

  try {
    const employee = await Employee.create({
      employee_id: employee_id,
      first_name: first_name,
      last_name: last_name,
      email_id: email_id,
      date_of_birth: date_of_birth,
      department: department,
      position: position,
    });

    if (employee) {
      res.status(200).json({
        message: "User Registered",
        ID: employee.employee_id,
        Name: employee.first_name,
        employee,
      });
    }
  } catch (error) {
    res.status(400);
    console.log(error);
    throw new Error("Employee not registered");
  }
});

const readEmployee = expressAsyncHandler(async (req, res) => {
  const employee_id = req.params.employeeId;

  try {
    const employee = await Employee.findOne({ employee_id });

    if (employee) {
      res.status(200).json({
        employee_id: employee.employee_id,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email_id: employee.email_id,
        date_of_birth: employee.date_of_birth,
        department: employee.department,
        position: employee.position,
      });
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const updateEmployee = expressAsyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    email_id,
    date_of_birth,
    department,
    position,
  } = req.body;

  const employee_id = req.params.employeeId;

  const updateddetails = await Employee.findOneAndUpdate(
    { employee_id: employee_id },
    {
      first_name,
      last_name,
      email_id,
      date_of_birth,
      department,
      position,
    },
    {
      new: true,
    }
  );

  if (!updateddetails) {
    res.status(404);
    throw new Error("Note Not Found");
  } else {
    res.json(updateddetails);
  }
});

const deleteEmployee = expressAsyncHandler(async (req, res) => {
  const employee_id = req.params.employeeId;
  const present = await Employee.findOne({ employee_id: employee_id });
  if (present) {
    const deletedemp = await Employee.deleteOne({ employee_id: employee_id });
    res.status(200).send({ message: "Employee Deleted" });
  } else {
    res.status(404).send("Employee Not Found");
  }
});

module.exports = { registerUser, readEmployee, updateEmployee, deleteEmployee };
