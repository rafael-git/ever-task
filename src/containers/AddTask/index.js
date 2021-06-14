import React, { useState } from "react";

import "./AddTask.scss";

import TextInput from "../../components/TextInput/index";
import HeadingText from "../../components/HeadingText/index";
import Button from "../../components/Button/index";

const AddTask = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="crud-container">
      <HeadingText text="Add a new task" />
      <form className="crud-form">
        <TextInput
          required="required"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeHolder="Name"
          type="text"
          label="Name"
          for="name"
        />

        <TextInput
          required="required"
          id="duration"
          name="duration"
          value={name}
          onChange={handleChange}
          placeHolder="Duration"
          type="text"
          label="Duration"
          for="duration"
        />

        <div className="buttons-container">
          <Button text="Add" type="submit" />
          <Button text="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
