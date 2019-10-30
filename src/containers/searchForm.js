import React from "react";

// import ErrorMessage from '../components/ErrorMessage'
import { Input, Dropdown, ErrorMessage } from "./styledCSS";

export default ({ handleChange, handleSubmit, username, errors }) => {
  // console.log("err herfe", username);
  return (
    <form id={"searchForm"} onSubmit={handleSubmit}>
      
        I want to find the repos for the
        <Dropdown name={"typeOfUser"} onChange={handleChange}>
          <option value={"users"}>user</option>
          <option value={"orgs"}>organisation</option>
        </Dropdown>
        called
        <Input
          name={"username"}
          onChange={handleChange}
          value={username}
          placeholder={"y-zaky" }
          error={errors.username}
          autofocus
        ></Input>
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
      
      <Input type={"submit"} value={"Go Genie!"}></Input>
    </form>
  );
};
