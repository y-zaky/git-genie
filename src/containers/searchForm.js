import React, { useState, useEffect } from "react";
import { Input, Dropdown } from "./styledCSS";

export default ({ handleChange,handleSubmit, githubUser }) => {
  return (
    <form id={'searchForm'} onSubmit={handleSubmit}>
      <p>
        I want to find the
        <Dropdown name={"typeOfUser"} onChange={handleChange}>
          <option value={'user'}>user</option>
          <option value={'organisation'}>organisation</option>
        </Dropdown>
        called 
      <Input
        name={"githubUser"}
        onChange={handleChange}
        value={githubUser}
      ></Input>
      </p>
      <Input type={"submit"} value={"Go Genie!"}></Input>
    </form>
  );
};
