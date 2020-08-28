import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'

//Component imports
import ApplicantProfile from '../../components/recruiter/ApplicantProfile'
import RNavbar from '../../components/Navbar/Recruiter/RNavbar'
//MUI imports
import Grid from '@material-ui/core/Grid'

//Redux imports
import { connect } from 'react-redux'

export class applicantDetails extends Component {
    state={
        profile: null,
    }
    componentDidMount(){
        const email = this.props.match.params.email
        axios.get(`/r/app/${email}/details`)
            .then(res => {
                this.setState({
                    profile: res.data.user,
                    projects: res.data.projects
                })
            })
            .catch(err => console.log(err))
    }
    render() {        
        return (
            <Fragment>
                <RNavbar/>
                <Grid container>
                    <Grid item sm/>
                    <Grid item sm={10} xs={12}>
                        {this.state.profile === null ? (
                            <h3>Loading Profile...</h3>
                        ) : (
                            <ApplicantProfile profile={this.state.profile}/>
                        )}
                    </Grid>
                    <Grid item sm/>
                </Grid>
            </Fragment>
        )
    }
}

applicantDetails.propTypes = {
    jobseeker: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    jobseeker: state.jobseeker
})

export default connect(mapStateToProps)(applicantDetails)
