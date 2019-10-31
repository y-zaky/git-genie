import React from "react";
import {RepoCard, Title, RepoInfo, Link} from '../containers/styledCSS'

export default ({ index, name, html, language , description}) => {
  console.log('repo',index, name, html, language , description)
  return (
    <RepoCard className={`${name}-repo-li`}>
      <Title type={'repo'}>{name}</Title>
      <RepoInfo>Language: <span>{language || 'Sorry, no language info'}</span></RepoInfo>
      <RepoInfo>Description: <span>{description || 'Sorry, no description'}</span></RepoInfo>
      <Link href={html || '#'}>Link: {html || 'Sorry, no html link'}</Link>
    </RepoCard>
  );
};

// JEST and SUPERTEST
