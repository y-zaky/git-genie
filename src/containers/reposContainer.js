import React from "react";

import {ReposListContainer} from './styledCSS'
import RepoCard from "../components/repoCard";



export default ({ repos }) => {
  if (!repos.length) return null;
  const repoList = repos.map((repo, index) => (
    <RepoCard
      key={`${index}-list`}
      name={repo.name}
      html={repo.html_url}
      language={repo.language}
      description={repo.description}
    ></RepoCard>
  ));
  return <ReposListContainer className={"repos-container"}>{repoList}</ReposListContainer>;
};
