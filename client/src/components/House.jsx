import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      message: ''
    }
  }

  componentDidMount() {
    if (this.props.status === 'status1') {
      this.setState({
        color: "#97F58F",
        message: 'Free'
      })
    }
    if (this.props.status === 'status2') {
      this.setState({
        color: "#1ADFFA",
        message: 'In class lecture'
      })
    }
    if (this.props.status === 'status3') {
      this.setState({
        color: "#FAA61A",
        message: 'Doing Homework'
      })
    }
    if (this.props.status === 'status4') {
      this.setState({
        color: "#FC0A0A",
        message: 'Busy'
      })
    }

  }

  render () {
    return (
      <div>
        <div className = {this.props.userNum} >
          <div className = 'userAvatar' >
            <img className = 'userImg' src={this.props.avatar}></img>
            <div className = 'userStatus' style={{ 'background': this.state.color }}></div>
          </div>
          <div className = 'userTxt'>
            <div className = 'username'>{this.props.user}</div>
            <div className = 'userStatusTxt'>{this.state.message}</div>
          </div>
        </div>
      </div>



    )
  }
}

export default House