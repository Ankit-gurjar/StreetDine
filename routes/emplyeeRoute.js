const express = require("express");
const {
  registerUser,
  readEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeecontroller");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/employees").post(protect, registerUser);
router
  .route("/employees/:employeeId")
  .get(protect, readEmployee)
  .put(protect, updateEmployee)
  .delete(protect, deleteEmployee);

module.exports = router;
