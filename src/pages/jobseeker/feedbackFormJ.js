import React, { Component, Fragment } from 'react'

//Component imports
import JNavbar from '../../components/Navbar/Jobseeker/JNavbar'
import Feedback from '../../components/jobseeker/Feedback'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

//Redux imports

const styles= {
    contactCard: {
        margin: '30px',
        padding: '40px',
        textAlign: 'center'
    },
    subHeader: {
        textAlign: 'center',
        margin: '10px',
        fontWeight: 'bold'
    },
    header: {
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: '600',
        color: '#1d2d35'
    },
}

class feedbackFormJ extends Component {

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <JNavbar/>
                <Grid container className="jobseekerContainer" spacing={2}>
                    <Grid item xs/>
                    <Grid item lg={10} sm={10} xs={12}>
                        <Card elevation={0} className={classes.contactCard}>
                            <CardContent>
                                <h6 className={classes.header}>Facing any issues or need help with something ?</h6>
                                <Feedback/>
                            </CardContent>                            
                        </Card>
                    </Grid>
                    <Grid item xs/>
                </Grid>    
            </Fragment>        
        )
    }
}

export default (withStyles(styles)(feedbackFormJ))