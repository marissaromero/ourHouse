import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import House from './House.jsx';
import TopNav from './TopNav.jsx';
import UserBar from './UserBar.jsx';

function Home() {
  const [user, setUser] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [homeMembers, setHomeMembers] = useState([]);
  const [homeName, setHomeName] = useState('');
  const [statusList] = useState([['status1', 'Free', '#97F58F'], ['status2', 'In class lecture', '#1ADFFA'], ['status3', 'Doing Homework', '#FAA61A'], ['status4', 'Busy', '#FC0A0A']]);
  const [color, setColor] = useState('');
  const [message, setMessage] = useState('');
  const [loaded, setLoaded] = useState(false);

  const updateMessageColor = () => {
    if (currentStatus === 'status1') {
      setColor('#97F58F');
      setMessage('Free');
    }
    if (currentStatus === 'status2') {
      setColor('#1ADFFA');
      setMessage('In class lecture');
    }
    if (currentStatus === 'status3') {
      setColor('#FAA61A');
      setMessage('Doing Homework');
    }
    if (currentStatus === 'status4') {
      setColor('#FC0A0A');
      setMessage('Busy');
    }
  };

  const fetchCurrentUser = () => {
    axios.get('/user/2')
      .then(({ data }) => {
        setUser(data[0].firstnName);
        setCurrentStatus(data[0].currentStatus);
      })
      .then(() => {
        updateMessageColor();
      })
      .then(() => {
        setLoaded(true);
      });
  };

  const fetchAllUsers = () => {
    axios.get('/homeUsers/1')
      .then(({ data }) => {
        console.log('look here', data);
        setHomeMembers(data);
      });
  };

  const fetchHomeName = () => {
    axios.get('/homeName/1')
      .then(({ data }) => {
        setHomeName(data[0].homeName);
      });
  };

  const updateCurrent = (status) => {
    axios.put(`/user/2/${status}`)
      .then(() => {
        setLoaded(false);
      })
      .then(() => {
        fetchCurrentUser();
      });
  };

  useEffect(() => {
    fetchCurrentUser();
    fetchAllUsers();
    fetchHomeName();
  }, []);

  return (
    <div className="main">
      <TopNav />
      {
        loaded
        &&
        (
        <div className="center">
          <div className="house">
            <img className="houseBg" alt="outline of house" src="/homeBg.svg" />
            <div className="users">
              {
                homeMembers.map((member, index) => (
                  <House user={member.firstName} status={member.currentStatus} key={`{${member.firstName}.key`} userNum={`user${index}`} updateCurrent={updateCurrent} statusList={statusList} avatar={member.userAvatar} />
                ))
              }
            </div>
          </div>
          <UserBar
            updateCurrent={updateCurrent}
            currentUser={user}
            currentStatus={currentStatus}
            message={message}
            color={color}
            statusList={statusList}
          />
          <div className="homeName">{homeName}</div>
        </div>
        )
      }
    </div>
  );
}

export default Home;
