import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

import JobPostRecruiter from '../../components/recruiter/JobPostRecruiter'
import RNavbar from '../../components/Navbar/Recruiter/RNavbar'
import PostJobDialog from '../../components/recruiter/PostJobDialog'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

//Redux imports
import { connect } from 'react-redux'
import { getJobPosts } from '../../redux/actions/recruiterDataActions'

const styles = {
    postjobCard: {
        position: 'relative',
        margin: '10px 10px 40px',
        maxWidth: '100%',
    },
    loading: {
        fontWeight: 'bold',
        margin: '40px'
    }
}

export class recruiterJobs extends Component {
    componentDidMount(){
        const email = this.props.match.params.email
        this.props.getJobPosts(email)
    }
    render() {
        const {classes} = this.props
        const { jobPosts, loading } = this.props.recruiterData

        const jobPostsMarkup = loading ? (
            <h2 className={classes.loading}><strong>LOADING...</strong></h2>
        ) : jobPosts === null ? (
            <h3><strong>No jobs posted yet</strong></h3>
        ) : (
            jobPosts.map(jobPost => <JobPostRecruiter key={jobPost.jobId} jobPost={jobPost}/>)
        )
        return (
            <Fragment>
                <RNavbar/>
                <Grid container className="jobseekerContainer" spacing={2}>
                    <Grid item sm={12} xs={12}>
                    {/* Post  Jobs */}
                    <Grid container>
                        <Grid item xs/>
                        <Grid item lg={8} sm={8} xs={12}>
                            <Card variant="outlined" className={classes.postjobCard}>
                                <CardContent>
                                    <PostJobDialog/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs/>
                    </Grid>
                    {/* Posted Jobs */}
                        {jobPostsMarkup}
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

recruiterJobs.propTypes = {
    getJobPosts: propTypes.func.isRequired,
    recruiterData: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    recruiterData: state.recruiterData
})

export default connect(mapStateToProps, { getJobPosts })(withStyles(styles)(recruiterJobs))
