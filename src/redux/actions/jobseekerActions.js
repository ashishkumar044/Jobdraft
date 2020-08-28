import { 
    SET_JOBSEEKER, 
    SET_ERRORS, 
    CLEAR_ERRORS, 
    LOADING_UI, 
    SET_UNAUTHENTICATED,
    LOADING_JOBSEEKER,
    POST_PROJECT
 } from '../types'
import axios from 'axios'

//Login jobseeker
export const loginJobseeker = (jobseeker, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/j/login', jobseeker)
            .then(res => {
                setJAuthorizationHeader(res.data.token)
                dispatch(getJobseekerData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/j/home') 
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            })
}

//Signup Jobseeker
export const signupJobseeker = (newJobseeker, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/j/signup', newJobseeker)
            .then(res => {
                setJAuthorizationHeader(res.data.token)
                dispatch(getJobseekerData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/j/home') 
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            })
}

//Get jobseeker data
export const getJobseekerData = () => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.get('/j/details')
        .then(res => {
            dispatch({
                type: SET_JOBSEEKER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

//Edit Jobseeker About Details
export const editJobseekerAboutDetails = (jobSeekerAboutDetails) => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.post('/j/aboutdetails', jobSeekerAboutDetails)
        .then(() => {
            dispatch(getJobseekerData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Edit Jobseeker Education Details
export const editJobseekerEducationDetails = (jobSeekerEducationDetails) => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.post('/j/educationdetails', jobSeekerEducationDetails)
        .then(() => {
            dispatch(getJobseekerData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Edit Jobseeker Work Experience Details
export const editJobseekerWorkExDetails = (jobSeekerWorkExDetails) => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.post('/j/workexdetails', jobSeekerWorkExDetails)
        .then(() => {
            dispatch(getJobseekerData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Edit Jobseeker Contact Details
export const editJobseekerContactDetails = (jobSeekerContactDetails) => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.post('/j/contactdetails', jobSeekerContactDetails)
        .then(() => {
            dispatch(getJobseekerData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Edit Jobseeker Job Preference Details
export const editJobseekerPrefDetails = (jobSeekerJobPrefDetails) => (dispatch) => {
    dispatch({ type: LOADING_JOBSEEKER })
    axios.post('/j/jobPref', jobSeekerJobPrefDetails)
        .then(() => {
            dispatch(getJobseekerData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Post a project
export const postProject = (newProject, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/j/project', newProject)
        .then (res => {
            dispatch({
                type: POST_PROJECT,
                payload: res.data
            })
            dispatch(clearErrors())
            history.push('/j/feedback')
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

//Logout Jobseeker
export const logoutJobseeker = () => (dispatch) => {
    localStorage.removeItem('FBIdTokenJ')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
}

//Helper function
const setJAuthorizationHeader = (token) => {
    const FBIdTokenJ = `Bearer ${token}`
        localStorage.setItem('FBIdTokenJ', FBIdTokenJ)
        axios.defaults.headers.common['Authorization'] = FBIdTokenJ
}


export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}