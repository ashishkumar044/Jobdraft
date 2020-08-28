import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Redux imports
import { connect } from 'react-redux'
import { editRecruiterDetails } from '../../redux/actions/recruiterActions'

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
    button: {
        margin: '15px',
        position: 'relative',
        left: '90%',
        color: '#eceff1'
    },
}

class EditRecruiterDetails extends Component {
    state = {
        about: '',
        phone: '',
        location: '',
        website: '',
        name: '',
        open: false
    }

    mapRecruiterDetailsToState = (recruiterCredentials) => {
        this.setState({
            phone: recruiterCredentials.phone ? recruiterCredentials.phone : '',
            location: recruiterCredentials.location ? recruiterCredentials.location : '',
            website: recruiterCredentials.website ? recruiterCredentials.website : '',
            name: recruiterCredentials.name ? recruiterCredentials.name : '',
        })
    }

    handleOpen = () => {
        this.setState({open: true})
        this.mapRecruiterDetailsToState(this.props.recruiterCredentials)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        const { recruiterCredentials } = this.props
        this.mapRecruiterDetailsToState(recruiterCredentials)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const recruiterDetails = {
            phone: this.state.phone,
            location: this.state.location,
            website: this.state.website,
            name: this.state.name, 
        }
        this.props.editRecruiterDetails(recruiterDetails)
        this.handleClose()
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Tooltip title="Edit Details" placement="top">
                    <IconButton onClick={this.handleOpen} className={classes.button}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">
                        <DialogTitle>Edit your details</DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    name="phone"
                                    type="text"
                                    label="Phone"
                                    className={classes.textField}
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="location"
                                    type="text"
                                    label="Current Location"
                                    className={classes.textField}
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                                <TextField
                                    name="website"
                                    type="text"
                                    label="Website"
                                    className={classes.textField}
                                    value={this.state.website}
                                    onChange={this.handleChange}
                                    fullWidth
                                    />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
            </Fragment>
        )
    }
}

EditRecruiterDetails.propTypes = {
    editRecruiterDetails: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    recruiterCredentials: state.recruiter.recruiterCredentials
})

export default connect(mapStateToProps, {editRecruiterDetails})(withStyles(styles)(EditRecruiterDetails))
