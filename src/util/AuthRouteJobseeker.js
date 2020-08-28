import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
const AuthRouteJobseeker = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? <Redirect to="/j/home" /> : <Component {...props} />
      }
    />
  )

const mapStateToProps = (state) => ({
  authenticated: state.jobseeker.authenticated
})

AuthRouteJobseeker.propTypes = {
  jobseeker: propTypes.object
}

export default connect(mapStateToProps)(AuthRouteJobseeker)