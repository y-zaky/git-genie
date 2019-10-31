import React, { useState } from "react";
import "./App.css";

import SearchForm from "./containers/searchForm";
import ReposContainer from "./containers/reposContainer";

import { Title, Tagline, GenieImage } from "./containers/styledCSS.js";
import genie from "./images/genie.png";

const App = () => {
  const [form, setValues] = useState({
    username: "",
    typeOfUser: "users",
    errors: {
      username: false
    },
    repos: {},
    data: {
      body: [],
      errors: null
    }
  });

  const hasError = (name, value) => {
    const alphaNumericExp = /[^a-zA-Z0-9\-\s/]/;
    if (value.match(alphaNumericExp)) {
      setValues(prevState => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: "Error: Must be alphanumeric" }
      }));
    } else {
      setValues(prevState => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: false }
      }));
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...form, [name]: value });
    hasError(name, value);
  };

  const apiCall = async () => {
    const { username, typeOfUser } = form;
    try {
      const response = await fetch(`backend/${typeOfUser}/${username}/repos`);
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      setValues(prevState => ({
        ...prevState,
        data: { ...prevState.data, body: body, errors: false }
      }));
    } catch (error) {
      setValues(prevState => ({
        ...prevState,
        data: { ...prevState.data, errors: error.message }
      }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.errors.username) apiCall();
  };

  const { errors, username } = form;

  return (
    <div className="App">
      <header className="App-header">
        <Title>Git Genie</Title>
        <GenieImage src={genie}></GenieImage>
        <Tagline>"YOUR WISH...IS MY COMMAND.."</Tagline>
      </header>
      <main>
        <SearchForm
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          username={username}
        />
        {!form.errors.username && <ReposContainer repos={form.data.body} />}
      </main>
    </div>
  );
};

export default App;
