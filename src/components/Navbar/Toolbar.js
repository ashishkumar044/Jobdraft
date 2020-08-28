import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Component imports
import DrawerToggleButton from './DrawerToggleButton'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

const styles = {
    toolbar: {
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        height: '60px',
        zIndex: 200,
        opacity: '0.945'
      },      
      toolbarNavigation: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: '0.2rem 2rem',     
        '& .toolbarNavigationItems': {
            '& li': {
                '& :hover, :active': {
                  color: '#00897b'
                }
            }
        },
      },
      
      logo: {
        color: '#1d2d35',
        fontSize: '2rem',
        textDecoration: 'none',
      },
      
      spacing: {
        flex: 1,
      },
      
      navItemsList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
      },      
      navItem: {
        color: '#1d2d35',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '0 0.8rem',
      },      
      navButton: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '0 0.8rem',
        margin: '0 0 0 3px',
        backgroundColor: '#1d2d35',
        borderRadius: 0
      }, 
}


class Toolbar extends Component {
    render() {
        const { classes } = this.props
        return (
            <header className={classes.toolbar}>
                <nav className={classes.toolbarNavigation}>
                    <div className={classes.toolbarLogo}>
                        <Link to="/"><h2 className={classes.logo}>Jobdraft</h2></Link>
                    </div>
                    <div className={classes.spacing}/>
                    <div className='toolbarNavigationItems'>
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
                    <div className="toolbarToggleButton">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default (withStyles(styles)(Toolbar))
