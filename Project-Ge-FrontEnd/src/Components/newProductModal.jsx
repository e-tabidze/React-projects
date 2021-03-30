import React, { useEffect, useState } from "react";
import {
  getMetals,
  getPieces,
  getStones,
  getTypes,
  postJewels,
} from "../Services/APIEndpoints";
import Joi from "joi-browser";
import MenuItem from "../Reusable components/menuItem";
import Input from "../Reusable components/input";
import Button from "../Reusable components/button";
import Select from "../Reusable components/select";
import ImageField from "../Reusable components/imgField";

import "../CSS/newProductModal.css";

const NewProductModal = ({ handleNewProductModalToggle, currentUser }) => {
  const [pieces, setPieces] = useState(null);
  const [metals, setMetals] = useState(null);
  const [stones, setStones] = useState(null);
  const [types, setTypes] = useState(null);
  const [newJewel, setNewJewel] = useState({
    duration: "",
    name: "",
    pieceId: "",
    price: "",
    metalId: "",
    stoneId: "",
    weight: "",
    size: "",
    standard: "",
    contactNumber: "",
    description: "",
    productImage: {},
    typeId: "",
  });
  const [errors, setErrors] = useState({
    duration: "",
    name: "",
    pieceId: "",
    price: "",
    metalId: "",
    stoneId: "",
    weight: "",
    size: "",
    standard: "",
    contactNumber: "",
    description: "",
    productImage: "",
    typeId: "",
  });

  useEffect(() => {
    handleGetPieces();
    handleGetMetals();
    handleGetStones();
    handleGetTypes();
  }, []);

  const schema = {
    duration: Joi.number()
      .required()
      .max(100)
      .default(30)
      .label("ხანგრძლივობა"),
    name: Joi.string().required().max(100).label("დასახელება"),
    pieceId: Joi.string().required().max(50).label("ნაკეთობა"),
    price: Joi.number().required().max(10000).label("ფასი"),
    metalId: Joi.string().required().max(50).label("მეტალი"),
    stoneId: Joi.string().required().max(50).label("შიგთავსი"),
    weight: Joi.number().max(10000).label("წონა"),
    size: Joi.string().max(100).label("ზომა"),
    standard: Joi.string().max(10000).required().label("სინჯი"),
    contactNumber: Joi
      // .extend(require("joi-phone-number"))
      .string()
      // .phoneNumber({ defaultCountry: "GE" })
      .label("საკონტაქტო ნომერი"),
    description: Joi.string().max(300).label("ნივთის აღწერა"),
    productImage: Joi.object(),
    typeId: Joi.string().required(),
  };

  const handleGetPieces = async () => {
    let piecesData = await getPieces();
    setPieces(piecesData);
  };

  const handleGetMetals = async () => {
    let metalsData = await getMetals();
    setMetals(metalsData);
  };

  const handleGetStones = async () => {
    let stonesData = await getStones();
    setStones(stonesData);
  };

  const handleGetTypes = async () => {
    let typesData = await getTypes();
    setTypes(typesData);
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

    setNewJewel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const result = Joi.validate(newJewel, schema, { abortEarly: false });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    let obj = { [name]: value };
    let demoSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, demoSchema);
    if (error && error.details.length === 2) {
      return error.details[1].message;
    } else {
      return error ? error.details[0].message : null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const demoErrors = validate();
    setErrors((prevState) => ({
      ...prevState,
      ["duration"]: demoErrors ? demoErrors.duration : null,
      ["name"]: demoErrors ? demoErrors.name : null,
      ["pieceId"]: demoErrors ? demoErrors.piece : null,
      ["price"]: demoErrors ? demoErrors.price : null,
      ["metalId"]: demoErrors ? demoErrors.metal : null,
      ["stoneId"]: demoErrors ? demoErrors.stone : null,
      ["weight"]: demoErrors ? demoErrors.weight : null,
      ["size"]: demoErrors ? demoErrors.size : null,
      ["standard"]: demoErrors ? demoErrors.standard : null,
      ["contactNumber"]: demoErrors ? demoErrors.contactNumber : null,
      ["description"]: demoErrors ? demoErrors.description : null,
      ["productImage"]: demoErrors ? demoErrors.productImage : null,
      ["typeId"]: demoErrors ? demoErrors.type : null,
    }));
    if (demoErrors) console.log(demoErrors, "demoerrors", newJewel);
    else {
      let userToken = localStorage.getItem("token");
      let jewelFormData = objectToFormData(newJewel);
      console.log(jewelFormData);
      postJewels(jewelFormData, userToken);
    }
  };

  const objectToFormData = (obj, namespace) => {
    let fd = new FormData();
    let formKey;

    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (namespace) {
          formKey = namespace + "[" + property + "]";
        } else {
          formKey = property;
        }
        if (
          typeof obj[property] === "object" &&
          !(obj[property] instanceof File)
        ) {
          objectToFormData(obj[property], fd, property);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    console.log(e.target.files, "IMAGE FILES");
    setNewJewel((prevState) => ({
      ...prevState,
      ["productImage"]: e.target.files[0],
    }));
  };

  return (
    <div className="new-product-modal-container">
      <div className="new-product-modal-wrapper">
        <MenuItem
          className="fa fa-times fa-2x"
          onClick={handleNewProductModalToggle}
        />
        <form className="new-product-form" onSubmit={handleSubmit}>
          <Input
            className="input-form"
            name="duration"
            value={newJewel.duration}
            onChange={handleChange}
            label={"ხანგრძლივობა"}
            error={errors.duration}
          />
          <Input
            name="name"
            className="input-form"
            value={newJewel.name}
            onChange={handleChange}
            label={"დასახელება"}
            error={errors.name}
          />
          <Select
            name={"pieceId"}
            label={"ნაკეთობა"}
            options={pieces}
            error={errors.pieceId}
            handleChange={handleChange}
          />
          <Input
            name="price"
            label={"ფასი"}
            className="input-form"
            value={newJewel.price}
            onChange={handleChange}
            error={errors.price}
          />
          <Select
            name="metalId"
            label={"ძვირფასი მეტალი"}
            options={metals}
            error={errors.metalId}
            handleChange={handleChange}
          />
          <Select
            name="stoneId"
            label={"შიგთავსი"}
            options={stones}
            error={errors.stoneId}
            handleChange={handleChange}
          />
          <Input
            className="input-form"
            name="weight"
            value={newJewel.weight}
            onChange={handleChange}
            error={errors.weight}
            label={"წონა"}
          />
          <Input
            className="input-form"
            name="size"
            value={newJewel.size}
            onChange={handleChange}
            error={errors.size}
            label={"ზომა"}
          />
          <Input
            className="input-form"
            name="standard"
            value={newJewel.standard}
            onChange={handleChange}
            error={errors.standard}
            label={"სინჯი"}
          />
          <Input
            className="input-form"
            name="contactNumber"
            value={newJewel.contactNumber}
            onChange={handleChange}
            error={errors.contactNumber}
            label={"საკონტაქტო ნომერი"}
          />
          <Input
            className="input-form description"
            name="description"
            value={newJewel.description}
            onChange={handleChange}
            error={errors.description}
            label={"ნივთის აღწერა"}
          />
          <Select
            name="typeId"
            label={"პრიორიტეტი"}
            options={types}
            error={errors.type}
            handleChange={handleChange}
          />
          <ImageField onChange={handleImageUpload} />
          <img src={newJewel.productImage} style={{ height: "50px" }} />

          <Button
            className="new-product-submit"
            label={"ახალი პროდუქტის დამატება"}
            onClick={handleSubmit}
            // disabled={validate()}
          />
        </form>
      </div>
    </div>
  );
};

export default NewProductModal;
