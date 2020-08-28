import React, { Component } from 'react'
import dayJs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//Component imports
import JobDesc from './JobDesc'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles= {
    card: {
        position: 'relative',
        margin: '10px 0',
        maxWidth: '100%',
    },
    content: {
        padding: '25px'
    },
    jobTitle: {
        fontWeight: 'bold'
    },
    organization: {
        fontWeight: 'bold'
    },
    location:{
        fontWeight: 'bold'
    },
    createdAt: {
        fontWeight: 'bold'
    }
}

class JobPostJobseeker extends Component {
    render() {
        dayJs.extend(relativeTime)
        const { 
            classes, 
            jobPost: { 
                jobTitle, 
                organization, 
                location,
                workEx,
                createdAt, 
                jobId 
            }
         } = this.props
        return (
            <Grid container>
                <Grid item xs/>
                <Grid item sm={8}>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography 
                    variant="h6" 
                    color="secondary"
                    className={classes.organization}
                    >
                        {organization}
                    </Typography>
                    <Typography 
                    variant="h5" 
                    color="textPrimary"
                    className={classes.jobTitle}
                    >
                        {jobTitle} <Typography variant="caption">{'  ( '} {workEx} {' )'}</Typography>
                    </Typography>
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
                    <JobDesc jobId={jobId}/>
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs/>
            </Grid>
        )
    }
}

export default withStyles(styles)(JobPostJobseeker)
