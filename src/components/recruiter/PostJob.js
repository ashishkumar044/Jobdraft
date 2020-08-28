import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//MUI imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

// Redux imports
import { connect } from 'react-redux'
import { postJob, clearErrors } from '../../redux/actions/recruiterDataActions'

const styles = (theme) => ({
    ...theme.spreadThis,
    card: {
        // position: 'relative',
        margin: '20px 10px'
    },
    header: {
        textAlign: 'center',
        fontSize: '2.0rem',
        fontWeight: '700',
        // fontStyle: 'italic'
    },
    submitButton:{
        // position: 'absolute',
        float: 'right',
        margin: '20px 10px'
    },
    progressSpinner:{
        position: 'absolute'
    },
    postJob: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.8rem'
    },
})

class PostJob extends Component{
    state = {
        jobTitle: '',
        jobDesc: '',
        location: '',
        workEx: '',
        reqSkills: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({ jobTitle: '', jobDesc: '', location: '', workEx: '', reqSkills: '', errors: {} })
        }
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
            reqSkills: this.state.reqSkills
        }
        this.props.postJob(newPost)
        alert('Job posted succesfully.')
    }
    render(){
        const { errors } = this.state
        const { classes, UI: { loading }, recruiter: { authenticated }} = this.props
        return (
            <Fragment>
                {authenticated ? (
                <Card elevation={0} className={classes.card}>
                    <CardContent>
                        <Typography variant="h4" className={classes.header}>Post a new job </Typography>
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
                                rows="8"
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
                    </CardContent>
                </Card>
                ) : (
                    <h4>Loading...</h4>
                )}
            </Fragment>
        )
    }
}

PostJob.propTypes = {
    postJob: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    UI: propTypes.object.isRequired,
    recruiter: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    UI: state.UI,
    recruiter: state.recruiter
})

export default connect(mapStateToProps, { postJob, clearErrors })(withStyles(styles)(PostJob))