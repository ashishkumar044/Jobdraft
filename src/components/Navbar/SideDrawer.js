import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

const styles = {
    sideDrawer: {
        height: '100%',
        background: '#fff',
        boxShadow: '-1px 0px 4px 0 rgba(0,137,123,0.6)',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '60%',
        maxWidth: '400px',
        zIndex: 200,
    },
    navItemsList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& li': {
            '& :hover, :active': {
              color: '#00897b'
            },
            margin: '0.8rem 0'
        }
    },     
    navItem: {
      color: '#1d2d35',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },    
    navButton: {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      padding: '0 0.8rem',
      margin: '0 0 0 3px',
      backgroundColor: '#1d2d35',
      borderRadius: 0
    },  
}


class SideDrawer extends Component {
    render() {
        const { classes } = this.props
        return (
                <nav className={classes.sideDrawer}>
                    <div className='sideDrawerNavigationItems'>
                        <ul className={classes.navItemsList}>
                            <li>
                                <Link to="/" className={classes.navItem}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className={classes.navItem}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/j/signin" className={classes.navItem}>Sign In</Link>
                            </li>
                            <li>
                                <Button 
                                    component={Link}
                                    to="/r/signin" 
                                    className={classes.navButton}
                                    variant="contained"
                                    >
                                        Recruiter
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default (withStyles(styles)(SideDrawer))
