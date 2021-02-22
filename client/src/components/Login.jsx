import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [inputValue, setInputValue] = useState({ username: '', password: '', userId: 0 });
  const { username, password, userId } = inputValue;

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
    // axios.get('./login', {
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
    <div className="loginMain">
      <div className="signIn">
        <img className="signInLogo" alt="Our House Logo" src="images/logo.svg" />
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="signInTitle">Sign In</div>
          <div className="username1Input">
            <input
              className="formTxt"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="username"
            />
          </div>
          <div className="password1Input">
            <input
              className="formTxt"
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <Link to={{ pathname: '/home', query: userId }}>
            <input className="submitButton" type="submit" value="submit" />
          </Link>
          <div className="signUp1">
            new to ourHouse?
            <Link to="/signup">join now</Link>
          </div>
        </form>
      </div>
      <img className="girlStudying" alt="Student studying" src="images/girlStudying.svg" />
    </div>
  );
}

export default Login;
