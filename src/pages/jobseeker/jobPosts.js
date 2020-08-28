import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

//Component imports
import JobPostJobseeker from '../../components/jobseeker/JobPostJobseeker'
import JNavbar from '../../components/Navbar/Jobseeker/JNavbar'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

//Redux imports
import { connect } from 'react-redux'
import { getJobPosts } from '../../redux/actions/jobseekerDataActions'
import { Typography } from '@material-ui/core'


const styles= {
    button: {
        margin: '20px',
        width: '80%'
    },
    header: {
        margin: '20px',
        textAlign: 'center'
    },
    organization: {
        left: '35%',
        textAlign: 'center'
    },
    location:{
        left: '60%',
        textAlign: 'center'
    },
    createdAt: {
        left: '95%',
        textAlign: 'center'
    },
    loading: {
        fontWeight: 'bold',
        margin: '40px'
    }
}

class jobPosts extends Component {
    componentDidMount(){
       this.props.getJobPosts()
    }
    
    render() {
        const { classes } = this.props
        const { jobPosts, loading } = this.props.jobseekerData
        let recentJobPostsMarkup = !loading ? (
            jobPosts.map((jobPost) => 
            <JobPostJobseeker key={jobPost.jobId} jobPost={jobPost} />)
        ) : (
            <Typography variant="h3" className={classes.loading}>Loading...</Typography>
        )
        return (
            <Fragment>
                <JNavbar/>
            <Grid container className="jobseekerContainer" spacing={2} >
                <Grid item sm={12} xs={12}>
                    {recentJobPostsMarkup}
                </Grid>
            </Grid>
            </Fragment>
        )
    }
}

jobPosts.propTypes = {
    getJobPosts: propTypes.func.isRequired,
    jobseekerData: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    jobseekerData: state.jobseekerData
})

export default connect(mapStateToProps, { getJobPosts })(withStyles(styles)(jobPosts))