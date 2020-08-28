import React, { Component } from 'react'
import propTypes from 'prop-types'

//MUI imports
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

//Redux imports
import { connect } from 'react-redux'
import { applyJob } from '../../redux/actions/jobseekerDataActions'

const styles = {
    button: {
        float: 'right',
        margin: '20px'
    }
}

class ApplyJob extends Component {
    state = {
        body: '',
        errors: {},
        disabled: false
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({errors: nextProps.UI.errors})
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.applyJob(this.props.jobId, {body: this.state.body})
        alert('You have applied successfully')
    }
    
    render() {
        const { classes, authenticated } = this.props
        const errors = this.state.errors

        const applyJobMarkup = authenticated ? (
            <Grid container>
                <Grid item sm={12} xs={12}>
                <form onSubmit={this.handleSubmit}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    errors={errors.applyJob }
                    onChange={this.handleChange}
                    >
                        Apply 
                </Button>
                </form>
                </Grid>
            </Grid>
        ) : null
        return applyJobMarkup
    }
}

ApplyJob.propTypes = {
    applyJob: propTypes.func.isRequired,
    UI: propTypes.object.isRequired,
    classes: propTypes.object.isRequired,
    jobId: propTypes.string.isRequired,
    authenticated: propTypes.bool.isRequired
}

const mapStateToProps = state => ({
    UI: state.UI,
    authenticated: state.jobseeker.authenticated
})

export default connect(mapStateToProps, { applyJob })(withStyles(styles)(ApplyJob))
