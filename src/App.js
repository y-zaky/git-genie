import React, { useState, useEffect } from "react";
import "./App.css";

import SearchForm from "./containers/searchForm";

import { Title, Tagline } from "./containers/styledCSS.js";

const App = () => {
  const [form, setValues] = useState({
    githubUser: "",
    typeOfUser: "",
    errors: {
      githubUser: false
    },
    repos: {},
    isValidated: false
  });

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
      const { githubUser, typeOfUser } = form;

      try {
        const response = await fetch("/backend");
        const body = await response;

        if (response.status !== 200) {
          throw Error(body.message);
        }

        if (!userChangedSearchTerm)
          setValues(prevState => ({
            ...prevState,
            data: body
          }));
      } catch (error) {
        console.log("server error", error);
      }
    };
    apiCall();

    return () => (userChangedSearchTerm = true);

    // why do i have to do this line below
    // eslint-disable-next-line
  }, [form.isValidated]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.errors.githubUser)
      setValues(prevState => ({ ...prevState, isValidated: true }));
    // console.log('submitted')
  };

  const { errors, githubUser } = form;
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
          githubUser={githubUser}
        />
      </main>
    </div>
  );
};

export default App;
