import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../Reusable components/input";
import Button from "../Reusable components/button";
import { registerUser } from "../Services/APIEndpoints";

import "../CSS/registerForm.css";

const RegisterForm = ({ handleModalToggle }) => {
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
    name: Joi.string().max(50).required().label("სახელი"),
    email: Joi.string().email().required().max(255).label("Email"),
    password: Joi.string().max(255).min(8).required().label("Password"),
    repeat_password: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .error(() => {
        return { message: "The passwords don't match." };
      }),
  };

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
    let demoSchema = { [name]: schema[name] };
    if (name === "repeat_password") {
      obj = { password: user.password, [name]: value };
      demoSchema = { [name]: schema[name], password: schema["password"] };
    }

    const { error } = Joi.validate(obj, demoSchema);
    if (error && name === "repeat_password") {
      if (error.details.length === 2) {
        return error.details[1].message;
      } else {
        return error.details[0].message;
      }
    } else {
      return error ? error.details[0].message : null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const demoErrors = validate();

    setErrors((prevState) => ({
      ...prevState,
      ["name"]: demoErrors ? demoErrors.name : null,
      ["email"]: demoErrors ? demoErrors.email : null,
      ["password"]: demoErrors ? demoErrors.password : null,
      ["repeat_password"]: demoErrors ? demoErrors.repeat_password : null,
    }));

    try {
      const response = await registerUser(user);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      handleModalToggle();
      window.location.reload(false);
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        setErrors((prevState) => ({
          ...prevState,
          ["email"]: ex.response.data,
        }));
      }
    }
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
          // disabled={validate()}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
