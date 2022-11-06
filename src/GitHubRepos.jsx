import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import './githubrepos.css';

export default function GitHubRepos() {
  const [page, setPage] = useState(1);
  const [repoList, setRepoList] = useState([]);

  const total = repoList.length;

  const PER_PAGE = 2;

  const pages = Math.ceil(total / PER_PAGE);

  const skip = page * PER_PAGE - PER_PAGE;

  useEffect(() => {
    fetch('https://api.github.com/users/Olawale-BTC/repos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRepoList(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);



  return (
    <div className="repo-container">
      <h3>My GitHub Repos</h3>
      {repoList.slice(skip, page * PER_PAGE).map((repo) => {
        return (
          <NavLink key={repo.id} className="repo-list">
            {repoList.indexOf(repo) + 1}. {repo.full_name} <br/>
          </NavLink>
        );
      })}

      <div className="btns">
        {
          <button
            disabled={page <= 1}
            aria-disabled={page <= 1}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            Prev
          </button>
        }

        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next
          </button>
        }
      </div>
      <p>
        {' '}
        Page: {page} of {pages}{' '}
      </p>
      <Outlet />
    </div>
  );
}


