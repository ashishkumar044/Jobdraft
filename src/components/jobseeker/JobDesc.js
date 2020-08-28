import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import dayjs from 'dayjs'
import MyButton from '../../util/MyButton'
import { Link } from 'react-router-dom'

//Component imports
import ApplyJob from './ApplyJob'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

//Icon imports
import CloseIcon from '@material-ui/icons/Close'

//Redux imports
import { connect } from 'react-redux'
import { getJobPost } from '../../redux/actions/jobseekerDataActions'

const styles = {
    separator: {
        border: 'none',
        margin: '4px'
    },
    dialogContent: {
        padding: '20px',
        textAlign: 'left',
        objectFit: 'cover',
        maxWidth: '100%',
        margin: '5px'
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    spinner: {
        textAlign: 'center',
        margin: '50px 0'
    },
    openPost: {
        color: '#00897b',
        textDecoration: 'none',
        fontWeight: 'bold',
        position: 'absolute',
        left: '80%'
    }
}

class JobDesc extends Component {
    state = {
        open: false
    }
    handleOpen = () => {
        this.setState({ open: true })
        this.props.getJobPost(this.props.jobId)
    }
    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, 
                jobPost: {
                    jobTitle, 
                    jobDesc, 
                    organization, 
                    location,
                    workEx,
                    reqSkills,
                    createdAt, 
                    jobId 
                 },
                UI: { loading }
            } = this.props

            const dialogMarkup = loading ? (
                <div className={classes.spinner}>
                    <CircularProgress size={200} thickness={2}/>
                </div>
            ) : (
                <Grid container spacing={3}>
                    <Grid item sm/>
                    <Grid item sm={11} xs={12}>
                        <div className={classes.dialogContent}>
                        <Typography color="secondary" variant="body1" align="center">
                            <strong>{organization}</strong>
                        </Typography>
                        <hr className={classes.separator}/>
                        <Typography color="primary" variant="h5" align="center">{jobTitle}</Typography>
                        <hr className={classes.separator}/>
                        <hr className={classes.separator}/>
                        <Typography color="secondary" variant="subtitle2">
                            <strong>Location: </strong> 
                            {location}
                        </Typography>
                        <Typography color="secondary" variant="subtitle2">
                            <strong>Work Experience: </strong> 
                            {workEx}
                        </Typography>
                        <Typography color="secondary" variant="subtitle2">
                            <strong>Skills: </strong> 
                            {reqSkills}
                        </Typography>
                        <Typography color="secondary" variant="caption">
                            <strong>Posted on:{' '} </strong>
                            {dayjs(createdAt).format('DD MMM YYYY')}
                            <hr className={classes.separator}/>
                        </Typography>
                        <Typography color="secondary" variant="subtitle2">
                            <strong>Job Description: </strong>
                            <br/>
                            {jobDesc}
                        </Typography>
                        <hr className={classes.separator}/>
                        </div>
                    </Grid>
                    <ApplyJob jobId={jobId} />
                    <Typography variant="caption" className={classes.caption}>
                        Please click the apply button once. Your application will be submitted.
                    </Typography>
                    <Grid item sm/>
                </Grid>
            )
            
            return(
                <Fragment>
                    <Link onClick={this.handleOpen} className={classes.openPost}> View full post</Link>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        fullWidth
                        maxWidth="sm"
                    >
                    <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}
                    >
                        <CloseIcon/>
                    </MyButton>
                    <DialogContent>
                        {dialogMarkup}
                    </DialogContent>
                    </Dialog>
                </Fragment>
            )
    }
    
}

JobDesc.propTypes = {
    getJobPost: propTypes.func.isRequired,
    jobId: propTypes.string.isRequired,
    jobPost: propTypes.object.isRequired,
    UI: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    jobPost: state.jobseekerData.jobPost,
    UI: state.UI
})

const mapActionToProps = {
    getJobPost
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(JobDesc))