import React, { Component } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Redux stuff
import { connect } from 'react-redux';
import { postComment } from '../../redux/actions/communityDataActions';

const styles = {
    invisibleSeparator: {
        width: '100%',
        border: 'none',
        marginBottom: '10px'
    },
    button: {
        margin: '8px',
        float: 'right'
    }
}

class CommentForm extends Component {
  state = {
    body: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '', errors: {} });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postComment(this.props.screamId, { body: this.state.body })
  }

  render() {
    const { classes, authenticated } = this.props
    const errors = this.state.errors

    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="body"
            type="text"
            label="Comment"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
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
        {/* <hr className={classes.invisibleSeparator} /> */}
      </Grid>
    ) : null

    return commentFormMarkup;
  }
}

CommentForm.propTypes = {
  postComment: propTypes.func.isRequired,
  UI: propTypes.object.isRequired,
  classes: propTypes.object.isRequired,
  screamId: propTypes.string.isRequired,
  authenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.jobseeker.authenticated
});

export default connect(mapStateToProps, { postComment })(withStyles(styles)(CommentForm));