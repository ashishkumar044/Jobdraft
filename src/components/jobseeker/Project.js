import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// MUI imports
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const styles = {
  projectData: {

  },
  skillList: {
    fontSize: '1.3rem',        
    color: '#1d2d35',
    fontWeight: 'bold',
  },
  skillTime: {
      fontSize: '1rem',        
      color: '#1d2d35',
      fontWeight: '400',
  },
  listItem: {
    display: 'list-item',
    paddingTop: 0,
    paddingBottom: 0,
  },
  visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: '20px'
  }
}

class Project extends Component {
  render() {
    dayjs.extend(relativeTime)
    const { skills, classes } = this.props;
    return (
      <Grid container>
        {skills.map((skill, index) => {
          const { skillName, score, createdAt } = skill;
          return (
            <Fragment key={createdAt}>
                        <div >
                          <List>
                          <div className={classes.projectData}>
                            <ListItem className={classes.listItem}>
                              <ListItemText>
                                <h6 className={classes.skillList}>{skillName}{'   '}</h6>
                              </ListItemText>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                              <ListItemText className={classes.skillTime}>                              
                                <h6 >
                                    Completed {'  '} {dayjs(createdAt).fromNow()} 
                                </h6>  
                              </ListItemText>
                            </ListItem>
                          </div>
                          </List>
                        </div>
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Project.propTypes = {
  jobseeker: propTypes.object.isRequired
};

export default withStyles(styles)(Project);