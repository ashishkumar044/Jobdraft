import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//MUI imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

// Redux imports
import { connect } from 'react-redux'
import { postScream, clearErrors } from '../../redux/actions/communityDataActions'

const styles = (theme) => ({
    ...theme.spreadThis,
    card: {
        margin: '20px 5px'
    },
    submitButton:{
        position: 'relative',
        float: 'right',
        margin: '8px'
    },
    progressSpinner:{
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: "91%",
        top: '5%'
    }
})

class PostScream extends Component{
    state = {
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
            this.setState({ body: '', errors: {} })
        }
    }
    handleChange = (event) => {
        this.setState({ [ event.target.name ]: event.target.value })
    } 
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postScream({ body: this.state.body })
    }
    render(){
        const { errors } = this.state
        const { classes, UI: { loading }} = this.props
        return (
            <Fragment>
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.content}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                name="body"
                                type="text"
                                label="Start a discussion"
                                multiline
                                rows="2"
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
                    </CardContent>
                </Card>
                <hr/>
            </Fragment>
        )
    }
}

PostScream.propTypes = {
    postScream: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    UI: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postScream, clearErrors })(withStyles(styles)(PostScream))