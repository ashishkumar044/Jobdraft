import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import MyButton from '../../util/MyButton'
import { Link } from 'react-router-dom'

//MUI imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'

//Icon imports
import CloseIcon from '@material-ui/icons/Close'

// Redux imports
import { connect } from 'react-redux'
import { postJob, clearErrors } from '../../redux/actions/recruiterDataActions'

const styles = (theme) => ({
    ...theme.spreadThis,
    submitButton:{
        position: 'relative',
        float: 'right',
        margin: '10px'
    },
    progressSpinner:{
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: "91%",
        top: '5%'
    },
    dialogTitle: {
        textAlign: 'center',
        fontWeight: '600'
    },
    postJobs: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.8rem'
    },
})

class PostJobDialog extends Component{
    state = {
        open: false,
        jobTitle: '',
        jobDesc: '',
        location: '',
        workEx: '',
        reqSkills: '',
        ctc: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({ jobTitle: '', jobDesc: '', location: '', workEx: '', reqSkills: '', ctc: '', open: false, errors: {} })
        }
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.props.clearErrors()
    }
    handleChange = (event) => {
        this.setState({ [ event.target.name ]: event.target.value })
    } 
    handleSubmit = (event) => {
        event.preventDefault()
        const newPost = { 
            jobTitle: this.state.jobTitle, 
            jobDesc: this.state.jobDesc, 
            location: this.state.location,
            workEx: this.state.workEx,
            reqSkills: this.state.reqSkills,
            ctc: this.state.ctc
        }
        this.props.postJob(newPost)
        this.handleClose()
    }
    render(){
        const { errors } = this.state
        const { classes, UI: { loading }} = this.props
        return (
            <Fragment>
            {/* Post  Jobs */}
                <Link onClick={this.handleOpen} className={classes.postJobs}> Post new job</Link>

                <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                fullWidth
                maxWidth="sm"
                >
                    <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                        <CloseIcon/>
                    </MyButton>
                    <DialogTitle className={classes.dialogTitle}>Post a new job</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                name="jobTitle"
                                type="text"
                                label="Job Title"
                                error={errors.jobTitle ? true : false}
                                helperText={errors.jobTitle}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <TextField
                                name="location"
                                type="text"
                                label="Location"
                                error={errors.location ? true : false}
                                helperText={errors.location}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <TextField
                                name="workEx"
                                type="text"
                                label="Work experience required"
                                error={errors.workEx ? true : false}
                                helperText={errors.workEx}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <TextField
                                name="ctc"
                                type="text"
                                label="CTC range"
                                placeholder="6 - 7 Lacs"
                                error={errors.ctc ? true : false}
                                helperText={errors.ctc}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <TextField
                                name="reqSkills"
                                type="text"
                                label="Skills required"
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <TextField
                                name="jobDesc"
                                type="text"
                                label="Job Description"
                                multiline
                                rows="6"
                                error={errors.jobDesc ? true : false}
                                helperText={errors.jobDesc}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                                />
                            <Button type="submit" variant="contained" color="primary"
                                className={classes.submitButton} disabled={loading}>
                                    Submit
                                    {loading && (
                                        <CircularProgress size={30} className={classes.progressSpinner}/>
                                    )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

PostJobDialog.propTypes = {
    postJob: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    UI: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postJob, clearErrors })(withStyles(styles)(PostJobDialog))