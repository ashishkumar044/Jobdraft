import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'

const styles = {
    paper: {
        textAlign: 'center',
        padding: '5px',
        backgroundColor: '#b2dfdb',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        marginTop: '2%'
    },
    content: {
        fontSize: '0.9rem'
    },
    feedbackRoute: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
}


export class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
                        <Paper className={classes.paper}>
                            <div className={classes.content}>
                            <p >
                                We are constantly working to add more features to this website.
                            </p>
                            <p >
                                Please provide your honest feedback  
                                <Link to="/r/feedback" className={classes.feedbackRoute}> here </Link>
                                 and help us serve you better.
                            </p>
                            </div>
                        </Paper>
        )
    }
}

export default (withStyles(styles)(Footer))
