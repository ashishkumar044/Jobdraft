import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import theme from '../../util/theme'

//Component imports
import DeleteApplication from './DeleteApplication'

//MUI imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

//Redux imports
import { connect } from 'react-redux'


const styles = {
    ...theme.spreadThis,
    applicationData: {
        marginLeft: '30px'
    },
    applicationList: {
        backgroundColor: '#e0f2f1'
    },
    caption: {
        margin: '20px 5px',
        textAlign: 'center'
    } 
}

class JobApplications extends Component {
    render() {
        const { classes, jobApplications, recruiter: {authenticated} } = this.props
        // const { jobApplications: {applicationId} } = this.props.recruiterData
         
        return(
            <Grid container>
                <Typography variant="h6">Applications : </Typography>
                {jobApplications.map((jobApplication) => {
                    const { createdAt, email, name, applicationId } = jobApplication
                   
                    // const deleteButton = authenticated ? (
                    //     <DeleteApplication applicationId={applicationId}/>
                    // ) : null

                    return(
                        <Fragment key={createdAt}>
                            <Grid item sm={12} xs={12}>
                                <div className={classes.applicationData}>
                                <List>
                                <ListItem 
                                    button 
                                    component={Link} 
                                    to={`/r/job/application/${email}`} 
                                    className={classes.applicationList}
                                    >
                                    {name}
                                </ListItem>
                                {/* {deleteButton} */}
                                </List>
                                </div>
                            </Grid>
                            <br/>
                        </Fragment>
                    )
                })}
            </Grid>
        )
    }
}

JobApplications.propTypes = {
    jobApplications: propTypes.array.isRequired,
    recruiter: propTypes.object.isRequired,
    recruiterData: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    recruiter: state.recruiter,
    recruiterData: state.recruiterData
})

export default connect(mapStateToProps)(withStyles(styles)(JobApplications))