import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
  const [inputValue, setInputValue] = useState({ firstname: '', lastname: '', username: '', password: '', email: '', homeId: '', avatar: '', userId: 0
});
  const {
    firstname, lastname, username, password, email, homeId, avatar, userId
  } = inputValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting ${username} ${password}`);
    // axios.put('./login', {
    //   params: {
    //     password,
    //     username,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setUserId(res);
    //   });
  };

  return (
    <div className="signUpMain">
      <div className="signUp">
        <img className="signUpLogo" src="images/logo.svg" alt="Our House logo" />
        <form className="signUpFormContainer" onSubmit={handleSubmit}>
          <div className="signUpTitle">Sign Up</div>
          <div className="firstNameInput">
            <input className="formTxt" name="firstname" value={firstname} onChange={handleChange} placeholder="firstname" />
          </div>
          <div className="lastNameInput">
            <input className="formTxt" name="lastname" value={lastname} onChange={handleChange} placeholder="lastname" />
          </div>
          <div className="username2Input">
            <input className="formTxt" name="username" value={username} onChange={handleChange} placeholder="username" />
          </div>
          <div className="password2Input">
            <input className="formTxt" type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
          </div>
          <div className="emailInput">
            <input className="formTxt" name="email" value={email} onChange={handleChange} placeholder="email" />
          </div>
          <div className="avatarInput">
            <input className="formTxt" name="avatar" value={avatar} onChange={handleChange} placeholder="avatar" />
          </div>
          <div className="homeCodeInput">
            <input className="formTxt" name="homeId" value={homeId} onChange={handleChange} placeholder="home" />
          </div>
          <Link to={{ pathname: '/home', query: userId }}>
            <input className="joinButton" type="submit" value="join a home" />
          </Link>
          <div className="or"> ────────  or  ────────</div>
          <Link to="/">
            <input className="createButton" type="submit" value="create a new home" />
          </Link>
        </form>
      </div>
      <img className="signUpGirlStudying" alt="Student studying" src="images/girlStudying.svg" />
    </div>
  );
};

export default SignUp;
