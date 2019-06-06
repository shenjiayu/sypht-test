import React from 'react';
import { connect } from 'react-redux';
import { loginFunc } from '../actions/user';

const LoginPage = (props) => {
  const { login } = props;
  return (
    <div className="login-page">
      <button className="login-page__button" onClick={() => login()}>Login</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(loginFunc())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);