import React, { Component, Fragment } from 'react'

import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/jobseeker/Footer'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles= {
    quoteCard: {
        padding: '0 30px',
        alignItem: 'center'
    },
    quote: {
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: '600',
        color: '#1d2d35',
        fontStyle: 'italic'
    },
    author: {
        textAlign: 'right',
        fontSize: '1.6rem',
        fontWeight: '600',
        color: '#1d2d35',
        fontStyle: 'italic'
    },
    contentCard: {
        margin: '25px',
        padding: '25px',
        textAlign: 'left',
        color: '#1d2d35'
        // fontStyle: 'italic'
    },
    content: {
        fontSize: '1.6rem',
        color: '#1d2d35',
        fontWeight: '600'
    }
}

class home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Navbar/>
                <Grid container spacing={1}>
                    <Grid item xs/>
                    <Grid item lg={10} sm={10} xs={12}>
                        <Card elevation={0} className={classes.paper}>
                            <CardContent>
                                <Card elevation={0} className={classes.quoteCard}>
                                    <CardContent>
                                        <h4 variant="h5" className={classes.quote}>
                                            "A single sheet of paper can't decide my future" 
                                        </h4>
                                        <h4 variant="h5" className={classes.author}>
                                            - Thomas A Edison
                                        </h4>
                                    </CardContent>
                                </Card>
                                <br/>
                                <br/>
                                <Card elevation={0} className={classes.contentCard}>
                                    <CardContent>
                                        <h6 className={classes.content}>
                                            We at JobDraft abide by this quote and believe that skills speak a 
                                            lot more than just the resume and thus, are constantly trying to propagate 
                                            and manifest the same.
                                        </h6>
                                        <br/>
                                        <h6 className={classes.content}>
                                            Just like action speak louder than words, this is an effort to emphasize
                                            more on an individual's expertise and mindfulness in order to make the process
                                            of finding a job or hiring a suitable individual for the job more intuitive,
                                            even more effective and most beneficial for you.
                                        </h6>
                                    </CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs/>
                    {/* <Footer/> */}
                </Grid>
                
            </Fragment>       
        )
    }
}

export default withStyles(styles)(home)