import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import AppIcon from '../../images/jobdraft.png'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

//Redux imports
import { connect } from 'react-redux'
import { logoutJobseeker } from '../../redux/actions/jobseekerActions'


const styles = {
    buttons: {
        position: 'absolute',
        left: '65%',
        margin: 'auto 8px'
    },
    navContainer: {
        margin: '10px 50px',
        textDecoration: 'none',
        // maxWidth: '1400px',
        minWidth: '300px',
      },
    brand: {
        color: '#e0f2f1'
    },
    image: {
        width: '40px',
        weight: '40px',
        margin: '10px 10px'
    }
}

class JNavbar extends Component {
    handleLogout = () => {
        this.props.logoutJobseeker()
    }
    render() {
        const { classes, authenticated } = this.props
        return (
            <AppBar className={classes.appBar}>
                <Grid container>
                    <Grid item lg={12} sm={12} xs={12}>
                        <Toolbar className="navContainer">
                            {authenticated ? (
                                <Fragment>
                                    <img src={AppIcon} alt="job" className={classes.image}/>
                                    <Link to="/j/home"><h2 className={classes.brand}>JobDraft</h2></Link>
                                    <div className={classes.buttons}>
                                        <Button color="inherit" component={Link} to="/j/home" >Home</Button>
                                        <Button color="inherit" component={Link} to="/community" >Community</Button>
                                        <Button color="inherit" component={Link} to="/j/jobs" className={classes.jobButton}>Jobs</Button>
                                        <Button color="inherit" component={Link} to="/j/profile" >Profile</Button>
                                        <Button 
                                        color="inherit" 
                                        onClick={this.handleLogout}
                                        component={Link} 
                                        to={"/j/login"}
                                        className={classes.logoutButton}
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link to="/"><h2 className={classes.brand}>JobDraft</h2></Link>
                                    <div className={classes.buttons}>
                                    <Button color="inherit" component={Link} to="/about">ABOUT US</Button>
                                    </div>
                                </Fragment>
                            )}
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
}

JNavbar.propTypes = {
    logoutJobseeker: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.jobseeker.authenticated
})
const mapActionToProps = { logoutJobseeker }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(JNavbar))