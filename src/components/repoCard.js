import React from "react";
import {RepoCard} from '../containers/styledCSS'

export default ({ index, name, html, language , description}) => {
  console.log('repo',index, name, html, language , description)
  return (
    <RepoCard className={`${name}-repo-li`}>
      <h1>{name}</h1>
      <p>Language: {language || 'Sorry, no language info'}</p>
      <p>Description: {description || 'Sorry, no description'}</p>
      <a>Link: {html || 'Sorry, no html link'}</a>
    </RepoCard>
  );
};

// JEST and SUPERTEST
