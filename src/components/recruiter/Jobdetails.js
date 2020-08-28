import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import dayjs from 'dayjs'

//Component imports
import RNavbar from '../../components/recruiter/RNavbar'
import JobApplications from '../../components/recruiter/JobApplications'

//MUI imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { getJobDetail } from '../../redux/actions/recruiterDataActions'

const styles = {
    separator: {
        border: 'none',
        margin: '4px'
    },
    dialogContent: {
        padding: '20px',
        textAlign: 'left',
        objectFit: 'cover',
        maxWidth: '100%',
        margin: '5px'
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    spinner: {
        textAlign: 'center',
        margin: '50px 0'
    },
    openPost: {
        color: '#00897b',
        textDecoration: 'none',
        fontWeight: 'bold',
        position: 'absolute',
        left: '65%'
    }
}

export class jobDetails extends Component {

    render() {      
        const { classes, 
                jobPost: {
                    jobTitle, 
                    jobDesc, 
                    organization, 
                    location,
                    workEx,
                    reqSkills,
                    createdAt, 
                    applyCount,
                    jobApplications
                 },
            } = this.props  
            
        return (
            <Fragment>
                <RNavbar/>
            <Grid container>
                <Grid item sm/>
                <Grid item sm={11} xs={12}>
                    <div className={classes.dialogContent}>
                    <Typography color="secondary" variant="body1" align="center">
                        <strong>{organization}</strong>
                    </Typography>
                    <hr className={classes.separator}/>
                    <Typography color="primary" variant="h5" align="center">{jobTitle}</Typography>
                    <hr className={classes.separator}/>
                    <hr className={classes.separator}/>
                    <Typography color="secondary" variant="subtitle2">
                        <strong>Location: </strong> 
                        {location}
                    </Typography>
                    <Typography color="secondary" variant="subtitle2">
                        <strong>Work Experience: </strong> 
                        {workEx}
                    </Typography>
                    <Typography color="secondary" variant="subtitle2">
                        <strong>Skills: </strong> 
                        {reqSkills}
                    </Typography>
                    <Typography color="secondary" variant="caption">
                        <strong>Posted on:{' '} </strong>
                        {dayjs(createdAt).format('DD MMM YYYY')}
                        <hr className={classes.separator}/>
                    </Typography>
                    <Typography color="secondary" variant="subtitle2">
                        <strong>Job Description: </strong>
                        <br/>
                        {jobDesc}
                    </Typography>
                    <hr className={classes.separator}/>
                    <Typography color="secondary" variant="subtitle2">
                        <strong>Application Counts: {' '} </strong>
                            {applyCount}
                    </Typography>
                    </div>
                    </Grid>
                <JobApplications jobApplications={jobApplications}/>
                <hr/>
                <Grid item sm/>
            </Grid>
            </Fragment>
        )
    }
}

jobDetails.propTypes = {
    getJobDetail: propTypes.func.isRequired,
    jobId: propTypes.string.isRequired,
    jobPost: propTypes.object.isRequired,
    recruiter: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    recruiter: state.recruiter
})

export default connect(mapStateToProps, { getJobDetail })(withStyles(styles)(jobDetails))
