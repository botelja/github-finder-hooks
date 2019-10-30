import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, showAlert }) => {
  const [name, setName] = useState('');

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
      {showClear && (
        <button className="btn btn-light btn-block my-2" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Search;
