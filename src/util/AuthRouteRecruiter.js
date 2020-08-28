import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const AuthRouteRecruiter = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? <Redirect to="/r/home" /> : <Component {...props} />
      }
    />
  )

const mapStateToProps = (state) => ({
    authenticated: state.recruiter.authenticated
})

AuthRouteRecruiter.propTypes = {
    recruiter: propTypes.object
}

export default connect(mapStateToProps)(AuthRouteRecruiter)