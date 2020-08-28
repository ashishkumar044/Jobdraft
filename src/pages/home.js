import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

//Icon imports
import SubjectIcon from '@material-ui/icons/Subject'

const styles= {
    header: {
        textAlign: 'center',
        fontSize: '3.8rem',
        fontWeight: '800',
        color: '#1d2d35',
        margin: '0 0 0.25em 0'
    },
    subHeader: {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: '600',
        color: '#1d2d35',
        margin: '0 0 1.5em 0'
    },
    question: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#1d2d35',
        margin: '2em 0 0 0'
    },
    content: {
        textAlign: 'left',
        fontSize: '1.4rem',
        fontWeight: '500',
        color: '#1d2d35',
    },
    featuresContainer: {
        textAlign: 'center',
        padding: '10px 60px'
    },
    featureBox: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    feature: {
        textAlign: 'left',
        fontSize: '1.4rem',
        fontWeight: '650',
        color: '#1d2d35',
    },
    icon: {
        height: '55px',
        color: '#3f51b5',
        margin: '0px 12px'
    },
    jbutton: {        
        margin: '10px 0',
        position: 'relative',
        fontWeight: 'bold',
        fontSize: '1rem',
        borderRadius: 0,
        boxShadow: '0px 0px 0px 0px rgba(0,137,123,0.6)',
        width: '15em',
        backgroundColor: 'yellow',
        color: '#1d2d35',
        '& :hover, :active': {
          color: '#00897b'
        }
    },
    rbutton: {        
        margin: '10px 0',
        position: 'relative',
        fontWeight: 'bold',
        fontSize: '1rem',
        borderRadius: 0,
        boxShadow: '0px 0px 0px 0px rgba(0,137,123,0.6)',
        width: '20em',
        backgroundColor: 'yellow',
        color: '#1d2d35',
        '& :hover, :active': {
          color: '#00897b'
        }
    }
}

class home extends Component {
    render() {
        const { classes } = this.props
        return (
            <div style={{height: '100%'}}>
                <Navbar/>
                <Grid container spacing={1}>
                    <Grid item xs/>
                    <Grid item lg={10} sm={10} xs={12}>
                        <div className="info-container">{/* Quote */}
                                <h1 className={classes.header}>
                                    Bridging the gap between talent and opportunity
                                </h1>
                                <h4 className={classes.subHeader}>
                                    A recruitment platform to connect skilled and talented 
                                    jobseekers to the right companies 
                                </h4>
                                <h6 className={classes.question}>
                                    <strong> Why Jobdraft ? </strong>
                                </h6>
                                {/* For jobseekers */}
                                <p className={classes.content}>
                                    <strong> For jobseekers :  </strong>
                                    Jobdraft helps the skilled and talented jobseekers by connecting them with 
                                    the relevant recruiters looking for those particular skills and talents. We do so 
                                    by evaluating a jobseeker based on their skills and their job preferences and
                                    matching them with the recruiter's requirements. 
                                </p>
                                <div className={classes.featuresContainer}>
                                    <div className={classes.featureBox}>
                                        <SubjectIcon className={classes.icon}/>
                                        <h6 className={classes.feature}>
                                            Get relevant job openings based on your profile delivered to your email
                                        </h6>
                                    </div>
                                    <div className={classes.featureBox}>
                                        <SubjectIcon className={classes.icon}/>
                                        <h6 className={classes.feature}>
                                        Learn and evaluate skills to upgrade your profile
                                        </h6>
                                    </div>
                                    <h6 className={classes.feature}>
                                    </h6>
                                </div>
                                <Button
                                    variant="contained"
                                     component={Link}
                                    to="/j/signin"
                                    className={classes.jbutton}
                                    >
                                        Try Jobdraft 
                                </Button>
                            <br/>
                            <br/>
                                {/* For recruiters */}
                                <p className={classes.content}>
                                    <strong> For recruiters :  </strong>
                                    Jobdraft helps the recruiters hire the candidate best fit for the job. It
                                    is an attempt to reduce the time spent by recruiters on shortlisting resumes.
                                    With help of Jobdraft, recruiters can get skilled and more qualified candidates
                                    based on the requirements of the organization. 
                                </p>
                                <div className={classes.featuresContainer}>
                                    <div className={classes.featureBox}>
                                        <SubjectIcon className={classes.icon}/>
                                        <h6 className={classes.feature}>
                                            Find the most suitable candidate for the job role based on the skills
                                            required.
                                        </h6>
                                    </div>
                                </div>
                                <Button
                                    variant="contained"
                                     component={Link}
                                    to="/r/signin"
                                    className={classes.rbutton}
                                    >
                                        Try Jobdraft as Recruiter 
                                </Button>
                            <br/>
                        </div>
                    </Grid>
                    <Grid item xs/>
                </Grid>
                
            </div >       
        )
    }
}

export default withStyles(styles)(home)