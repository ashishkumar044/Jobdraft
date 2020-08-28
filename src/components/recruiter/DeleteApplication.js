import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import propTypes from 'prop-types'
import MyButton from '../../util/MyButton'

//MUI imports
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

//Icon imports
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

//Redux imports
import { connect } from 'react-redux'
import { deleteApplication } from '../../redux/actions/recruiterDataActions'

const styles = {
    deleteButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    }
}

class DeleteApplication extends Component {
        state = {
            open: false
        }
        handleOpen = () => {
            this.setState({ open: true })
        }
        handleClose = () => {
            this.setState({ open: false })
        }
        deleteApplication = () => {
            this.props.deleteApplication(this.props.applicationId)
            this.setState({ open: false })
        }
    render() {
        const { classes } = this.props

        return (
            <Fragment>
                <MyButton tip="Delete Application"
                onClick = {this.handleOpen}
                btnClassName={classes.deleteButton}
                >
                    <DeleteOutlineIcon color="secondary"/>
                </MyButton>
                <Dialog 
                    open={this.state.open} 
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                    >
                        <DialogTitle>
                            Are you sure you want to delete this application ?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.deleteApplication} color="secondary">
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
            </Fragment>            
        )
    }
}

DeleteApplication.propTypes = {
    deleteApplication: propTypes.func.isRequired,
    classes: propTypes.object.isRequired,
    applicationId: propTypes.string.isRequired
}

export default connect(null, { deleteApplication })(withStyles(styles)(DeleteApplication))
