import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'

//MUI imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

//Redux imports
import { connect } from 'react-redux'
import { signupRecruiter } from '../../redux/actions/recruiterActions'

const styles = {
    signupCard: {
        margin: '11% 20px',
        padding: '25px',
        textAlign: 'center',
    },
    formTitle: {
        margin: '20px auto',
        color: '#1d2d35',
        fontSize: '1.4rem',
        fontWeight: '700'
    },
    textField: {
        margin: '10px auto',
    },
    button: {
        margin: '15px 0',
        position: 'relative',
        fontWeight: 'bold',
        width: '100%'
    },
    progress: {
        position: 'absolute'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '10px'
    },
    bottomText: {
        color: '#1d2d35',
        fontSize: '1.1rem',
        fontWeight: '600',
    },
    signupRoute: {
        color: '#1d2d35',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    }
}

class recruiterSignup extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            designation: '',
            organization: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({ errors: nextProps.UI.errors })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const newRecruiter = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            designation: this.state.designation,
            organization: this.state.organization,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.signupRecruiter(newRecruiter, this.props.history)

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { classes, UI: { loading } } = this.props
        const { errors } = this.state

        return (
            <Fragment>
            <Navbar/>
            <Grid container className={classes.wrapper}>
                <Grid item sm/>
                <Grid item  lg={6} sm={6} xs={12}>
                    <Card variant="outlined" className={classes.signupCard}>
                        <CardContent>
                        <h1 className={classes.formTitle}>
                        Recruiter Sign up
                        </h1>
                        <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="name" 
                            name="name" 
                            type="text" 
                            label="Name" 
                            className={classes.textField}
                            helperText={errors.name}
                            error={errors.name ? true : false}
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="email" 
                            name="email" 
                            type="email" 
                            label="Email" 
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="phone" 
                            name="phone" 
                            type="text" 
                            label="Phone" 
                            className={classes.textField}
                            helperText={errors.phone}
                            error={errors.phone ? true : false}
                            value={this.state.phone} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="designation" 
                            name="designation" 
                            type="text" 
                            label="Designation" 
                            className={classes.textField}
                            helperText={errors.designation}
                            error={errors.designation ? true : false}
                            value={this.state.designation} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="organization" 
                            name="organization" 
                            type="text" 
                            label="Organization" 
                            className={classes.textField}
                            helperText={errors.organization}
                            error={errors.organization ? true : false}
                            value={this.state.organization} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Password" 
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            <TextField 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            label="Confirm Password" 
                            className={classes.textField}
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            value={this.state.confirmPassword} 
                            onChange={this.handleChange} 
                            fullWidth
                            />
                            {errors.general && (
                                <Typography variant="body2" className={classes.customError}>
                                    {errors.general}
                                </Typography>
                            )}
                            <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            disabled={loading}
                            >
                            Sign up
                            {loading && (
                                <CircularProgress className={classes.progress}/>
                            )}
                            </Button>
                            <h6 className={classes.bottomText}>
                                Have an account ? 
                                <Link to="/r/signin" className={classes.signupRoute}> Sign in</Link>
                            </h6>
                        </form>
                        </CardContent>
                    </Card>                    
                </Grid>
                <Grid item sm/>
            </Grid>
            </Fragment>
        )
    }
}

recruiterSignup.propTypes = {
    classes: propTypes.object.isRequired,
    recruiter: propTypes.object.isRequired,
    UI: propTypes.object.isRequired,
    signupRecruiter: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    recruiter: state.recruiter,
    UI: state.UI
})

export default connect(mapStateToProps, { signupRecruiter })(withStyles(styles)(recruiterSignup))
