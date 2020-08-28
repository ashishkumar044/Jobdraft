import React, { Component } from 'react'
import dayJs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'

//Component imports
import DeletePost from './DeletePost'
import JobDesc from './JobDesc'
//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

//Icon imports
import PeopleIcon from '@material-ui/icons/People';

//Redux imports
import { connect } from 'react-redux'
import MyButton from '../../util/MyButton'

const styles= {
    card: {
        position: 'relative',
        margin: '10px',
        maxWidth: '100%',
    },
    content: {
        padding: '25px'
    },
    jobTitle: {
        fontWeight: 'bold'
    },
    location:{
        fontWeight: 'bold'
    },
    createdAt: {
        fontWeight: 'bold'
    },
    countContainer: {
        float: 'right',
    },
}

class JobPostRecruiter extends Component {
    render() {
        dayJs.extend(relativeTime)
        const { 
            classes, 
            jobPost: { 
                jobTitle, 
                email,
                location, 
                createdAt, 
                workEx,
                jobId,
                applyCount,
             },
            recruiter: {authenticated}
            } = this.props

        const deleteButton = authenticated ? (
            <DeletePost jobId={jobId}/>
        ) : null
        return (
            <Grid container>
                <Grid item sm/>
                <Grid item lg={8} sm={8} xs={12}>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <JobDesc jobId={jobId} email={email}/>
                            <Typography 
                            variant="h5" 
                            color="secondary"
                            className={classes.jobTitle}
                            >
                                {jobTitle} <Typography variant="caption">{'  ( '} {workEx} {' )'}</Typography>
                            </Typography>
                            {deleteButton}
                            <Typography 
                            variant="body1" 
                            color="textPrimary"
                            className={classes.location}
                            >
                                {location}
                            </Typography>
                            <Typography 
                            variant="caption" 
                            color="textSecondary"
                            className={classes.createdAt}
                            >
                                Posted {dayJs(createdAt).fromNow()}
                            </Typography>
                            {/* <Link to={`/r/job/${jobId}`} className={classes.openPost}> View applications</Link> */}
                            <div className={classes.countContainer}>
                                <MyButton tip="Job Applications" position="left">
                                    <PeopleIcon/>
                                </MyButton>
                                <span>{applyCount} </span>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

JobPostRecruiter.propTypes = {
    recruiter: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    recruiter: state.recruiter
})


export default connect(mapStateToProps)(withStyles(styles)(JobPostRecruiter))
