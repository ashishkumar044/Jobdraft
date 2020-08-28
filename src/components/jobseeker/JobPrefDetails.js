import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editJobseekerPrefDetails } from '../../redux/actions/jobseekerActions'

//MUI imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

//Icon imports

const styles = {
    form: {
        textAlign: 'center',
        padding: '20px',
      
    },
    formTitle: {
        margin: '20px auto',
        fontWeight: 'bold',
    },
    header: {
        fontSize: '1.7rem',        
        color: '#1d2d35',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    skillHeader: {
        fontSize: '1.2rem',        
        color: '#1d2d35',
        fontWeight: '600',
    },
    skills: {
        // margin: '15px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    skillName: {
        margin: '5px 10px 5px'
    },
    workPref: {
        // margin: '15px 0',
        display: 'flex',
        justifyContent: 'space-around'
    },
    expCTC: {
        margin: '5px 20px 5px',        
    },
    functionalArea: {
        margin: '5px 20px 5px',
    },
    selectionName: {
        width: '100%'
    },
    prefLocation: {
        // margin: '15px 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    location: {
        margin: '5px 10px 5px',
        width: '30%'
    },
    button: {
        margin: '0 15px',
        position: 'relative',
        left: '80%',
        color: '#3f51b5'
    },
    submitButton: {
        margin: '10px 20px 10px 15px'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    jobPrefButton: {
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#3f51b5',
        '& :hover, :active': {
          color: '#00897b'
        }
    }
}

class JobPrefDetails extends Component {
    state = {
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        expCTC: '',
        prefLocation1: '',
        prefLocation2: '',
        prefLocation3: '',
        noticePeriod: '',
        functionalArea: '',
        open: false
    }

    mapJobseekerContactDetailsToState = (jobseekerCredentials) => {
        this.setState({
            skill1: jobseekerCredentials.skill1 ? jobseekerCredentials.skill1 : '',
            skill2: jobseekerCredentials.skill2 ? jobseekerCredentials.skill2 : '',
            skill3: jobseekerCredentials.skill3 ? jobseekerCredentials.skill3 : '',
            skill4: jobseekerCredentials.skill4 ? jobseekerCredentials.skill4 : '',
            skill5: jobseekerCredentials.skill5 ? jobseekerCredentials.skill5 : '',
            expCTC: jobseekerCredentials.expCTC ? jobseekerCredentials.expCTC : '',
            prefLocation1: jobseekerCredentials.prefLocation1 ? jobseekerCredentials.prefLocation1 : '',
            prefLocation2: jobseekerCredentials.prefLocation2 ? jobseekerCredentials.prefLocation2 : '',
            prefLocation3: jobseekerCredentials.prefLocation3 ? jobseekerCredentials.prefLocation3 : '',
            noticePeriod: jobseekerCredentials.noticePeriod ? jobseekerCredentials.noticePeriod : '',
            functionalArea: jobseekerCredentials.functionalArea ? jobseekerCredentials.functionalArea : '',
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
            skill1: this.state.skill1,
            skill2: this.state.skill2,
            skill3: this.state.skill3,
            skill4: this.state.skill4,
            skill5: this.state.skill5,
            expCTC: this.state.expCTC,
            prefLocation1: this.state.prefLocation1,
            prefLocation2: this.state.prefLocation2,
            prefLocation3: this.state.prefLocation3,
            noticePeriod: this.state.noticePeriod,
            functionalArea: this.state.functionalArea,
        }
        this.props.editJobseekerPrefDetails(jobseekerDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.buttonContainer}>
                    <Button
                        onClick={this.handleOpen} 
                        className={classes.jobPrefButton}
                        > 
                        Tell us your job preference
                    </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">
                        <DialogTitle>
                            <h2 className={classes.header}> Personal Information </h2>
                        </DialogTitle>
                        <DialogContent>
                            <form>
                                <div className={classes.workPref}>                                    
                                    <div className={classes.functionalArea}>
                                    <InputLabel id="functional-area-label">Functional Area</InputLabel>
                                    <Select
                                        labelId="functional-area-label"
                                        name="functionalArea"
                                        label="Functional Area"
                                        value={this.state.functionalArea}
                                        className={classes.selectionName}
                                        onChange={this.handleChange}
                                        >
                                            <MenuItem value="Accounting">Accounting</MenuItem>
                                            <MenuItem value="Analytics and Business Intelligence">Analytics and Business Intelligence</MenuItem>
                                            <MenuItem value="Banking / Financial Services">Banking / Financial Services</MenuItem>
                                            <MenuItem value="Content Writer">Content Writer</MenuItem>
                                            <MenuItem value="Consulting / Strategy">Consulting / Strategy</MenuItem>
                                            <MenuItem value="Design">Design</MenuItem>
                                            <MenuItem value="Entrepreneur">Entrepreneur</MenuItem>
                                            <MenuItem value="Executive Assistant">Executive Assistant</MenuItem>
                                            <MenuItem value="HR">HR</MenuItem>
                                            <MenuItem value="Insurance">Insurance</MenuItem>
                                            <MenuItem value="Customer Support">Customer Support</MenuItem>
                                            <MenuItem value="Research">Research</MenuItem>
                                            <MenuItem value="Marketing">Marketing</MenuItem>
                                            <MenuItem value="Advertising">Advertising</MenuItem>
                                            <MenuItem value="Public Relations">Public Relations</MenuItem>
                                            <MenuItem value="Media">Media</MenuItem>
                                            <MenuItem value="Production / Maintenance / Quality Assurance">Production / Maintenance / Quality Assurance</MenuItem>
                                            <MenuItem value="Supply Chain / Logistics">Supply Chain / Logistics</MenuItem>
                                            <MenuItem value="Sales">Sales</MenuItem>
                                            <MenuItem value="Business Development">Business Development</MenuItem>
                                            <MenuItem value="Client Servicing">Client Servicing</MenuItem>
                                            <MenuItem value="Training and Development">Training and Development</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                    </div>
                                    <div className={classes.expCTC}>
                                    <InputLabel id="ctc-label">Expected CTC (in Lacs)</InputLabel>
                                    <Select
                                        labelId="ctc-label"
                                        name="expCTC"
                                        label="Expected CTC"
                                        value={this.state.expCTC}
                                        className={classes.selectionName}
                                        onChange={this.handleChange}
                                        >
                                            <MenuItem value="3 - 5">3 - 5</MenuItem>
                                            <MenuItem value="5 - 6">5 - 6</MenuItem>
                                            <MenuItem value="6 - 7">6 - 7</MenuItem>
                                            <MenuItem value="7 - 8">7 - 8 </MenuItem>
                                            <MenuItem value="8 - 9">8 - 9</MenuItem>
                                            <MenuItem value="9 - 10">9 - 10</MenuItem>
                                            <MenuItem value="10 +">10 + </MenuItem>
                                    </Select>
                                    </div>
                                </div>
                                <br/>
                                <h6 className={classes.skillHeader}>
                                    Top Skills (max 5)
                                </h6>
                                <p>You will be required to take skill evaluation tests for the 
                                    mentioned skills </p>
                                <div className={classes.skills}>
                                <TextField
                                    name="skill1"
                                    type="text"
                                    label="Skill 1"
                                    placeholder=""
                                    className={classes.skillName}
                                    value={this.state.skill1}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="skill2"
                                    type="text"
                                    label="Skill 2"
                                    placeholder=""
                                    className={classes.skillName}
                                    value={this.state.skill2}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="skill3"
                                    type="text"
                                    label="Skill 3"
                                    placeholder=""
                                    className={classes.skillName}
                                    value={this.state.skill3}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="skill4"
                                    type="text"
                                    label="Skill 4"
                                    placeholder=""
                                    className={classes.skillName}
                                    value={this.state.skill4}
                                    onChange={this.handleChange}
                                    />
                                <TextField
                                    name="skill5"
                                    type="text"
                                    label="Skill 5"
                                    placeholder=""
                                    className={classes.skillName}
                                    value={this.state.skill5}
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <br/>
                                <h6 className={classes.skillHeader}>
                                    Preferred Locations
                                </h6>
                                <div className={classes.prefLocation}>
                                <div className={classes.location}> 
                                <InputLabel id="pref-location-label">Preferred Location 1</InputLabel>
                                <Select
                                    labelId="pref-location-label"
                                    name="prefLocation1"
                                    label="Location"
                                    value={this.state.prefLocation1}
                                    className={classes.selectionName}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                                        <MenuItem value="Noida">Noida</MenuItem>
                                        <MenuItem value="Bangalore">Bangalore / Bengaluru</MenuItem>
                                        <MenuItem value="Chennai">Chennai</MenuItem>
                                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                                        <MenuItem value="Kolkata">Kolkata</MenuItem>
                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                        <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                        <MenuItem value="Pune">Pune</MenuItem>
                                        <MenuItem value="Faridabad">Faridabad</MenuItem>
                                </Select>
                                </div>
                                <div className={classes.location}>
                                <InputLabel id="pref-location-label">Preferred Location 2</InputLabel>
                                <Select
                                    labelId="pref-location-label"
                                    name="prefLocation2"
                                    label="Location"
                                    value={this.state.prefLocation2}
                                    className={classes.selectionName}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                                        <MenuItem value="Noida">Noida</MenuItem>
                                        <MenuItem value="Bangalore">Bangalore / Bengaluru</MenuItem>
                                        <MenuItem value="Chennai">Chennai</MenuItem>
                                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                                        <MenuItem value="Kolkata">Kolkata</MenuItem>
                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                        <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                        <MenuItem value="Pune">Pune</MenuItem>
                                        <MenuItem value="Faridabad">Faridabad</MenuItem>
                                </Select>
                                </div>
                                <div className={classes.location}>
                                <InputLabel id="pref-location-label">Preferred Location 3</InputLabel>
                                <Select
                                    labelId="pref-location-label"
                                    name="prefLocation3"
                                    label="Location"
                                    value={this.state.prefLocation3}
                                    className={classes.selectionName}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                                        <MenuItem value="Noida">Noida</MenuItem>
                                        <MenuItem value="Bangalore">Bangalore / Bengaluru</MenuItem>
                                        <MenuItem value="Chennai">Chennai</MenuItem>
                                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                                        <MenuItem value="Kolkata">Kolkata</MenuItem>
                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                        <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                        <MenuItem value="Pune">Pune</MenuItem>
                                        <MenuItem value="Faridabad">Faridabad</MenuItem>
                                </Select>
                                </div>
                                </div>
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

JobPrefDetails.propTypes = {
    editJobseekerPrefDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jobseekerCredentials: state.jobseeker.jobseekerCredentials
})

export default connect(mapStateToProps, {editJobseekerPrefDetails})(withStyles(styles)(JobPrefDetails))
