import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '') {
      this.props.showAlert('Please enter some name', 'danger');
    } else {
      this.props.searchUsers(this.state.name);
      this.setState({ name: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name } = this.state;
    const { showClear, clearUsers } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Search name..."
            />
          </div>

          <button type="submit" className="btn btn-dark btn-block">
            Submit
          </button>
        </form>
        {showClear && (
          <button className="btn btn-light btn-block mt-2" onClick={clearUsers}>
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Search;
