import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

//Component imports
import DrawerToggleButton from '../DrawerToggleButton'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

//Redux imports
import { connect } from 'react-redux'
import { logoutJobseeker } from '../../../redux/actions/jobseekerActions'


const styles = {
    toolbar: {
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 137, 123, 0.95)',
        height: '60px',
        zIndex: 200
      },      
      toolbarNavigation: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: '0.2rem 2rem',     
        '& .toolbarNavigationItems': {
            '& li': {
                '& :hover, :active': {
                  color: '#1d2d35'
                }
            }
        },
      },
      
      logo: {
        color: '#fff',
        fontSize: '2rem',
        textDecoration: 'none',
      },
      
      spacing: {
        flex: 1,
      },
      
      navItemsList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
      },      
      navItem: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '0 0.8rem',
      },      
      navButton: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '0 0.8rem',
        margin: '0 0 0 3px',
        borderColor: '#fff',
        borderRadius: 0
      }, 
}

class JToolbar extends Component {
    handleLogout = () => {
        this.props.logoutJobseeker()
    }
    render() {
        const { classes, authenticated } = this.props
        return (
            <header className={classes.toolbar}>
                <nav className={classes.toolbarNavigation}>
                    {authenticated ? (
                    <Fragment>
                        <div className={classes.toolbarLogo}>
                        <Link to="/j/home"><h2 className={classes.logo}>Jobdraft</h2></Link>
                    </div>
                    <div className={classes.spacing}/>
                    <div className='toolbarNavigationItems'>
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
                                <Link to="/j/feedback" className={classes.navItem}>Contact us</Link>
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
                    </Fragment>
                    ) : (
                    <Fragment>
                    <div className={classes.spacing}/>
                    <div className='toolbarNavigationItems'>
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
                    </Fragment>
                    )
                }
                <div className="toolbarToggleButton">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
            </nav>
        </header>
        )
    }
}

JToolbar.propTypes = {
    logoutJobseeker: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.jobseeker.authenticated
})
const mapActionToProps = { logoutJobseeker }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(JToolbar))