import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

//Component imports
import EditRecruiterDetails from './EditRecruiterDetails'
import PostJobDialog from './PostJobDialog'

//MUI imports
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

//Redux Imports
import { connect } from 'react-redux'


const styles = theme => ({
    profile: {
        // margin: '30px',
        position: 'relative'
    },
    profileInfo: {
        margin: '40px 0px',
        padding: '0 30px',
        position: 'relative',
        backgroundColor: '#607d8b',
        textColor: '#fafafa'
    },
    jobsCard: {
        margin: '15px auto',
        textAlign: 'left',
        maxWidth: '100%',
    },
    browseJobs: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.8rem'
    },
    postjobCard: {
        margin: '15px auto',
        textAlign: 'left',
        maxWidth: '100%',
    },
    button: {
        margin: '10px'
    },
    header: {
        margin: '20px',
        textAlign: 'center',
        color: '#eceff1'
        // fontStyle: 'italic'
    },
    about: {
        margin: '3px',
        textAlign: 'left'
    },
    phone: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1'
        // position: 'absolute',
        // left: '20px'
    },
    email: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
        // position: 'absolute',
        // left: '45px'
    },
    location: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
        // position: 'absolute',
        // left: '45px'
    },
    content: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
    },
    website: {
        margin: '3px',
        textAlign: 'left',
        color: '#e0f2f1',
    },
    caption: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
    },
    loading: {
        fontWeight: 'bold',
        margin: '40px'
    }
})


class RecruiterProfile extends Component {
    render() {
        const { classes, 
            recruiter: { recruiterCredentials: {  
            name, 
            email, 
            organization,
            website,
            location,
            phone    
        }, 
        loading, 
        authenticated
    }
} = this.props

    let recruiterProfileMarkup = !loading ? (authenticated ? (
        <Grid container>
            <Grid item xs/>
            <Grid item lg={10} sm={10} xs={12}>
                        <div className={classes.profile}>
                            <Card className={classes.profileInfo}>
                                <CardContent>
                                <Typography variant="h4" className={classes.header}>
                                    {organization}
                                </Typography>
                                {phone && (
                                    <Fragment>
                                        <Typography variant="body1" className={classes.phone}> <strong>Phone: </strong>
                                            {'   '}{phone}
                                        </Typography>
                                    </Fragment>
                                )}
                                {email && (
                                    <Fragment>
                                            <Typography variant="body1" className={classes.email}><strong>Email: </strong>
                                                {'   '}{email}
                                            </Typography>
                                    </Fragment>
                                )}
                                {location && (
                                    <Fragment>
                                        <Typography variant="body1" className={classes.location}><strong>Location: </strong>
                                            {'   '}{location}
                                        </Typography>
                                    </Fragment>
                                )}
                                {website && (
                                    <Fragment>
                                    <Typography variant="body1" className={classes.content}><strong>Company Website: </strong>
                                        <a className={classes.website} href={website} target="_blank" rel="noopener noreferrer">
                                            {'   '}{website}
                                        </a>
                                    </Typography>
                                    </Fragment>
                                )}
                                <Typography variant="body1" className={classes.caption}><strong>Handled by: </strong>
                                    {'   '}{name}
                                </Typography>             
                                </CardContent>
                                <EditRecruiterDetails/>
                            </Card>
                        </div>
                    {/* Post  Jobs */}
                    <Card variant="outlined" className={classes.postjobCard}>
                        <CardContent>
                        <PostJobDialog/>
                        </CardContent>
                    </Card>
                    {/* Browse Applications */}
                    <Card variant="outlined" className={classes.jobsCard}>
                        <CardContent>
                            <Link to={`/r/jobs/${email}`} className={classes.browseJobs}> See Posted jobs and applications</Link>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid item xs/>
    </Grid>
    ) : (
        <Typography variant="h3" className={classes.loading}>Loading...</Typography>
    )) : (<Typography variant="h3" className={classes.loading}>Loading...</Typography>)

    return recruiterProfileMarkup 
    }
}

const mapStateToProps = (state) => ({
    recruiter: state.recruiter
})

RecruiterProfile.propTypes = {
    recruiter: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(RecruiterProfile))
