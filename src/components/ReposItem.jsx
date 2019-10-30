import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div className="list-group my-3">
      <a
        href={repo.html_url}
        className="list-group-item list-group-item-action"
      >
        {repo.name}
      </a>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default ReposItem;
