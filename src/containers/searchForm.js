import React from "react";

// import ErrorMessage from '../components/ErrorMessage'
import { Input, Dropdown, ErrorMessage, Form } from "./styledCSS";

export default ({ handleChange, handleSubmit, username, errors }) => {
  // console.log("err herfe", username);
  return (
    <Form id={"searchForm"} onSubmit={handleSubmit}>
      <label for={"typeOfUser"}>I want to find the repos for the</label>
      <Dropdown id={"typeOfUser"} name={"typeOfUser"} onChange={handleChange}>
        <option value={"users"}>user</option>
        <option value={"orgs"}>organisation</option>
      </Dropdown>
      <label for={"username"}>called</label>
      <Input
        id={"username"}
        name={"username"}
        onChange={handleChange}
        value={username}
        placeholder={"y-zaky"}
        error={errors.username}
        autofocus
      ></Input>
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

      <Input type={"submit"} value={"GO GENIE!"}></Input>
    </Form>
  );
};
