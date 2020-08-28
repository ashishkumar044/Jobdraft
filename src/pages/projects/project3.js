import React, { Component } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import JNavbar from '../../components/jobseeker/JNavbar'

// MUI imports
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

// Redux imports
import { connect } from 'react-redux'
import { postProject } from '../../redux/actions/jobseekerActions'

const styles = {
    paper: {
        // maxWidth: '80%',
        margin: '30px',
        padding: '40px'
    },
    invisibleSeparator: {
        width: '100%',
        border: 'none',
        marginBottom: '20px'
    },
    problem: {
        margin: '20px auto',
        textAlign: 'left'
    },
    textField: {
      margin: '20px auto'
    },
    button: {
        margin: '8px',
        float: 'right'
    }
}

class project3 extends Component {
  state = {
    language: '',
    problem: 'Multiple choice quiz',
    solution: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors })
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ language: '', problem: '', solution: '' })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postProject(
        { language: this.state.language, problem: this.state.problem, solution: this.state.solution })
  }

  render() {
    const { classes, authenticated } = this.props
    const errors = this.state.errors

    const projectFormMarkup = authenticated ? (
        <Grid container>
            <Grid item xs/>
            <Grid item sm={10} xs={12} style={{ textAlign: 'center' }}>
                <JNavbar/>
                <Paper className={classes.paper}>
                    <form onSubmit={this.handleSubmit}>
                    <Typography variant="h6" className={classes.problem} >
                    Build a multiple choice quiz that calculates score and displays the correct answers at the end 
                    </Typography>
                    <Typography variant="body1" className={classes.problem} >
                    The score calculation should be as follows: add 2 points for every correct answer and
                    deduct 1 point for every wrong answer
                    </Typography>
                    <TextField
                        name="language"
                        type="text"
                        label="Language"
                        placeholder="Javascript/Python/etc"
                        error={errors.project ? true : false}
                        helperText={errors.language}
                        value={this.state.language}
                        onChange={this.handleChange}
                        fullWidth
                        className={classes.textField}
                    />
                    <TextField
                        name="solution"
                        type="text"
                        label="Paste your solution"
                        placeholder="Your code here"
                        multiline
                        rows="15"
                        error={errors.project ? true : false}
                        helperText={errors.solution}
                        value={this.state.solution}
                        onChange={this.handleChange}
                        fullWidth
                        className={classes.textField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                    </form>
                    <hr className={classes.invisibleSeparator} />
                </Paper>
            </Grid>
            <Grid item xs/>
        </Grid>
    ) : null

    return projectFormMarkup;
  }
}

project3.propTypes = {
  postProject: propTypes.func.isRequired,
  UI: propTypes.object.isRequired,
  classes: propTypes.object.isRequired,
  jobseeker: propTypes.object.isRequired,
  authenticated: propTypes.bool.isRequired
};
const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.jobseeker.authenticated
})

export default connect(mapStateToProps, { postProject })(withStyles(styles)(project3))