import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/recruiter/Footer'

//Redux imports
import { connect } from 'react-redux'
import { loginRecruiter } from '../../redux/actions/recruiterActions'

//MUI imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '800',
        color: '#1d2d35',
        margin: '0 0 0.25em 0'
    },
    subHeader: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1d2d35',
        margin: '0 0 1.5em 0'
    },
    loginCard: {
        margin: '11% 20px',
        padding: '25px',
        textAlign: 'center'
    },
    formTitle: {
        margin: '20px auto',
        color: '#1d2d35',
        fontSize: '1.4rem',
        fontWeight: '700'
    },
    textField: {
        margin: '10px auto'
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

class recruiterLogin extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
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
        const recruiter = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginRecruiter(recruiter, this.props.history)
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
                <Grid item xs/>
                <Grid item lg={6} sm={6} xs={12}>
                    <h1 className={classes.header}>
                        Find the best candidates for your organization
                    </h1>
                    <h4 className={classes.subHeader}>
                        Hire from a small group of more qualified candidates
                    </h4>
                    <Card variant="outlined" className={classes.loginCard}>
                        <CardContent>
                        <h1 className={classes.formTitle}>
                        Recruiter Sign in
                        </h1>
                        <form noValidate onSubmit={this.handleSubmit}>
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
                            Sign in
                            {loading && (
                                <CircularProgress className={classes.progress}/>
                            )}
                            </Button>
                            <h2 className={classes.bottomText}>
                            New to Jobdraft ? 
                                <Link to="/r/signup" className={classes.signupRoute}> Sign up here</Link>
                            </h2>
                        </form>
                        </CardContent>
                    </Card>                   
                </Grid>
            <Grid item xs/>
            </Grid> 
            </Fragment>
        )
    }
}

recruiterLogin.propTypes = {
    classes: propTypes.object.isRequired,
    loginRecruiter: propTypes.func.isRequired,
    recruiter: propTypes.object.isRequired,
    UI: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    recruiter: state.recruiter,
    UI: state.UI
})

const mapActionsToProps = {
    loginRecruiter
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(recruiterLogin))