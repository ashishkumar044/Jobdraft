import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Component imports

//MUI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = ({
    card: {
        padding: '20px',
        margin: '20px',
        width: '90%'
    },
    skillCard: {
        padding: '20px',
        margin: '20px',
        width: '90%',
        textAlign: 'center'
    },
    profile: {
        margin: '30px',
        position: 'relative'
    },
    profileInfo: {
        // margin: '30px',
        padding: '0 30px',
        position: 'relative',
        backgroundColor: '#607d8b',
        textColor: '#fafafa'
    },
    button: {
        margin: '10px'
    },
    header: {
        margin: '20px',
        textAlign: 'center',
        color: '#eceff1'
        // fontStyle: 'italic'
    },
    skillHeader: {
        margin: '20px',
        textAlign: 'center',
        fontWeight: 'bold'
        // fontStyle: 'italic'
    },
    about: {
        margin: '3px',
        textAlign: 'left'
    },
    phone: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1'
        // position: 'absolute',
        // left: '20px'
    },
    email: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
        // position: 'absolute',
        // left: '45px'
    },
    location: {
        margin: '3px',
        textAlign: 'left',
        color: '#eceff1',
        // position: 'absolute',
        // left: '45px'
    },
    fieldHeader: {
        margin: '10px auto 5px',
        fontWeight: 'bold'
    },
    educationCourse: {
        fontWeight: 'bold'
    },
    content: {
        fontWeight: 'bold'
    },
    loading: {
        fontWeight: 'bold',
        margin: '40px'
    },
    contentContainer: {
        margin: '10px',
        textAlign: 'center'
    },
    invisibleSeparator: {
        border: 'none',
        margin: 4
    },
})

const ApplicantProfile = (props) => {
    const { classes, profile: {
            about, 
            name, 
            email,
            phone,
            currentLocation,
            educationCourse1,
            educationInstitute1,
            educationCourse2,
            educationInstitute2,
            educationCourse3,
            educationInstitute3,
            experienceCompany1,
            experiencePeriod1,
            experienceDetails1,
            experienceCompany2,
            experiencePeriod2,
            experienceDetails2,
            experienceCompany3,
            experiencePeriod3,
            experienceDetails3, skills
    }, 
} = props

const projectsMarkup = 
            skills.map(skill => {
                const { skillName, createdAt } = skill;
                return (
                          <Fragment key={createdAt}>
                              <Grid container >
                                <Grid item sm/>
                                <Grid item sm={10} xs={10}>
                                      <div className={classes.projectData}>
                                      <Typography 
                                        variant="body1" 
                                        className={classes.fieldHeader}
                                        color="secondary"
                                        >
                                          {skillName} 
                                      </Typography>
                                      <hr className={classes.invisibleSeparator}/>
                                      </div>
                                </Grid>
                                <Grid item sm/>
                              </Grid>
                          </Fragment>
                        )})
        
    return(
        
        <Grid container>
            <Grid item sm/>
            <Grid item lg={7} sm={7} xs={12}>
                <Card elevation={1} className={classes.card}>
                    <CardContent>
                        <div className={classes.profile}>
                            <Card className={classes.profileInfo}>
                                <CardContent>
                                <Typography variant="h4" className={classes.header}>
                                    {name}
                                </Typography>
                                {phone && (
                                    <Fragment>
                                        <Typography variant="body1" className={classes.phone}> <strong>Phone: </strong>
                                            {'   '}{phone}
                                        </Typography>
                                    </Fragment>
                                )}
                                {email && (
                                    <Fragment>
                                            <Typography variant="body1" className={classes.email}><strong>Email: </strong>
                                                {'   '}{email}
                                            </Typography>
                                    </Fragment>
                                )}
                                {currentLocation && (
                                    <Fragment>
                                        <Typography variant="body1" className={classes.location}><strong>Current Location: </strong>
                                            {'   '}{currentLocation}
                                        </Typography>
                                    </Fragment>
                                )}
                                </CardContent>
                            </Card>
                            <br/>
                        {about && (
                            <Fragment>
                                <Typography variant="h6" color="primary" className={classes.fieldHeader}>
                                    About
                                </Typography>
                                <Typography variant="body1" color="secondary" className={classes.about}>
                                    {'   '}{about}
                                </Typography>
                                <br/>
                            </Fragment>
                        )}
                        <Typography variant="h6" color="primary" className={classes.fieldHeader}>
                            Education Details
                        </Typography>
                        {educationCourse1 && educationInstitute1 && (
                            <Fragment>
                                    <Typography variant="body1" color="secondary" className={classes.educationCourse}>
                                        {educationCourse1}{', '}{'  '}{educationInstitute1}
                                    </Typography>
                            </Fragment>
                        )}{educationCourse2 && educationInstitute2 && (
                            <Fragment>
                                    <Typography variant="body1" color="secondary" className={classes.educationCourse}>
                                        {educationCourse2}{'  '}{'  '}{educationInstitute2}
                                    </Typography>
                            </Fragment>
                        )}{educationCourse3 && educationInstitute3 && (
                            <Fragment>
                                    <Typography variant="body1" color="secondary" className={classes.educationCourse}>
                                        {educationCourse3}{'  '}{'  '}{educationInstitute3}
                                    </Typography>
                            </Fragment>
                        )}
                        <br/>
                        {experienceCompany1 && experiencePeriod1 && (
                            <Fragment>
                            <Typography variant="h6" color="primary" className={classes.fieldHeader}>
                                Work Experience
                            </Typography>
                                    <Typography variant="body1" color="secondary" className={classes.content}>
                                        {experienceCompany1}{'  ( '}{experiencePeriod1}{' )'}
                                    </Typography>
                                    <Typography variant="body2" color="secondary" className={classes.jobDetails}>
                                        {'  '}{experienceDetails1}{' '}
                                    </Typography>
                                <br/>
                            </Fragment>
                        )}{experienceCompany2 && experiencePeriod2 && (
                            <Fragment>
                                    <Typography variant="body1" color="secondary" className={classes.content}>
                                        {experienceCompany2}{'  ( '}{experiencePeriod2}{' )'}
                                    </Typography>
                                    <Typography variant="body2" color="secondary" className={classes.jobDetails}>
                                        {'  '}{experienceDetails2}{' '}
                                    </Typography>
                                <br/>
                            </Fragment>
                        )}{experienceCompany3 && experiencePeriod3 && (
                            <Fragment>
                                    <Typography variant="body1" color="secondary" className={classes.content}>
                                        {experienceCompany3}{'  ( '}{experiencePeriod3}{' )'}
                                    </Typography>
                                    <Typography variant="body2" color="secondary" className={classes.jobDetails}>
                                        {'  '}{experienceDetails3}{' '}
                                    </Typography>
                                <br/>
                            </Fragment>
                        )}
                    </div>
                </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} sm={3} xs={12}>
                <Card elevation={1} className={classes.skillCard}>
                    <CardContent>
                    <div className={classes.profile}>
                    <Typography variant="h4" className={classes.skillHeader}>
                        Skills
                    </Typography>
                    {projectsMarkup}
                    </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm/>
            </Grid>
    )
}

ApplicantProfile.propTypes = {
    profile: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(ApplicantProfile)