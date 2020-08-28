import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

//Component imports
import JNavbar from '../components/Navbar/Jobseeker/JNavbar'
import Scream from '../components/community/Scream'
import PostScream from '../components/community/PostScream'

//MUI imports
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


//Redux imports
import { connect } from 'react-redux'
import { getScreams } from '../redux/actions/communityDataActions'

const styles= {
    paper: {
        margin: '30px',
        padding: '40px'
    },
    header: {
        textAlign: 'center',
        margin: '10px 10px 0 10px',
        fontWeight: 'bold'
    },
    subHeader: {
        textAlign: 'center',
        margin: '10px',
        fontWeight: 'bold'
    },
    // body: {
    //     margin: '0 5px 0 5px'
    // }
}

class community extends Component {
    
    componentDidMount() {
        this.props.getScreams()
    }

    render() {
        const {classes} = this.props
        const { screams, loading } = this.props.communityData
        let recentScreamsMarkup = !loading ? 
        screams.map(scream => <Scream key={scream.screamId} scream={scream}/>
            ) : (
            <p>Loading...</p>
            )
        return (
            <Fragment>
                <JNavbar/>
                <Grid container className="jobseekerContainer" >
                    <Grid item xs/>
                    <Grid item lg={10} sm={10} xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                                <PostScream/>
                            {recentScreamsMarkup}
                        </Paper>
                    </Grid>
                    <Grid item xs/>
                </Grid>    
            </Fragment>        
        )
    }
}

community.propTypes = {
    getScreams: propTypes.func.isRequired,
    communityData: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    communityData: state.communityData
})

export default connect(mapStateToProps, { getScreams })(withStyles(styles)(community))