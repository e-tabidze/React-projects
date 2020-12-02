import React, { useState } from "react";
import Joi from "joi-browser";
import Button from "./Reusable-Components/button";
import Input from "./Reusable-Components/input";

import "../CSS/loginForm.css";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().max(30).min(8).required().label("Password"),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateProperty({ name, value });
    console.log(errorMessage, "errorMessage");
    if (errorMessage)
      setErrors((prevState) => ({
        ...prevState,
        [name]: errorMessage,
      }));
    else
      setErrors((prevState) => ({
        ...prevState,
        [name]: null,
      }));

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const result = Joi.validate(user, schema, { abortEarly: false });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const demoSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, demoSchema);
    return error ? error.details[0].message : null;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const demoErrors = validate();
    console.log(demoErrors, "demoErrors");

    setErrors((prevState) => ({
      ...prevState,
      ["email"]: demoErrors ? demoErrors.email : null,
      ["password"]: demoErrors ? demoErrors.password : null,
    }));
    if (errors) return;
  };

  return (
    <div className="login-container">
      <h1>შესვლა</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          className="input-form"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="თქვენი ელ-ფოსტა"
          error={errors.email}
          autoFocus={true}
        />
        <Input
          className="input-form"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
          placeholder="პაროლი"
          error={errors.password}
        />
        <Button
          className="login-submit"
          label="შესვლა"
          onClick={handleSubmit}
          disabled={validate()}
        />
      </form>
    </div>
  );
};

export default LoginForm;
