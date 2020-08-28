import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = {
  card: {
    margin: '5px'
  },
  commentData: {
    marginLeft: 20
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

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userName } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Card variant="outlined" className={classes.card}>
                      <CardContent>
                        <div className={classes.commentData}>
                        <Typography variant="body1">{body}</Typography>
                        <Typography variant="body2" color="primary">{userName}</Typography>
                        {/* <hr className={classes.invisibleSeparator} /> */}
                        <Typography variant="caption" color="textSecondary">
                          {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                        </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              {/* {index !== comments.length - 1 && (
                <hr className={classes.visibleSeparator} />
              )} */}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: propTypes.array.isRequired
};

export default withStyles(styles)(Comments);