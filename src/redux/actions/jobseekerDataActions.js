import { SET_JOBPOSTS, 
    LOADING_DATA, 
    LOADING_UI, 
    SET_JOB, 
    STOP_LOADING_UI, 
    APPLY_JOB, 
    CLEAR_ERRORS,
    SET_ERRORS 
} from '../types'
import axios from 'axios'

//Get all jobposts
export const getJobPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios.get('/j/jobs')
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

//Get a single jobpost
export const getJobPost = (jobId) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.get(`/j/job/${jobId}`)
        .then (res => {
            dispatch({
            type: SET_JOB,
            payload: res.data
        })
        dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => console.log(err))
}

//Apply for job
export const applyJob = (jobId, applyJob) => (dispatch) => {
    axios.post(`/j/job/${jobId}/apply`, applyJob)
        .then(res => {
            dispatch({
                type: APPLY_JOB,
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

//Clear Errors
export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}