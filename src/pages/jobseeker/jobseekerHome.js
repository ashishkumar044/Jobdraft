import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

//Component imports
import JNavbar from '../../components/Navbar/Jobseeker/JNavbar'
import JobseekerProfile from '../../components/jobseeker/JobseekerProfile'
import JobPrefDetails from '../../components/jobseeker/JobPrefDetails'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

//Redux Imports
import { connect } from 'react-redux'

const styles= {
    headerCard: {
        margin: '15px auto',
        textAlign: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: '600',
        color: '#1d2d35'
    },
    quoteCard: {
        padding: '0 30px',
        alignItem: 'center'
    },
    quote: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '400',
        color: '#1d2d35',
        fontStyle: 'italic'
    },
    author: {
        textAlign: 'right',
        fontSize: '1.5rem',
        fontWeight: '400',
        color: '#1d2d35',
        fontStyle: 'italic'
    },
    subHeader: {
        textAlign: 'left',
        fontSize: '1.8rem',
        fontWeight: '400',
        color: '#1d2d35'
    },
    containerCard: {
        margin: '40px 0',
        // textAlign: 'left',
        width: '100%',
    },
    skillCard: {
        margin: '15px auto',
        textAlign: 'left',
        maxWidth: '100%',
        fontWeight: 'bold',
    },
    skill: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.8rem'
    },
    skillContainer: {
        margin: '15px',
        textAlign: 'center',
    },
    skillLink: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '1.5rem'
    },
    content: {
        fontSize: '1.2rem',
        color: '#1d2d35'
    },
    upcomingHeader: {
        fontSize: '2.3rem',
        fontWeight: '800',
        textAlign: 'center',
        color: '#3f51b5'
    },
    upcomingContent: {
        fontSize: '1.4rem',
        fontWeight: '500',
        textAlign: 'center',
        color: '#3f51b5'
    }
}

class jobseekerHome extends Component {
    render() {
        const { classes, 
            jobseeker: { jobseekerCredentials: { firstName }}} = this.props
        return (
            <Fragment>
                <JNavbar/>
            <Grid container className="jobseekerContainer" spacing={2}>
                <Grid item xs/>
                <Grid item lg={3} sm={4} xs={12}>
                    <Card elevation={0} className={classes.containerCard}>
                        <CardContent>
                            <JobseekerProfile/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={7} sm={6} xs={12}>
                    <Card elevation={0} className={classes.containerCard}>
                        <CardContent>
                        {/* Header */}
                            <h4 className={classes.header}>Hello, {firstName} </h4>

                        {/* Quote */}
                        <Card elevation={0} className={classes.quoteCard}>
                            <CardContent>
                                <h4 className={classes.quote}>
                                    “For the things we have to learn before we can do them, we learn by doing them.”
                                </h4>
                                <h4 className={classes.author}>
                                    — Aristotle
                                </h4>
                            </CardContent>
                        </Card>

                        {/* Career Info */}
                        <Card elevation={0}>
                            <CardContent>
                                <h6 className={classes.content}>
                                    Get the best jobs for you based on your preferences and your skills
                                </h6>
                                <JobPrefDetails/>
                            </CardContent>
                        </Card>

                        {/* Jobs */}
                        <Card elevation={0}>
                            <CardContent>
                                <h6 className={classes.content}>
                                    We'll send relevant job openings to your email based on your profile and 
                                    the company requirements
                                </h6>
                            </CardContent>
                        </Card>{/* Jobs */}
                        <Card variant="outlined">
                            <CardContent>
                                <h5 className={classes.upcomingHeader}>
                                    Coming Soon !!!
                                </h5>
                                <p className={classes.upcomingContent}>
                                    <strong>Career mentors</strong>
                                </p>
                                <p className={classes.upcomingContent}>
                                    Learn from people working in different industries
                                </p>
                            </CardContent>
                        </Card>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs/>
            </Grid>
                    {/* <Footer/> */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    jobseeker: state.jobseeker
})


jobseekerHome.propTypes = {
    jobseeker: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(jobseekerHome))