import React, { Component } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI Stuff
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

// Redux stuff
import { connect } from 'react-redux';
import { postProject } from '../../redux/actions/jobseekerActions';

const styles = {
    invisibleSeparator: {
        width: '100%',
        border: 'none',
        marginBottom: '20px'
    },
    textField: {
      margin: '10px auto'
    },
    button: {
        margin: '8px',
        float: 'right'
    }
}

class project5 extends Component {
  state = {
    language: '',
    problem: 'Write a function to change the color of a light bulb',
    solution: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ language: '', problem: '', solution: '' });
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
      <Grid item sm={12} style={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h6" className={classes.problem} >
            Write a function to change the color of a light bulb
          </Typography>
          <TextField
            name="language"
            type="text"
            label="Language"
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
            placeholder="Cheating is only good if you need to pass, not if you want to move ahead"
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
      </Grid>
    ) : null

    return projectFormMarkup;
  }
}

project5.propTypes = {
  postProject: propTypes.func.isRequired,
  UI: propTypes.object.isRequired,
  classes: propTypes.object.isRequired,
  jobseeker: propTypes.object.isRequired,
  authenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.jobseeker.authenticated
});

export default connect(mapStateToProps, { postProject })(withStyles(styles)(project5));