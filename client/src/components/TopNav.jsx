import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="navBlock">
      <img className="title" alt="ourHouse logo" src="/images/logo.svg" />
      <h2 className="invite">invite members</h2>
      <form>
        <Link to="/login">
          <input className="loginButton" type="submit" value="sign out" />
        </Link>
      </form>
    </div>
  );
}

export default TopNav;
