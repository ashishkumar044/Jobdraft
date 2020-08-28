import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
      toggleButton: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '26px',
          width: '36px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          boxSizing: 'border-box',
          '&:focus': {
            outline: 'none',
          }
      },
      toggleButtonLine: {
          width: '36px',
          height: '2px',
          background: '#1d2d35'
      }
}


class DrawerToggleButton extends Component {
    render() {
        const { classes } = this.props
        return (
            <button className={classes.toggleButton} onClick={this.props.click}>
                <div className={classes.toggleButtonLine} />
                <div className={classes.toggleButtonLine} />
                <div className={classes.toggleButtonLine} />
            </button>
        )
    }
}

export default (withStyles(styles)(DrawerToggleButton))
