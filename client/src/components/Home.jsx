import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import House from './House.jsx'
import TopNav from './TopNav.jsx'
import UserBar from './UserBar.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentStatus:'',
      users: [],
      homeName: '',
      statusList: [['status1', 'Free', '#97F58F'], ['status2', 'In class lecture', '#1ADFFA'], ['status3', 'Doing Homework', '#FAA61A'], ['status4', 'Busy', '#FC0A0A']],
      color:'',
      message: '',
      loaded: false
    }
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
    this.fetchAllUsers = this.fetchAllUsers.bind(this)
    this.fetchHomeName = this.fetchHomeName.bind(this)
    this.updateCurrent = this.updateCurrent.bind(this)
    this.updateMessageColor= this.updateMessageColor.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentUser()
    this.fetchAllUsers()
    this.fetchHomeName()
  }

  fetchCurrentUser() {
    axios.get('/user/2')
      .then(({data}) => {
        this.setState({
          currentUser: data[0].firstName,
          currentStatus: data[0].currentStatus
        })
      })
      .then(() => {
        this.updateMessageColor()
      })
      .then(() => {
        this.setState({
          loaded: true
        })
      })

  }

  fetchAllUsers() {
    axios.get('/homeUsers/1')
      .then(({data}) => {
        this.setState({
          users: data
        })
      })
  }

  fetchHomeName() {
    axios.get('/homeName/1')
    .then(({data}) => {
      this.setState({
        homeName: data[0].homeName
      })
    })


  }


  updateCurrent(status) {

    axios.put(`/user/2/${status}`)
      .then(() => {
        this.setState ({
          loaded: false
        })
      })
      .then(() => {
      this.fetchCurrentUser()
      })
      .then(() => {
        window.location.reload(true);
      })
  }

  updateMessageColor() {
    if (this.state.currentStatus === 'status1') {
      this.setState({
        color: "#97F58F",
        message: 'Free'
      })
    }
    if (this.state.currentStatus === 'status2') {
      this.setState({
        color: "#1ADFFA",
        message: 'In class lecture'
      })
    }
    if (this.state.currentStatus === 'status3') {
      this.setState({
        color: "#FAA61A",
        message: 'Doing Homework'
      })
    }
    if (this.state.currentStatus === 'status4') {
      this.setState({
        color: "#FC0A0A",
        message: 'Busy'
      })
    }
  }

  render () {
    return (
      <div className = 'main'>
        <TopNav />
        {
          this.state.loaded &&
          <div className = 'center'>
            <div className = 'house'>
            <img className = 'houseBg' src='/homeBg.svg'></img>
            <div className = 'users'>
              {
                this.state.users.map ((user, index) => (
                  <House user = {user.firstName} status = {user.currentStatus} key = {user +'.'+ index} userNum = {'user'+index}updateCurrent = {this.state.updateCurrent} statusList = {this.state.statusList} avatar = {user.userAvatar}/>
                ))
              }
            </div>
            </div>

            <UserBar updateCurrent = {this.updateCurrent} currentUser = {this.state.currentUser} currentStatus = {this.state.currentStatus} message = {this.state.message} color = {this.state.color} statusList = {this.state.statusList}/>
            <div className='homeName'>{this.state.homeName}</div>
          </div>
        }

      </div>

    )
  }
}


export default Home;

