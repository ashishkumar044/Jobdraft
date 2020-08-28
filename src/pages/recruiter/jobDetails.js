import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

//Component imports
import RNavbar from '../../components/Navbar/Recruiter/RNavbar'
import Jobdetails from '../../components/recruiter/Jobdetails'

//MUI imports
import Grid from '@material-ui/core/Grid'

//Redux imports
import { connect } from 'react-redux'
import { getJobDetail } from '../../redux/actions/recruiterDataActions'

export class jobDetails extends Component {
    // state={
    //     profile: null,
    // }
    componentDidMount(){
        const jobId = this.props.match.params.jobId
        this.props.getJobDetail(jobId)
    }

    render() {      
        const jobPostMarkup = 
            jobPost => <Jobdetails key={jobPost.jobId} jobPost={jobPost}/>
        
        return (
            <Fragment>
                <RNavbar/>
            <Grid container className="jobseekerContainer" spacing={2}>
                <Grid item sm/>
                <Grid item sm={10} xs={12}>
                    {jobPostMarkup}
                </Grid>
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
    recruiterData: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    recruiterData: state.recruiterData
})

export default connect(mapStateToProps, { getJobDetail })(jobDetails)
