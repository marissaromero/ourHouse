import PropTypes from 'prop-types';
import React from 'react';
import UserStatus from './UserStatus.jsx';

function UserBar({
  updateCurrent, currentUser, currentStatus, message, color, statusList,
}) {
  return (
    <div className="userBar">
      <div className="currentUser">
        <div className="userAvatar">
          <img className="userImg" alt="current user avatar" src="/images/avatar.jpg" />
          <div className="userStatus" style={{ background: color }} />
        </div>
        <div className="userTxt">
          <div className="username">{currentUser}</div>
          <div className="userStatusTxt">{message}</div>
        </div>
      </div>
      {
            statusList.map((status) => (
              <UserStatus status={status[0]} statusTxt={status[1]} color={status[2]} key={`${status}.key`} updateCurrent={updateCurrent} currentStatus={currentStatus} />
            ))
          }
    </div>
  );
}
UserBar.propTypes = {
  updateCurrent: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  statusList: PropTypes.string.isRequired,
};

export default UserBar;
