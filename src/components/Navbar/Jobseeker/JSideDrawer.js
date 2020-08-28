import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

//Redux imports
import { connect } from 'react-redux'
import { logoutJobseeker } from '../../../redux/actions/jobseekerActions'


const styles = {
    sideDrawer: {
        height: '100%',
        background: '#fff',
        boxShadow: '-1px 0px 4px 0 rgba(0,137,123,0.6)',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '60%',
        maxWidth: '400px',
        zIndex: 200,
    },
    navItemsList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& li': {
            '& :hover, :active': {
              color: '#00897b'
            },
            margin: '0.8rem 0'
        }
    },     
    navItem: {
      color: '#1d2d35',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },    
    navButton: {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      padding: '0 0.8rem',
      margin: '0 0 0 3px',
      backgroundColor: '#1d2d35',
      borderRadius: 0
    },  
}

class JSideDrawer extends Component {
    handleLogout = () => {
        this.props.logoutJobseeker()
    }
    render() {
        const { classes, authenticated } = this.props
        return (
                <nav className={classes.sideDrawer}>
                    {authenticated ? (
                    <div className='sideDrawerNavigationItems'>
                        <ul className={classes.navItemsList}>
                            <li>
                                <Link to="/j/home" className={classes.navItem}>Home</Link>
                            </li>
                            <li>
                                <Link to="/j/addSkills" className={classes.navItem}>+ Skills</Link>
                            </li>
                            <li>
                                <Link to="/j/jobs" className={classes.navItem}>Jobs</Link>
                            </li>
                            <li>
                                <Link to="/community" className={classes.navItem}>Community</Link>
                            </li>
                            <li>
                                <Button 
                                    onClick={this.handleLogout}
                                    component={Link} 
                                    to={"/j/signin"}
                                    className={classes.navButton}
                                    variant="outlined"
                                    >
                                        Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                    ) : (
                    <div className='sideDrawerNavigationItems'>
                        <ul className={classes.navItemsList}>
                            <li>
                                <Link to="/" className={classes.navItem}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className={classes.navItem}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/j/signin" className={classes.navItem}>Sign In</Link>
                            </li>
                            <li>
                                <Button 
                                    component={Link}
                                    to="/r/signin" 
                                    className={classes.navButton}
                                    variant="contained"
                                    >
                                        Recruiter
                                </Button>
                            </li>
                        </ul>
                    </div>
                    )
                }
            </nav>
        )
    }
}

JSideDrawer.propTypes = {
    logoutJobseeker: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.jobseeker.authenticated
})
const mapActionToProps = { logoutJobseeker }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(JSideDrawer))