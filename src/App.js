import React, { useState, useEffect } from "react";
import "./App.css";

import SearchForm from "./containers/searchForm";

import { Title, Tagline } from "./containers/styledCSS.js";

const App = () => {
  const [form, setValues] = useState({
    username: "",
    typeOfUser: "users",
    errors: {
      username: false
    },
    repos: {},
    isValidated: false,
    data: {
      body: null,
      errors: null
    }
  });
  const [isValidated, setValidation] = useState(false);

  const hasError = (name, value) => {
    const alphaNumericExp = /[^a-zA-Z0-9\-\s/]/;
    if (value.match(alphaNumericExp)) {
      setValues(prevState => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: "must be alphanumeric" }
      }));
      // return true
    } else {
      setValues(prevState => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: false }
      }));
      // return false
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...form, [name]: value });
    hasError(name, value);
  };

  useEffect(() => {
    let userChangedSearchTerm = false;

    const apiCall = async () => {
      const { username, typeOfUser } = form;
      try {
        const response = await fetch(`backend/${typeOfUser}/${username}/repos`);
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message);
        }

        if (!userChangedSearchTerm)
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
    apiCall();

    return () => (userChangedSearchTerm = true);
  }, [isValidated]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.errors.username)
      setValidation(prevState => ({ ...prevState, isValidated: true }));
    // console.log('submitted')
  };

  const { errors, username } = form;
  return (
    <div className="App">
      <header className="App-header">
        <Title>Git Genie</Title>
        <Tagline>your wish is my command..</Tagline>
      </header>
      <main>
        <SearchForm
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          username={username}
        />
      </main>
    </div>
  );
};

export default App;
