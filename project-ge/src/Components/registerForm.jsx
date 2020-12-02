import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import Button from "./Reusable-Components/button";
import Input from "./Reusable-Components/input";

import "../CSS/registerForm.css";

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const schema = {
    name: Joi.string().label("სახელი"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().max(64).min(8).required().label("Password"),
    repeat_password: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .error(() => {
        return { message: "The passwords don't match." };
      }),
  };


  useEffect(() => {
    console.log(errors.repeat_password)
  }, [errors])

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = validateProperty({ name, value });
    
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
    let obj = { [name]: value };
    if(name === "repeat_password") {
      obj = {password: user.password, [name]: value}
    }
    const demoSchema = { [name]: schema[name] };
    const options = { abortEarly: false };

    const { error } = Joi.validate(obj, demoSchema);
    if (error && name === 'repeat_password') {
      if (error.details.length === 2) {
        return error.details[1].message;
      } else {
        return error.details[0].message;
      }
    } else {
      return error ? error.details[0].message : null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const demoErrors = validate();

    setErrors((prevState) => ({
      ...prevState,
      ["email"]: demoErrors ? demoErrors.email : null,
      ["password"]: demoErrors ? demoErrors.password : null,
    }));
    if (errors) return;
  };

  return (
    <div className="register-container">
      <h1>რეგისტრაცია</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          className="input-form"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="თქვენი სახელი"
          error={errors.name}
        />
        <Input
          className="input-form"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="თქვენი ელ-ფოსტა"
          error={errors.email}
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
        <Input
          className="input-form"
          name="repeat_password"
          value={user.repeat_password}
          onChange={handleChange}
          type="password"
          placeholder="გაიმეორეთ პაროლი"
          error={errors.repeat_password}
        />
        <Button
          className="register-submit"
          label="რეგისტრაცია"
          onClick={handleSubmit}
          disabled={validate()}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
