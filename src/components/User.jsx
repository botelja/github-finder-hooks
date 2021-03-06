import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from './Spinner';
import Repos from './Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light mr-3">
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check"></i>
      ) : (
        <i className="fas fa-times-circle"></i>
      )}
      <div className="card my-3">
        <img
          src={avatar_url}
          className="my-3  mx-auto d-block rounded-circle"
          alt="..."
          style={{ width: '160px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="my-2">
            <span className="badge badge-pill badge-primary">
              Followers: {followers}
            </span>
            <span className="badge badge-pill badge-success ml-1">
              Following: {following}
            </span>
            <span className="badge badge-pill badge-warning ml-1">
              Public Repos: {public_repos}
            </span>
            <span className="badge badge-pill badge-secondary ml-1">
              Public Gists: {public_gists}
            </span>
          </div>
          <p className="card-text">Location: {location}</p>
          <a href={html_url} className="btn btn-primary">
            Visit Github Profile
          </a>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            {login && (
              <Fragment>
                <strong>Username:</strong> {login}
              </Fragment>
            )}
          </li>
          <li className="list-group-item">
            {company && (
              <Fragment>
                <strong>Company:</strong> {company}
              </Fragment>
            )}
          </li>
          <li className="list-group-item">
            {blog && (
              <Fragment>
                <strong>Website:</strong> {blog}
              </Fragment>
            )}
          </li>
        </ul>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
