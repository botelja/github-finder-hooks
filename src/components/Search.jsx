import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [name, setName] = useState('');

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlert('Please enter some name', 'danger');
    } else {
      searchUsers(name);
      setName('');
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Search name..."
          />
        </div>

        <button type="submit" className="btn btn-dark btn-block">
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block my-2" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
