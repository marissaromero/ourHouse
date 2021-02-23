/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function UserStatus({
  status, statusTxt, color, updateCurrent, currentStatus,
}) {
  const [pageStatus, setPageStatus] = useState(false);

  useEffect(() => {
    if (currentStatus === status) {
      setPageStatus(true);
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    updateCurrent(status);
  };

  return (
    <div>
      {
        pageStatus
        &&
        (
        <div className={status}>
          <div className="statusTxt">{statusTxt}</div>
          <button onClick={handleClick} className="statusBg" type="button" style={{ background: color }} />
          <div className="statusCircle" style={{ background: color }} />
        </div>
        )
      }
      {
        !pageStatus
        &&
        (
        <div className={status} style={{ opacity: '0.5' }}>
          <div className="statusTxt">{statusTxt}</div>
          <button onClick={handleClick} className="statusBg" type="button" style={{ border: `3px solid ${color}` }} />
          <div className="statusCircle" style={{ background: color }} />
        </div>
        )
      }
    </div>
  );
}

export default UserStatus;

UserStatus.propTypes = {
  status: PropTypes.string.isRequired,
  statusTxt: PropTypes.string.isRequired,
  updateCurrent: PropTypes.func.isRequired,
  currentStatus: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
