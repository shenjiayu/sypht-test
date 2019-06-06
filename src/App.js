import React from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from './reducers/user';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css';

const App = (props) => {
  const { loggedIn } = props;

  return (
    <div className="app">
      <header>
        <h1>Sypht Test</h1>
      </header>
      { !loggedIn ?
        <LoginPage></LoginPage>
        :
        <HomePage></HomePage>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state)
});

export default connect(
  mapStateToProps
)(App);
