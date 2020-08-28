import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editJobseekerContactDetails } from '../../redux/actions/jobseekerActions'

//MUI imports
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

//Icon imports
import EditIcon from '@material-ui/icons/Edit'

const styles = {
    form: {
        textAlign: 'center',
        padding: '20px',
      
    },
    formTitle: {
        margin: '20px auto',
        fontWeight: 'bold'
    },
    textField: {
        margin: '10px auto'
    },
    phone: {
        margin: '10px',
        width: '100%'
    },
    location: {
        margin: '10px',
        width: '100%'
    },
    header: {
        fontSize: '1.7rem',        
        color: '#1d2d35',
        fontWeight: 'bold',
    },
    educationCourse: {
        width: '50%',
        margin: '10px 20px 10px auto'
    },
    educationInstitute: {
        width: '40%',
        margin: '10px auto 10px 20px'
    },
    expCompany: {
        width: '50%',
        margin: '10px 20px 10px auto'
    },
    expPeriod: {
        width: '40%',
        margin: '10px auto 10px 20px'
    },
    button: {
        margin: '0 15px',
        position: 'relative',
        left: '80%',
        color: '#3f51b5'
    },
    submitButton: {
        margin: '10px 20px 10px 15px'
    }
}

class EditContactDetails extends Component {
    state = {
        phone: '',
        currentLocation: '',
        open: false
    }

    mapJobseekerContactDetailsToState = (jobseekerCredentials) => {
        this.setState({
            phone: jobseekerCredentials.phone ? jobseekerCredentials.phone : '',
            currentLocation: jobseekerCredentials.currentLocation ? jobseekerCredentials.currentLocation : '',
        })
    }

    handleOpen = () => {
        this.setState({open: true})
        this.mapJobseekerContactDetailsToState(this.props.jobseekerCredentials)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        const { jobseekerCredentials } = this.props
        this.mapJobseekerContactDetailsToState(jobseekerCredentials)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const jobseekerDetails = {
            phone: this.state.phone,
            currentLocation: this.state.currentLocation,
        }
        this.props.editJobseekerContactDetails(jobseekerDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Tooltip title="Edit Contact Details" placement="top">
                    <IconButton onClick={this.handleOpen} className={classes.button}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">
                        <DialogTitle>
                            <h2 className={classes.header}>Contact details</h2>
                        </DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    name="phone"
                                    type="text"
                                    label="Phone"
                                    placeholder="92xxxxxx91"
                                    className={classes.phone}
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="currentLocation"
                                    type="text"
                                    label="Current Location"
                                    placeholder="Bangalore"
                                    className={classes.location}
                                    value={this.state.currentLocation}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} className={classes.closeButton} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} className={classes.submitButton} color="primary" variant="contained">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
            </Fragment>
        )
    }
}

EditContactDetails.propTypes = {
    editJobseekerContactDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jobseekerCredentials: state.jobseeker.jobseekerCredentials
})

export default connect(mapStateToProps, {editJobseekerContactDetails})(withStyles(styles)(EditContactDetails))
