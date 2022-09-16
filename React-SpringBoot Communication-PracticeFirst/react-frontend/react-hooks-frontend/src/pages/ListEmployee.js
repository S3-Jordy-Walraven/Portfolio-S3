import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListEmployee = () => {
  const [employees, SetEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((Response) => {
        SetEmployees(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center"> Employee list</h2>
      <Link to="/add-employee" className="btn btn-primary m-3">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>EmployeeId</th>
          <th>Employee first name</th>
          <th>Employee last name</th>
          <th>Employee email</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
