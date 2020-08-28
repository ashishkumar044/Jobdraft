import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editJobseekerAboutDetails } from '../../redux/actions/jobseekerActions'

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
        margin: '10px 40px 10px auto',
        width: '40%'
    },
    location: {
        margin: '10px auto 10px 40px',
        width: '40%'
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
        left: '50%',
        color: '#3f51b5'
    },
    submitButton: {
        margin: '10px 20px 10px 15px'
    }
}

class EditAboutDetails extends Component {
    state = {
        about: '',
        open: false
    }

    mapJobseekerAboutDetailsToState = (jobseekerCredentials) => {
        this.setState({
            about: jobseekerCredentials.about ? jobseekerCredentials.about : '',
        })
    }

    handleOpen = () => {
        this.setState({open: true})
        this.mapJobseekerAboutDetailsToState(this.props.jobseekerCredentials)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        const { jobseekerCredentials } = this.props
        this.mapJobseekerAboutDetailsToState(jobseekerCredentials)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const jobseekerDetails = {
            about: this.state.about,
        }
        this.props.editJobseekerAboutDetails(jobseekerDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Tooltip title="Edit About" placement="top">
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
                        <h2 className={classes.header}>About</h2>
                    </DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    name="about"
                                    type="text"
                                    label="About yourself"
                                    multiline
                                    rows="2"
                                    className={classes.textField}
                                    value={this.state.about}
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

EditAboutDetails.propTypes = {
    editJobseekerAboutDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jobseekerCredentials: state.jobseeker.jobseekerCredentials
})

export default connect(mapStateToProps, {editJobseekerAboutDetails})(withStyles(styles)(EditAboutDetails))
