import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute: React.FC<any> = ({component: Component, isAuthorized, ...rest}) => {

  return (
    <div>
      <Route
        {...rest}
        render={props => isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthorized: state.usersReducer.isAuthorized
})

export default connect(mapStateToProps)(PrivateRoute);
