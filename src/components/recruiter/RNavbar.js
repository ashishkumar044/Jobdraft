import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import AppIcon from '../../images/jobdraft.png'

//Component imports

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

//Redux imports
import { connect } from 'react-redux'
import { logoutRecruiter } from '../../redux/actions/recruiterActions'
import { Grid } from '@material-ui/core'


const styles = {
    buttons: {
        position: 'absolute',
        left: '80%',
        margin: 'auto 8px'
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

class RNavbar extends Component {
    handleLogout = () => {
        this.props.logoutRecruiter()
    }
    render() {
        const { classes, authenticated } = this.props
        return (
            <AppBar>
                <Grid container spacing={1}>
                    <Grid item xs/>
                    <Grid item lg={12} sm={12} xs={12}>
                    <Toolbar className="nav-container">
                        {authenticated ? (
                            <Fragment>
                                <img src={AppIcon} alt="job" className={classes.image}/>
                                <Link to="/r/home"><h2 className={classes.brand}>JobDraft</h2></Link>
                                <div className={classes.buttons}>
                                {/* Home */}
                                <Button color="inherit" component={Link} to="/r/home" >Home</Button>
                                <Button 
                                color="inherit" 
                                onClick={this.handleLogout} 
                                component={Link} 
                                to={"/r/login"}
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
                    <Grid item xs/>
                    </Grid>
            </AppBar>
        )
    }
}

RNavbar.propTypes = {
    logoutRecruiter: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.recruiter.authenticated
})
const mapActionToProps = { logoutRecruiter }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(RNavbar))