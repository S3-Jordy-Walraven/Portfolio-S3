import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setEmailID] = useState("");
  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailID };
    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> EmailAdress:</label>
                  <input
                    type="text"
                    placeholder="Enter Email Adress Name"
                    name="emailID"
                    className="form-control"
                    value={emailID}
                    onChange={(e) => {
                      setEmailID(e.target.value);
                    }}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    saveEmployee(e);
                  }}
                >
                  Submit
                </button>
                <Link to="/" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
