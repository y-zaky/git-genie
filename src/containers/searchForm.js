import React, { useState, useEffect } from "react";

// import ErrorMessage from '../components/ErrorMessage'
import { Input, Dropdown, ErrorMessage } from "./styledCSS";

export default ({ handleChange, handleSubmit, githubUser, errors }) => {
  // console.log("err herfe", githubUser);
  return (
    <form id={"searchForm"} onSubmit={handleSubmit}>
      
        I want to find the
        <Dropdown name={"typeOfUser"} onChange={handleChange}>
          <option value={"user"}>user</option>
          <option value={"organisation"}>organisation</option>
        </Dropdown>
        called
        <Input
          name={"githubUser"}
          onChange={handleChange}
          value={githubUser}
        ></Input>
        {errors.githubUser && <ErrorMessage>{errors.githubUser}</ErrorMessage>}
      
      <Input type={"submit"} value={"Go Genie!"}></Input>
    </form>
  );
};
