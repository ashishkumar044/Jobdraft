import { 
    SET_RECRUITER, 
    SET_ERRORS, 
    CLEAR_ERRORS, 
    LOADING_UI, 
    SET_UNAUTHENTICATED,
    LOADING_RECRUITER,
 } from '../types'
import axios from 'axios'

//Login Recruiter
export const loginRecruiter = (recruiter, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/r/login', recruiter)
            .then(res => {
                setRAuthorizationHeader(res.data.token)
                dispatch(getRecruiterData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/r/home') 
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            })
}

//Signup recruiter
export const signupRecruiter = (newRecruiter, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/r/signup', newRecruiter)
            .then(res => {
                setRAuthorizationHeader(res.data.token)
                dispatch(getRecruiterData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/r/home') 
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            })
}

//Get recruiter Details
export const getRecruiterData = () => (dispatch) => {
    dispatch({ type: LOADING_RECRUITER })
    axios.get('/r/details')
        .then(res => {
            dispatch({
                type: SET_RECRUITER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

//Edit Recruiter Details
export const editRecruiterDetails = (recruiterDetails) => (dispatch) => {
    dispatch({ type: LOADING_RECRUITER })
    axios.post('/r/details', recruiterDetails)
        .then(() => {
            dispatch(getRecruiterData())
        })
        .catch(err => {
            console.log(err)
        })
}

//Logout Recruiter
export const logoutRecruiter = () => (dispatch) => {
    localStorage.removeItem('FBIdTokenR')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
}


//Helper function
const setRAuthorizationHeader = (token) => {
    const FBIdTokenR = `Bearer ${token}`
        localStorage.setItem('FBIdTokenR', FBIdTokenR)
        axios.defaults.headers.common['Authorization'] = FBIdTokenR
}