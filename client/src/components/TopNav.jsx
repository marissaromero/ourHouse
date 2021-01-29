import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './Login.jsx';
import {Link } from "react-router-dom";


class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
        <div className = 'navBlock'>
          <img className = 'title' src='/logo.svg'></img>
          <h2 className = 'invite'>invite members</h2>
            <form>
            <Link to="/login">
              <input className = 'loginButton' type="submit" value="sign out"/>
            </Link>
            </form>
        </div>
    )
  }
}

export default TopNav
