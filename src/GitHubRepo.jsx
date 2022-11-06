import React from 'react';
import { useParams } from 'react-router-dom';


function GitHubRepo () {

  let { GitHubRepoID } = useParams();

  return (
    <div>
      <h3>Clicked GitHub Repo</h3>
      <p> { GitHubRepoID } </p>
    </div>
    )
}

export default GitHubRepo;