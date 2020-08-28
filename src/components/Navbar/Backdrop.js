import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    backdrop: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,0.15)',
        zIndex: 100
    }
}


class Backdrop extends Component {
    render() {
        const { classes } = this.props
        return (
                <div className={classes.backdrop} onClick={this.props.click}/>
        )
    }
}

export default (withStyles(styles)(Backdrop))
