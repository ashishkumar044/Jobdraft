import React, { Component, Fragment } from 'react'

//Component imports
import RNavbar from '../../components/Navbar/Recruiter/RNavbar'
import RecruiterProfile from '../../components/recruiter/RecruiterProfile'
// import Footer from '../../components/recruiter/Footer'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

const styles= {

}
class recruiterHome extends Component {
    
    render() {
        
        return (
            <Fragment>
                <RNavbar/>
                <Grid container className="jobseekerContainer" spacing={2}>
                <Grid item xs/>
                <Grid item lg={10} sm={10} xs={12}>
                    <RecruiterProfile/>
                </Grid>
                <Grid item xs/>
            </Grid>
            {/* <Footer/> */}
            </Fragment>           
        )
    }
}



export default (withStyles(styles)(recruiterHome))
