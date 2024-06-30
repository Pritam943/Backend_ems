import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeComponent() {
  const [firstName, setFirstName] = new useState("");
  const [lastName, setLastName] = new useState("");
  const [email, setEmail] = new useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  function pageTitle() {
    if (id) {
      return "Update";
    } else {
      return "Add";
    }
  }

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, setEmail, setFirstName, setLastName]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((result) => {
            console.log(result.data);
            navigate("/employees");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        createEmployee(employee)
          .then((result) => {
            console.log(result.data);
            navigate("/employees");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "email is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{pageTitle()} Employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="enter first name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="enter last name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="enter first name"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                {pageTitle()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
