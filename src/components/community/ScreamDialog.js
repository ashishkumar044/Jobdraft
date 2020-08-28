import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
import dayjs from 'dayjs';

//Component imports
import Comments from './Comments'
import CommentForm from './CommentForm'

// MUI Stuff
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';

// Redux stuff
import { connect } from 'react-redux';
import { getScream, clearErrors } from '../../redux/actions/communityDataActions';

const styles = {
  dialogContent: {
    padding: 30
  },
  closeButton: {
    position: 'absolute',
    left: '90%'
  },
  expandButton: {
    position: 'absolute',
    left: '88%'
  },
  spinnerDiv: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  invisibleSeparator: {
      border: 'none',
      margin: 4
  },
  visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: '20px'
  }
}

class ScreamDialog extends Component {
  state = {
    open: false,
  };
  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }
  handleOpen = () => {
    this.setState({ open: true })
    this.props.getScream(this.props.screamId);
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        commentCount,
        userName,
        comments
      },
      UI: { loading }
    } = this.props;

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={200} thickness={2} />
      </div>
    ) : (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            color="primary"
            variant="h6"
          >
            {body}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body1">Posted by: {userName}</Typography>
          {/* <hr className={classes.invisibleSeparator} /> */}
          <Typography variant="caption" color="textSecondary">
            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
          </Typography>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} replies</span>
          <hr className={classes.invisibleSeparator}/>
          <hr className={classes.invisibleSeparator}/>
          <hr className={classes.invisibleSeparator}/>
          <Card variant="outlined">
            <CardContent>
              <CommentForm screamId={screamId} />
              <Comments comments={comments} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand post"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ScreamDialog.propTypes = {
  clearErrors: propTypes.func.isRequired,
  getScream: propTypes.func.isRequired,
  screamId: propTypes.string.isRequired,
  userEmail: propTypes.string.isRequired,
  scream: propTypes.object.isRequired,
  UI: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  scream: state.communityData.scream,
  UI: state.UI
});

const mapActionsToProps = {
  getScream,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));