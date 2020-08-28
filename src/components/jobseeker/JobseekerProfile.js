import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//Component imports
import EditAboutDetails from './EditAboutDetails'
import EditEducationDetails from './EditEducationDetails'
import EditWorkExDetails from './EditWorkExDetails'
import EditContactDetails from './EditContactDetails'
import Project from './Project'

//MUI imports
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//Redux Imports
import { connect } from 'react-redux'

const styles = theme => ({
    accordionDetail: {
        padding: '0 16px'
    },
    aboutCard: {
        padding: '0 10px',
        textAlign: 'center'
    },
    loading: {
        fontWeight: 'bold',
        margin: '40px'
    },
    headerCard: {
        textAlign: 'center',
        margin: '0'
    },
    header: {
        fontSize: '1.7rem',        
        color: '#3f51b5',
        fontWeight: 'bold',
    },
    contentCard: {
        textAlign: 'left'
    },
    accordionHeader: {
        fontSize: '1.2rem',        
        color: '#3f51b5',
        fontWeight: 'bold',
    },
    content: {
        fontSize: '1rem',        
        color: '#1d2d35',
        fontWeight: '600',
    },
    fieldHeader: {
        fontSize: '1.2rem',        
        color: '#1d2d35',
        fontWeight: '600',
    }
})


class JobseekerProfile extends Component {
    render() {
        const { classes, 
            jobseeker: { jobseekerCredentials: {  
            about, 
            firstName,
            lastName, 
            email,
            phone,
            currentLocation,
            educationCourse1,
            educationInstitute1,
            educationCourse2,
            educationInstitute2,
            educationCourse3,
            educationInstitute3,
            totalWorkEx,
            experienceCompany1,
            experienceStPeriod1,
            experienceEndPeriod1,
            experienceDetails1,
            experienceCompany2,
            experienceStPeriod2,
            experienceEndPeriod2,
            experienceDetails2,
            experienceCompany3,
            experienceStPeriod3,
            experienceEndPeriod3,
            experienceDetails3,
        }, 
        loading, 
        authenticated,
        skills
    }
} = this.props

    let jobseekerProfileMarkup = !loading ? (authenticated ? (
        <Fragment>
            <div className={classes.headerCard}>
                <h2 className={classes.header}>
                    {firstName}{' '}{lastName}
                </h2>
            </div>
            <div className={classes.aboutCard}>
                    <h6 className={classes.content}>
                        {about}
                    </h6>
                    <EditAboutDetails/>
            </div>
            <br/>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                <h3 className={classes.accordionHeader}>
                    Contact
                </h3>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetail}>
                <h6  className={classes.content}> <strong>Phone: </strong>
                    {'   '}{phone}
                </h6>
            </AccordionDetails>
            <AccordionDetails className={classes.accordionDetail}>
                <h6  className={classes.content}><strong>Email: </strong>
                    {'   '}{email}
                </h6>
            </AccordionDetails>
            <AccordionDetails className={classes.accordionDetail}>
                <h6  className={classes.content}><strong>Current Location: </strong>
                    {'   '}{currentLocation}
                </h6>
            </AccordionDetails>
                <EditContactDetails/>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3 className={classes.accordionHeader}>
                        Education
                    </h3>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                    {educationCourse1 && educationInstitute1 && (
                        <h6 className={classes.fieldHeader}>
                            {educationCourse1}{' , '}{'  '}{educationInstitute1}
                        </h6>
                    )}
                </AccordionDetails>
                <AccordionDetails className={classes.accordionDetail}>
                    {educationCourse2 && educationInstitute2 && (
                        <h6 className={classes.fieldHeader}>
                            {educationCourse2}{' , '}{'  '}{educationInstitute2}
                        </h6>
                    )}
                </AccordionDetails>
                <AccordionDetails className={classes.accordionDetail}>
                    {educationCourse3 && educationInstitute3 && (
                        <h6 className={classes.fieldHeader}>
                            {educationCourse3}{' , '}{'  '}{educationInstitute3}
                        </h6>
                    )}
                </AccordionDetails>
                <EditEducationDetails/>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3 className={classes.accordionHeader}>
                        Work Ex
                    </h3>
                </AccordionSummary>
                {totalWorkEx && (
                <AccordionDetails className={classes.accordionDetail}>
                        <h6 className={classes.fieldHeader}>
                            Total Work Ex : {totalWorkEx} years
                        </h6>
                </AccordionDetails>
                )}
                {experienceCompany1 && experienceStPeriod1 && experienceEndPeriod1 && (
                    <Fragment>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6 className={classes.fieldHeader}>
                            {experienceCompany1}
                                        {'  ('}{experienceStPeriod1} {' - '} {experienceEndPeriod1} {')'}
                        </h6>
                    </AccordionDetails>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6  className={classes.content}>
                            {'  '}{experienceDetails1}{' '}
                        </h6>
                    </AccordionDetails>
                    <br/>
                    </Fragment>
                    )}
                {experienceCompany2 && experienceStPeriod2 && experienceEndPeriod2 && (
                    <Fragment>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6 className={classes.fieldHeader}>
                            {experienceCompany2}
                                        {'  ('}{experienceStPeriod2} {' - '} {experienceEndPeriod2} {')'}
                        </h6>
                    </AccordionDetails>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6  className={classes.content}>
                            {'  '}{experienceDetails2}{' '}
                        </h6>
                    </AccordionDetails>
                    <br/>
                    </Fragment>
                    )}
                {experienceCompany3 && experienceStPeriod3 && experienceEndPeriod3 && (
                    <Fragment>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6 className={classes.fieldHeader}>
                            {experienceCompany3}
                                        {'  ('}{experienceStPeriod3} {' - '} {experienceEndPeriod3} {')'}
                        </h6>
                    </AccordionDetails>
                    <AccordionDetails className={classes.accordionDetail}>
                        <h6  className={classes.content}>
                            {'  '}{experienceDetails3}{' '}
                        </h6>
                    </AccordionDetails>
                    </Fragment>
                    )}
                <EditWorkExDetails/>
            </Accordion>
            <br/>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3 className={classes.accordionHeader}>
                        Verified Skills
                    </h3>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                <Project skills={skills}/>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    ) : (
        <Typography variant="h3" className={classes.loading}>Loading...</Typography>
    )) : (<Typography variant="h3" className={classes.loading}>Loading...</Typography>)

    return jobseekerProfileMarkup 
    }
}

const mapStateToProps = (state) => ({
    jobseeker: state.jobseeker
})


JobseekerProfile.propTypes = {
    jobseeker: propTypes.object.isRequired,
    classes: propTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(JobseekerProfile))
