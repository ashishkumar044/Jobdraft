import React, { Component } from 'react'

//Component imports
import Toolbar from './Toolbar'
import Backdrop from './Backdrop'
import SideDrawer from './SideDrawer'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    
}


class Navbar extends Component {
    state={
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let sideDrawer
        let backdrop

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer/>
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}

export default (withStyles(styles)(Navbar))
