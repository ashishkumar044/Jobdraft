import { 
    SET_JOBPOSTS, 
    LOADING_DATA, 
    DELETE_JOB, 
    CLEAR_ERRORS, 
    POST_JOB, 
    SET_ERRORS, 
    LOADING_UI, 
    SET_JOB,
    STOP_LOADING_UI,
    DELETE_APPLICATION
} from '../types'
import axios from 'axios'

//Get all jobposts
export const getJobPosts = (email) => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios.get(`/r/jobs/${email}`)
        .then(res => {
            dispatch({
                type: SET_JOBPOSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_JOBPOSTS,
                payload: []
            })
        })
}

//Post a job
export const postJob = (newPost) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/r/postJob', newPost)
        .then (res => {
            dispatch({
                type: POST_JOB,
                payload: res.data
            })
            dispatch(clearErrors())
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

//Get Job Detail
export const getJobDetail = (jobId) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.get(`/r/job/${jobId}`)
        .then (res => {
            dispatch({
            type: SET_JOB,
            payload: res.data
        })
        dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => console.log(err))
}

//Delete jobPost
export const deleteJobPost = (jobId) => dispatch => {
    axios.delete(`/r/job/${jobId}/delete`)
        .then(() => {
            dispatch({ type: DELETE_JOB, payload: jobId })
        })
        .catch(err => console.log(err))
}

//Delete Application
export const deleteApplication = (applicationId) => dispatch => {
    axios.delete(`/r/application/${applicationId}/delete`)
        .then(() => {
            dispatch({ type: DELETE_APPLICATION, payload: applicationId })
        })
        .catch(err => console.log(err))
}

//Clear Errors
export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}