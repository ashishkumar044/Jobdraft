import React, { Component, Fragment } from 'react'

//Component imports
import RNavbar from '../../components/Navbar/Recruiter/RNavbar'
import PostJob from '../../components/recruiter/PostJob'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Redux imports

const styles= {
    paper: {
        margin: '30px',
        padding: '40px'
    },
    header: {
        textAlign: 'center',
        margin: '10px 10px 0 10px',
        fontWeight: 'bold'
    },
    subHeader: {
        textAlign: 'center',
        margin: '10px',
        fontWeight: 'bold'
    },
    // body: {
    //     margin: '0 5px 0 5px'
    // }
}

class feedbackFormR extends Component {

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <RNavbar/>
                <Grid container>
                    <Grid item sm/>
                    <Grid item lg={10} sm={10} xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                                <PostJob/>
                        </Paper>
                    </Grid>
                    <Grid item sm/>
                </Grid>    
            </Fragment>        
        )
    }
}

export default (withStyles(styles)(feedbackFormR))