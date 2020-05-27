import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import { signout } from '../../store/actions/user.actions';

import './Header.scss';

const Header: React.FC<any> = (props) => {
  const signout = () => {
    localStorage.clear();
    props.signout();
  };

  return (
    <div className="main-header">
      <CustomInput
        label=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onSearch(e.target.value.substr(0, 20))
        }
        value={props.value}
        type="text"
      />
      <CustomButton name="Sign out" onClick={signout} />
    </div>
  );
};

const mapDispatchToProps = {
  signout,
};

export default withRouter(connect(null, mapDispatchToProps)(Header)) as any;
