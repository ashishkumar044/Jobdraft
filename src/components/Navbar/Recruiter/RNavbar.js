import React, { Component } from 'react'

//Component imports
import RToolbar from './RToolbar'
import Backdrop from '../Backdrop'
import RSideDrawer from './RSideDrawer'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    
}


class RNavbar extends Component {
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
            sideDrawer = <RSideDrawer/>
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div>
                <RToolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}

export default (withStyles(styles)(RNavbar))
