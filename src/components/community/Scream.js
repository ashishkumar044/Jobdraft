import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import propTypes from 'prop-types'
import MyButton from '../../util/MyButton'

//Component imports
import DeleteScream from './DeleteScream'
import ScreamDialog from './ScreamDialog'

//MUI imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//Icons imports
import ChatIcon from '@material-ui/icons/Chat'

//Redux imports
import { connect } from 'react-redux'

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        margin: '10px 0px', 
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    },
    icon: {
        position: 'absolute',
        left: '80%'
    },
    body: {
        width: '93%',
        fontSize: '1.1rem'
    }
}

class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { 
            classes, 
            scream: { 
                body, 
                createdAt, 
                userName, 
                userEmail,
                screamId, 
                commentCount
            },
            jobseeker: { authenticated, jobseekerCredentials: {email} } 
        } = this.props

        const deleteButton = authenticated && userEmail === email ? (
            <DeleteScream screamId={screamId}/>
        ) : null

        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h6" className={classes.body}>
                        {body}
                    </Typography>
                    {deleteButton}
                    <Typography 
                    variant="body2" 
                    >
                       Posted by: {userName}
                    </Typography>
                    <div className={classes.icon}>
                        <MyButton tip="comments">
                            <ChatIcon color="primary"/>
                        </MyButton>
                        <span>{commentCount}</span>    
                    </div>
                    <ScreamDialog screamId={screamId}/>
                    <Typography variant="caption" color="textSecondary">
                        {dayjs(createdAt).fromNow()}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

Scream.propTypes = {
    jobseeker: propTypes.object.isRequired,
    scream: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    jobseeker: state.jobseeker
})


export default connect(mapStateToProps)(withStyles(styles)(Scream))
