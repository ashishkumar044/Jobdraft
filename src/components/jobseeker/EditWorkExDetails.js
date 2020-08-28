import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editJobseekerWorkExDetails } from '../../redux/actions/jobseekerActions'

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
        // width: '50%',
        margin: '10px'
    },
    expPeriod: {
        width: '40%',
        margin: '10px 0 10px 20px'
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

class EditWorkExDetails extends Component {
    state = {
        totalWorkEx: 0,
        experienceCompany1: '',
        experienceStPeriod1: '',
        experienceEndPeriod1: '',
        experienceDetails1: '',
        experienceCompany2: '',
        experienceStPeriod2: '',
        experienceEndPeriod2: '',
        experienceDetails2: '',
        experienceCompany3: '',
        experienceStPeriod3: '',
        experienceEndPeriod3: '',
        experienceDetails3: '',
        open: false
    }

    mapJobseekerWorkExDetailsToState = (jobseekerCredentials) => {
        this.setState({
            totalWorkEx: jobseekerCredentials.totalWorkEx ? jobseekerCredentials.totalWorkEx : '',
            experienceCompany1: jobseekerCredentials.experienceCompany1 ? jobseekerCredentials.experienceCompany1 : '',
            experienceStPeriod1: jobseekerCredentials.experienceStPeriod1 ? jobseekerCredentials.experienceStPeriod1 : '',
            experienceEndPeriod1: jobseekerCredentials.experienceEndPeriod1 ? jobseekerCredentials.experienceEndPeriod1 : '',
            experienceDetails1: jobseekerCredentials.experienceDetails1 ? jobseekerCredentials.experienceDetails1 : '',
            experienceCompany2: jobseekerCredentials.experienceCompany2 ? jobseekerCredentials.experienceCompany2 : '',
            experienceStPeriod2: jobseekerCredentials.experienceStPeriod2 ? jobseekerCredentials.experienceStPeriod2 : '',
            experienceEndPeriod2: jobseekerCredentials.experienceEndPeriod2 ? jobseekerCredentials.experienceEndPeriod2 : '',
            experienceDetails2: jobseekerCredentials.experienceDetails2 ? jobseekerCredentials.experienceDetails2 : '',
            experienceCompany3: jobseekerCredentials.experienceCompany3 ? jobseekerCredentials.experienceCompany3 : '',
            experienceStPeriod3: jobseekerCredentials.experienceStPeriod3 ? jobseekerCredentials.experienceStPeriod3 : '',
            experienceEndPeriod3: jobseekerCredentials.experienceEndPeriod3 ? jobseekerCredentials.experienceEndPeriod3 : '',
            experienceDetails3: jobseekerCredentials.experienceDetails3 ? jobseekerCredentials.experienceDetails3 : '',
        })
    }

    handleOpen = () => {
        this.setState({open: true})
        this.mapJobseekerWorkExDetailsToState(this.props.jobseekerCredentials)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        const { jobseekerCredentials } = this.props
        this.mapJobseekerWorkExDetailsToState(jobseekerCredentials)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const jobseekerDetails = {
            totalWorkEx: this.state.totalWorkEx,
            experienceCompany1: this.state.experienceCompany1,
            experienceStPeriod1: this.state.experienceStPeriod1,
            experienceEndPeriod1: this.state.experienceEndPeriod1,
            experienceDetails1: this.state.experienceDetails1,
            experienceCompany2: this.state.experienceCompany2,
            experienceStPeriod2: this.state.experienceStPeriod2,
            experienceEndPeriod2: this.state.experienceEndPeriod2,
            experienceDetails2: this.state.experienceDetails2,
            experienceCompany3: this.state.experienceCompany3,
            experienceStPeriod3: this.state.experienceStPeriod3,
            experienceEndPeriod3: this.state.experienceEndPeriod3,
            experienceDetails3: this.state.experienceDetails3,
        }
        this.props.editJobseekerWorkExDetails(jobseekerDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Tooltip title="Edit Work Ex Details" placement="top">
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
                        <h2 className={classes.header}>Work Experience Details</h2>
                    </DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    name="totalWorkEx"
                                    type="number"
                                    label="Total Work Experience"
                                    placeholder="1"
                                    className={classes.expCompany}
                                    value={this.state.totalWorkEx}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceCompany1"
                                    type="text"
                                    label="Work Experience 1"
                                    placeholder="Business Analyst, XYZ Co."
                                    className={classes.expCompany}
                                    value={this.state.experienceCompany1}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="experienceStPeriod1"
                                    type="text"
                                    label="Start"
                                    placeholder="Jun2018"
                                    className={classes.expPeriod}
                                    value={this.state.experienceStPeriod1}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceEndPeriod1"
                                    type="text"
                                    label="End"
                                    placeholder="Dec2019"
                                    className={classes.expPeriod}
                                    value={this.state.experienceEndPeriod1}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceDetails1"
                                    type="text"
                                    label="Work Experience 1 (Details)"
                                    multiline
                                    rows="3"
                                    className={classes.textField}
                                    value={this.state.experienceDetails1}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="experienceCompany2"
                                    type="text"
                                    label="Work Experience 2"
                                    placeholder="Business Analyst, XYZ Co."
                                    className={classes.expCompany}
                                    value={this.state.experienceCompany2}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="experienceStPeriod2"
                                    type="text"
                                    label="Start"
                                    placeholder="Jun2018"
                                    className={classes.expPeriod}
                                    value={this.state.experienceStPeriod2}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceEndPeriod2"
                                    type="text"
                                    label="End"
                                    placeholder="Dec2019"
                                    className={classes.expPeriod}
                                    value={this.state.experienceEndPeriod2}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceDetails2"
                                    type="text"
                                    label="Work Experience 2 (Details)"
                                    multiline
                                    rows="3"
                                    className={classes.textField}
                                    value={this.state.experienceDetails2}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="experienceCompany3"
                                    type="text"
                                    label="Work Experience 3"
                                    placeholder="Business Analyst, XYZ Co."
                                    className={classes.expCompany}
                                    value={this.state.experienceCompany3}
                                    onChange={this.handleChange}
                                    fullwidth
                                    />
                                <TextField
                                    name="experienceStPeriod3"
                                    type="text"
                                    label="Start"
                                    placeholder="Jun2018"
                                    className={classes.expPeriod}
                                    value={this.state.experienceStPeriod3}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceEndPeriod3"
                                    type="text"
                                    label="End"
                                    placeholder="Dec2019"
                                    className={classes.expPeriod}
                                    value={this.state.experienceEndPeriod3}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="experienceDetails3"
                                    type="text"
                                    label="Work Experience 3 (Details)"
                                    multiline
                                    rows="3"
                                    className={classes.textField}
                                    value={this.state.experienceDetails3}
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

EditWorkExDetails.propTypes = {
    editJobseekerWorkExDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jobseekerCredentials: state.jobseeker.jobseekerCredentials
})

export default connect(mapStateToProps, {editJobseekerWorkExDetails})(withStyles(styles)(EditWorkExDetails))
