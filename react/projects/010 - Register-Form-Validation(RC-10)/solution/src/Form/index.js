import "../App.css";
import { useState } from "react";
import { StyledInput, StyledButton, StyledPar } from "./Form.style";
import { registerValidation } from "../utils/registerValidation";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });

  const [errorText, setErrorText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText(registerValidation(values));
    if (!registerValidation(values)) {
      console.log(values);
    }
  };

  return (
    <div>
      <p>
        {errorText === "" &&
          values.firstName.toUpperCase() +
            " " +
            values.lastName.toUpperCase() +
            " Registered Succesfully!"}
      </p>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="fisrtName"
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          value={values.firstName}
          placeholder="First Name"
        />
        <StyledPar> {errorText?.firstName}</StyledPar>
        <StyledInput
          type="text"
          name="lastName"
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          value={values.lastName}
          placeholder="Last Name"
        />
        <StyledPar> {errorText?.lastName}</StyledPar>
        <StyledInput
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          placeholder="Email Address"
        />
        <StyledPar> {errorText?.email}</StyledPar>
        <StyledInput
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          placeholder="Password"
        />
        <StyledPar> {errorText?.password}</StyledPar>
        <StyledInput
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setValues({ ...values, confirmPassword: e.target.value })
          }
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <StyledPar> {errorText?.confirmPassword}</StyledPar>
        <input
          type="checkbox"
          name="policy"
          // required
          value={values.policy}
          onChange={(e) => setValues({ ...values, policy: e.target.checked })}
        />
        <span style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>
          I accept the{" "}
          <a href="/" style={{ color: "white" }}>
            Privacy Policy
          </a>
          .
        </span>
        <StyledPar> {errorText?.policy}</StyledPar>
        <StyledButton type="submit" value="Register">
          Register
        </StyledButton>
        <p style={{ fontSize: "1rem" }}>
          Already have an account?{" "}
          <a href="/" style={{ color: "white" }}>
            Login.
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;
