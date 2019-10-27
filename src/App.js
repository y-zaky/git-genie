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
    // console.log(form)
    const alphaNumericExp = /[^a-zA-Z0-9\-\s/]/;
    // console.log('name',name,value)
    if (value.match(alphaNumericExp)) {
      console.log('hi')
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
    // ('im called', name, value)
    setValues({ ...form, [name]: value });
    hasError(name,value)
  };

  useEffect(() => {
    let userChangedSearchTerm = false;

    const apiCall = async () => {
      const { githubUser, typeOfUser } = form;
      const response = await fetch("/backend");
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      // why do i have to do this line below
      // eslint-disable-next-line
      if (!userChangedSearchTerm) setValues({ ...form, data: body });
    };
    // const url = `api.github.com/users/${form.githubUser}/repos`
    apiCall();

    return () => (userChangedSearchTerm = true);

    // why do i have to do this line below
    // eslint-disable-next-line
  }, [form.isValidated]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.errors.githubUser) setValues({ ...form, isValidated: true });
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
