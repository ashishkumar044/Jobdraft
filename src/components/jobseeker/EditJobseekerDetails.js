// import React, { Component, Fragment } from 'react'
// import propTypes from 'prop-types'
// import withStyles from '@material-ui/core/styles/withStyles'

// //Redux imports
// import { connect } from 'react-redux'
// import { editJobseekerDetails } from '../../redux/actions/jobseekerActions'

{/* <Grid item lg={3} sm={3} xs={12}>
<Card elevation={1} className={classes.skillCard}>
    <CardContent>
    <div className={classes.profile}>
    <Typography variant="h4" className={classes.skillHeader}>
        Skills
    </Typography>
    <Project skills={skills}/>
    </div>
    </CardContent>
</Card>
</Grid>
<Grid item sm/> */}
// //MUI imports
// import Tooltip from '@material-ui/core/Tooltip'
// import IconButton from '@material-ui/core/IconButton'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogTitle from '@material-ui/core/DialogTitle'
// import Typography from '@material-ui/core/Typography'

// //Icon imports
// import EditIcon from '@material-ui/icons/Edit'

// const styles = {
//     form: {
//         textAlign: 'center',
//         padding: '20px',
      
//     },
//     formTitle: {
//         margin: '20px auto',
//         fontWeight: 'bold'
//     },
//     textField: {
//         margin: '10px auto'
//     },
//     phone: {
//         margin: '10px 40px 10px auto',
//         width: '40%'
//     },
//     location: {
//         margin: '10px auto 10px 40px',
//         width: '40%'
//     },
//     header: {
//         margin: '20px 8px 0 auto',
//         fontWeight: 'bold'
//     },
//     educationCourse: {
//         width: '50%',
//         margin: '10px 20px 10px auto'
//     },
//     educationInstitute: {
//         width: '40%',
//         margin: '10px auto 10px 20px'
//     },
//     expCompany: {
//         width: '50%',
//         margin: '10px 20px 10px auto'
//     },
//     expPeriod: {
//         width: '40%',
//         margin: '10px auto 10px 20px'
//     },
//     button: {
//         margin: '15px',
//         position: 'relative',
//         left: '90%',
//         color: '#eceff1'
//     },
//     submitButton: {
//         margin: '10px 20px 10px 15px'
//     }
// }

// class EditJobseekerDetails extends Component {
//     state = {
//         about: '',
//         phone: '',
//         educationCourse1: '',
//         educationInstitute1: '',
//         educationCourse2: '',
//         educationInstitute2: '',
//         educationCourse3: '',
//         educationInstitute3: '',
//         experienceCompany1: '',
//         experiencePeriod1: '',
//         experienceDetails1: '',
//         experienceCompany2: '',
//         experiencePeriod2: '',
//         experienceDetails2: '',
//         experienceCompany3: '',
//         experiencePeriod3: '',
//         experienceDetails3: '',
//         currentLocation: '',
//         open: false
//     }

//     mapJobseekerDetailsToState = (jobseekerCredentials) => {
//         this.setState({
//             about: jobseekerCredentials.about ? jobseekerCredentials.about : '',
//             phone: jobseekerCredentials.phone ? jobseekerCredentials.phone : '',
//             educationCourse1: jobseekerCredentials.educationCourse1 ? jobseekerCredentials.educationCourse1 : '',
//             educationInstitute1: jobseekerCredentials.educationInstitute1 ? jobseekerCredentials.educationInstitute1 : '',
//             educationCourse2: jobseekerCredentials.educationCourse2 ? jobseekerCredentials.educationCourse2 : '',
//             educationInstitute2: jobseekerCredentials.educationInstitute2 ? jobseekerCredentials.educationInstitute2 : '',
//             educationCourse3: jobseekerCredentials.educationCourse3 ? jobseekerCredentials.educationCourse3 : '',
//             educationInstitute3: jobseekerCredentials.educationInstitute3 ? jobseekerCredentials.educationInstitute3 : '',
//             experienceCompany1: jobseekerCredentials.experienceCompany1 ? jobseekerCredentials.experienceCompany1 : '',
//             experiencePeriod1: jobseekerCredentials.experiencePeriod1 ? jobseekerCredentials.experiencePeriod1 : '',
//             experienceDetails1: jobseekerCredentials.experienceDetails1 ? jobseekerCredentials.experienceDetails1 : '',
//             experienceCompany2: jobseekerCredentials.experienceCompany2 ? jobseekerCredentials.experienceCompany2 : '',
//             experiencePeriod2: jobseekerCredentials.experiencePeriod2 ? jobseekerCredentials.experiencePeriod2 : '',
//             experienceDetails2: jobseekerCredentials.experienceDetails2 ? jobseekerCredentials.experienceDetails2 : '',
//             experienceCompany3: jobseekerCredentials.experienceCompany3 ? jobseekerCredentials.experienceCompany3 : '',
//             experiencePeriod3: jobseekerCredentials.experiencePeriod3 ? jobseekerCredentials.experiencePeriod3 : '',
//             experienceDetails3: jobseekerCredentials.experienceDetails3 ? jobseekerCredentials.experienceDetails3 : '',
//             currentLocation: jobseekerCredentials.currentLocation ? jobseekerCredentials.currentLocation : '',
//         })
//     }

