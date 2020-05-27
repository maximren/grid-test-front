import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import UserTablePage from './pages/UserTablePage';
import AuthPage from './pages/AuthPage';
import PrivateRoute from './helpers/PrivateRouter';
import { checkAuthToken } from './store/actions/user.actions';

import './App.scss';

const App: React.FC<any> = (props) => {

  useEffect(() => {
    props.checkAuthToken()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route component={AuthPage} exact path="/" />
        <PrivateRoute component={UserTablePage} path="/grid" />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  checkAuthToken
}

export default connect(null, mapDispatchToProps)(App);
