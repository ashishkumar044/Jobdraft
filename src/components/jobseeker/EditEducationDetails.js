import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editJobseekerEducationDetails } from '../../redux/actions/jobseekerActions'

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
        width: '100%',
        margin: '10px'
    },
    educationInstitute: {
        width: '100%',
        margin: '10px'
    },
    expCompany: {
        width: '50%',
        margin: '10px 20px 10px auto'
    },
    expPeriod: {
        width: '0%',
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

class EditEducationDetails extends Component {
    state = {
        educationCourse1: '',
        educationInstitute1: '',
        educationCourse2: '',
        educationInstitute2: '',
        educationCourse3: '',
        educationInstitute3: '',
        open: false
    }

    mapJobseekerEducationDetailsToState = (jobseekerCredentials) => {
        this.setState({
            educationCourse1: jobseekerCredentials.educationCourse1 ? jobseekerCredentials.educationCourse1 : '',
            educationInstitute1: jobseekerCredentials.educationInstitute1 ? jobseekerCredentials.educationInstitute1 : '',
            educationCourse2: jobseekerCredentials.educationCourse2 ? jobseekerCredentials.educationCourse2 : '',
            educationInstitute2: jobseekerCredentials.educationInstitute2 ? jobseekerCredentials.educationInstitute2 : '',
            educationCourse3: jobseekerCredentials.educationCourse3 ? jobseekerCredentials.educationCourse3 : '',
            educationInstitute3: jobseekerCredentials.educationInstitute3 ? jobseekerCredentials.educationInstitute3 : '',
        })
    }

    handleOpen = () => {
        this.setState({open: true})
        this.mapJobseekerEducationDetailsToState(this.props.jobseekerCredentials)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        const { jobseekerCredentials } = this.props
        this.mapJobseekerEducationDetailsToState(jobseekerCredentials)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const jobseekerDetails = {
            educationCourse1: this.state.educationCourse1,
            educationInstitute1: this.state.educationInstitute1,
            educationCourse2: this.state.educationCourse2,
            educationInstitute2: this.state.educationInstitute2,
            educationCourse3: this.state.educationCourse3,
            educationInstitute3: this.state.educationInstitute3,
        }
        this.props.editJobseekerEducationDetails(jobseekerDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Tooltip title="Edit Education Details" placement="top">
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
                        <h2 className={classes.header}>Education Details</h2>
                    </DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    name="educationCourse1"
                                    type="text"
                                    label="Education (Course)"
                                    placeholder="MSc Mathematics"
                                    className={classes.educationCourse}
                                    value={this.state.educationCourse1}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="educationInstitute1"
                                    type="text"
                                    label="Education (Institute)"
                                    placeholder="University of Delhi"
                                    className={classes.educationInstitute}
                                    value={this.state.educationInstitute1}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="educationCourse2"
                                    type="text"
                                    label="Education 2 (Course)"
                                    className={classes.educationCourse}
                                    value={this.state.educationCourse2}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="educationInstitute2"
                                    type="text"
                                    label="Education 2 (Institute)"
                                    className={classes.educationInstitute}
                                    value={this.state.educationInstitute2}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="educationCourse3"
                                    type="text"
                                    label="Education 3 (Course)"
                                    className={classes.educationCourse}
                                    value={this.state.educationCourse3}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="educationInstitute3"
                                    type="text"
                                    label="Education 3 (Institute)"
                                    className={classes.educationInstitute}
                                    value={this.state.educationInstitute3}
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

EditEducationDetails.propTypes = {
    editJobseekerEducationDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jobseekerCredentials: state.jobseeker.jobseekerCredentials
})

export default connect(mapStateToProps, {editJobseekerEducationDetails})(withStyles(styles)(EditEducationDetails))
