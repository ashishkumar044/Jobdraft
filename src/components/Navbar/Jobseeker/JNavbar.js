import React, { Component } from 'react'

//Component imports
import JToolbar from './JToolbar'
import Backdrop from '../Backdrop'
import JSideDrawer from './JSideDrawer'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    
}


class JNavbar extends Component {
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
            sideDrawer = <JSideDrawer/>
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div>
                <JToolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}

export default (withStyles(styles)(JNavbar))
