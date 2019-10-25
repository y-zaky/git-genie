import React, { useState, useEffect } from "react";
import "./App.css";

import SearchForm from './containers/searchForm'

import { Title,Tagline } from "./containers/styledCSS.js";

const App = () => {
  const [data, getData ] = useState('')
  const [form, setValues] = useState({
    githubUser: '',
    user:'',
    typeOfUser: ''

  })

  // const {githubUser} = form
  const handleChange = ({target:{name,value}}) =>{
    setValues({...form, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title>Git Genie</Title>
        <Tagline>your wish is my command..</Tagline>
      </header>
      <main>
        <SearchForm handleSubmit={handleSubmit} handleChange={handleChange}/>
      </main>
    </div>
  );
}

export default App;
