import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import { signin } from '../../store/actions/user.actions';

import './AuthInputFields.scss';

const AuthInputFields: React.FC = (props: any) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async(e: any) => {
    e.preventDefault();
    await props.signin(login, password);
  };

  return (
    <form className="inputs-wrapper" onSubmit={onSubmit}>
      <div className="input-container">
        <CustomInput
          label="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="email"
        />
      </div>
      <div className="input-container">
        <CustomInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div className="button-wrapper">
        <CustomButton name="Sign In" type="submit" />
      </div>
      {props.isAuthorized && <Redirect to="/grid" />}
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthorized: state.usersReducer.isAuthorized,
});

const mapDispatchToProps = {
  signin,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthInputFields),
);
