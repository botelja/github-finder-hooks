import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="my-3  mx-auto d-block rounded-circle"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className="btn btn-primary btn-sm mb-2">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
