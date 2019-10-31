import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  const [name, setName] = useState('');

  const { searchUsers, clearUsers, users } = githubContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      showAlert('Please enter some name', 'danger');
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

Search.propTypes = {
  showAlert: PropTypes.func.isRequired
};

export default Search;
