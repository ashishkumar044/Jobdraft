import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import axios from 'axios'
import MyButton from '../../util/MyButton'

import { clearErrors } from '../../redux/actions/jobseekerDataActions'

//MUI imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

//Icon imports
import CloseIcon from '@material-ui/icons/Close'

// Redux imports
import { connect } from 'react-redux'

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
        left: "89%",
        top: '5%'
    },
    dialogTitle: {
        textAlign: 'center',
        fontWeight: '600'
    },
    contactButton: {
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#3f51b5',
        margin: '20px 10px',
        '& :hover, :active': {
          color: '#00897b'
        }
    },
    header: {
        textAlign: 'center',
        fontSize: '2.0rem',
        fontWeight: '700',
        // fontStyle: 'italic'
    },
})

class Feedback extends Component{
    state = {
        open: false,
        body: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({ body: '', open: false, errors: {} })
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
        axios.post('/j/postFeedback', { body: this.state.body })
        this.handleClose()
    }
    render(){
        const { errors } = this.state
        const { classes, UI: { loading }, jobseeker: { authenticated }} = this.props
        return (
            <Fragment>
            <Button onClick={this.handleOpen} className={classes.contactButton}> 
                Contact us
            </Button>
                {authenticated ? (
                    <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                    >
                        <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                            <CloseIcon/>
                        </MyButton>
                        <DialogTitle>
                            <h4 variant="h4" className={classes.header}>Contact us </h4>
                        </DialogTitle>
                        <DialogContent>
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    name="body"
                                    type="text"
                                    label="Write here"
                                    multiline
                                    rows="6"
                                    error={errors.body ? true : false}
                                    helperText={errors.body}
                                    value={this.state.body}
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
            ) : (
                <h2>Loading...</h2>
            )}
                <hr/>
            </Fragment>
        )
    }
}

Feedback.propTypes = {
    UI: propTypes.object.isRequired,
    jobseeker: propTypes.object.isRequired,
    clearErrors: propTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    UI: state.UI,
    jobseeker: state.jobseeker
})

export default connect(mapStateToProps, { clearErrors })(withStyles(styles)(Feedback))