//     handleOpen = () => {
//         this.setState({open: true})
//         this.mapJobseekerDetailsToState(this.props.jobseekerCredentials)
//     }

//     handleClose = () => {
//         this.setState({open: false})
//     }

//     componentDidMount(){
//         const { jobseekerCredentials } = this.props
//         this.mapJobseekerDetailsToState(jobseekerCredentials)
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = () => {
//         const jobseekerDetails = {
//             about: this.state.about,
//             phone: this.state.phone,
//             educationCourse1: this.state.educationCourse1,
//             educationInstitute1: this.state.educationInstitute1,
//             educationCourse2: this.state.educationCourse2,
//             educationInstitute2: this.state.educationInstitute2,
//             educationCourse3: this.state.educationCourse3,
//             educationInstitute3: this.state.educationInstitute3,
//             experienceCompany1: this.state.experienceCompany1,
//             experiencePeriod1: this.state.experiencePeriod1,
//             experienceDetails1: this.state.experienceDetails1,
//             experienceCompany2: this.state.experienceCompany2,
//             experiencePeriod2: this.state.experiencePeriod2,
//             experienceDetails2: this.state.experienceDetails2,
//             experienceCompany3: this.state.experienceCompany3,
//             experiencePeriod3: this.state.experiencePeriod3,
//             experienceDetails3: this.state.experienceDetails3,
//             currentLocation: this.state.currentLocation,
//         }
//         this.props.editJobseekerDetails(jobseekerDetails)
//         this.handleClose()
//     }

//     render() {
//         const { classes } = this.props
//         return (
//             <Fragment>
//                 <Tooltip title="Edit Profile Details" placement="top">
//                     <IconButton onClick={this.handleOpen} className={classes.button}>
//                         <EditIcon />
//                     </IconButton>
//                 </Tooltip>
//                 <Dialog
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     fullWidth
//                     maxWidth="sm">
//                         <DialogTitle>Edit your details</DialogTitle>
//                         <DialogContent>
//                             <form>
//                                 <TextField
//                                     name="about"
//                                     type="text"
//                                     label="About yourself"
//                                     multiline
//                                     rows="2"
//                                     className={classes.textField}
//                                     value={this.state.about}
//                                     onChange={this.handleChange}
//                                     fullWidth
//                                     />
//                                 <TextField
//                                     name="phone"
//                                     type="text"
//                                     label="Phone"
//                                     placeholder="92xxxxxx91"
//                                     className={classes.phone}
//                                     value={this.state.phone}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="currentLocation"
//                                     type="text"
//                                     label="Current Location"
//                                     placeholder="Bangalore"
//                                     className={classes.location}
//                                     value={this.state.currentLocation}
//                                     onChange={this.handleChange}
//                                     />
//                                 <Typography variant="h6" className={classes.header}>
//                                     Education Details
//                                 </Typography>
//                                 <TextField
//                                     name="educationCourse1"
//                                     type="text"
//                                     label="Education (Course)"
//                                     placeholder="MSc Mathematics"
//                                     className={classes.educationCourse}
//                                     value={this.state.educationCourse1}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="educationInstitute1"
//                                     type="text"
//                                     label="Education (Institute)"
//                                     placeholder="University of Delhi"
//                                     className={classes.educationInstitute}
//                                     value={this.state.educationInstitute1}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="educationCourse2"
//                                     type="text"
//                                     label="Education 2 (Course)"
//                                     className={classes.educationCourse}
//                                     value={this.state.educationCourse2}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="educationInstitute2"
//                                     type="text"
//                                     label="Education 2 (Institute)"
//                                     className={classes.educationInstitute}
//                                     value={this.state.educationInstitute2}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="educationCourse3"
//                                     type="text"
//                                     label="Education 3 (Course)"
//                                     className={classes.educationCourse}
//                                     value={this.state.educationCourse3}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="educationInstitute3"
//                                     type="text"
//                                     label="Education 3 (Institute)"
//                                     className={classes.educationInstitute}
//                                     value={this.state.educationInstitute3}
//                                     onChange={this.handleChange}
//                                     />
//                                 <Typography variant="h6" className={classes.header}>
//                                     Work Experience
//                                 </Typography>
//                                 <TextField
//                                     name="experienceCompany1"
//                                     type="text"
//                                     label="Work Experience 1"
//                                     placeholder="Business Analyst, XYZ Co."
//                                     className={classes.expCompany}
//                                     value={this.state.experienceCompany1}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experiencePeriod1"
//                                     type="text"
//                                     label="Work Experience 1 (Period)"
//                                     placeholder="Jun2018 - Dec2019"
//                                     className={classes.expPeriod}
//                                     value={this.state.experiencePeriod1}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experienceDetails1"
//                                     type="text"
//                                     label="Work Experience 1 (Details)"
//                                     multiline
//                                     rows="3"
//                                     className={classes.textField}
//                                     value={this.state.experienceDetails1}
//                                     onChange={this.handleChange}
//                                     fullWidth
//                                     />
//                                 <TextField
//                                     name="experienceCompany2"
//                                     type="text"
//                                     label="Work Experience 2"
//                                     placeholder="Business Analyst, XYZ Co."
//                                     className={classes.expCompany}
//                                     value={this.state.experienceCompany2}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experiencePeriod2"
//                                     type="text"
//                                     label="Work Experience 2 (Period)"
//                                     placeholder="Jun2018 - Dec2019"
//                                     className={classes.expPeriod}
//                                     value={this.state.experiencePeriod2}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experienceDetails2"
//                                     type="text"
//                                     label="Work Experience 2 (Details)"
//                                     multiline
//                                     rows="3"
//                                     className={classes.textField}
//                                     value={this.state.experienceDetails2}
//                                     onChange={this.handleChange}
//                                     fullWidth
//                                     />
//                                 <TextField
//                                     name="experienceCompany3"
//                                     type="text"
//                                     label="Work Experience 3"
//                                     placeholder="Business Analyst, XYZ Co."
//                                     className={classes.expCompany}
//                                     value={this.state.experienceCompany3}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experiencePeriod3"
//                                     type="text"
//                                     label="Work Experience 3 (Period)"
//                                     placeholder="Jun2018 - Dec2019"
//                                     className={classes.expPeriod}
//                                     value={this.state.experiencePeriod3}
//                                     onChange={this.handleChange}
//                                     />
//                                 <TextField
//                                     name="experienceDetails3"
//                                     type="text"
//                                     label="Work Experience 3 (Details)"
//                                     multiline
//                                     rows="3"
//                                     className={classes.textField}
//                                     value={this.state.experienceDetails3}
//                                     onChange={this.handleChange}
//                                     fullWidth
//                                     />
//                             </form>
//                         </DialogContent>
//                         <DialogActions>
//                             <Button onClick={this.handleClose} className={classes.closeButton} color="primary">
//                                 Cancel
//                             </Button>
//                             <Button onClick={this.handleSubmit} className={classes.submitButton} color="primary" variant="contained">
//                                 Save
//                             </Button>
//                         </DialogActions>
//                     </Dialog>
//             </Fragment>
//         )
//     }
// }

// EditJobseekerDetails.propTypes = {
//     editJobseekerDetails: propTypes.func.isRequired,
//     classes: propTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     jobseekerCredentials: state.jobseeker.jobseekerCredentials
// })

// export default connect(mapStateToProps, {editJobseekerDetails})(withStyles(styles)(EditJobseekerDetails))
