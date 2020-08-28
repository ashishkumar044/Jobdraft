import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

//Component imports
import JNavbar from '../../components/Navbar/Jobseeker/JNavbar'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

//Redux Imports

const styles= {
    header: {
        fontSize: '2.5rem',        
        color: '#1d2d35',
        fontWeight: '700',
        fontStyle: 'italic'
    },
    subHeader: {
        fontSize: '2rem',        
        color: '#1d2d35',
        fontWeight: '600',
        fontStyle: 'italic'
    },
    skillCard: {
        margin: '15px auto',
        textAlign: 'center',
        maxWidth: '100%',
        fontWeight: 'bold',
    },
    skillContainer: {
        margin: '15px',
        textAlign: 'center'
    },
    skillLink: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '1.5rem'
    },
}

class jobseekerHome extends Component {
    render() {
        const { classes, } = this.props
        return (
            <Fragment>
                <JNavbar/>
            <Grid container className="jobseekerContainer" spacing={2}>
                <Grid item xs/>
                <Grid item lg={10} sm={10} xs={12}>
                    {/* Skill Card */}
                    <Card variant="outlined" className={classes.skillCard}>
                        <CardContent>
                            <h2 className={classes.header}>
                                We are working on creating skill evaluation tests. 
                            </h2>
                            <h5 className={classes.subHeader}>
                                Don't worry, we'll reach out to you when they're ready
                            </h5>
                            <br/>
                            <br/>
                            <Grid container>
                                <Grid item lg={4} sm={6} xs={12}>
                                    {/* <Card className={classes.skillContainer}>
                                        <CardContent>
                                            <Link to="/skillTest/python" className={classes.skillLink}> 
                                                <h5 className={classes.skillLink}>Python</h5>
                                            </Link>
                                        </CardContent>
                                    </Card> */}
                                </Grid>
                                <Grid item lg={4} sm={6} xs={12}>
                                    {/* <Card className={classes.skillContainer}>
                                        <CardContent>
                                            <Link to="/skillTest/python" className={classes.skillLink}> Javascript</Link>
                                        </CardContent>
                                    </Card> */}
                                </Grid>
                                {/* <Grid item lg={4} sm={6} xs={12}>
                                    <Card className={classes.skillContainer}>
                                        <CardContent>
                                            <Link to="/project/1" className={classes.skillLink}> +  More skills</Link>
                                        </CardContent>
                                    </Card>
                                </Grid> */}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs/>
            </Grid>
            </Fragment>
        )
    }
}


export default (withStyles(styles)(jobseekerHome))