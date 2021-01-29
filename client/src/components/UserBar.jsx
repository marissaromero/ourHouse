import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import UserStatus from './UserStatus.jsx'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = 'userBar'>
        <div className = 'currentUser'>
          <div className = 'userAvatar' >
            <img className = 'userImg' src='/avatar.jpg'></img>
            <div className = 'userStatus' style={{ 'background': this.props.color }}></div>
          </div>
          <div className = 'userTxt'>
            <div className = 'username'>{this.props.currentUser}</div>
            <div className = 'userStatusTxt'>{this.props.message}</div>
          </div>
        </div>
        {
              this.props.statusList.map ((status, index) => (
                <UserStatus status = {status[0]} statusTxt = {status[1]} color = {status[2]} key = {status + "." + index} updateCurrent = {this.props.updateCurrent} currentStatus = {this.props.currentStatus} />
              ))
            }
      </div>
    )
  }
}

export default UserBar;