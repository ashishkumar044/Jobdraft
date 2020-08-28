import { 
    SET_SCREAMS, 
    SET_SCREAM,
    LOADING_DATA, 
    UPVOTE_COMMENT, 
    REMOVE_UPVOTE,
    DOWNVOTE_COMMENT, 
    REMOVE_DOWNVOTE,
    DELETE_SCREAM,
    CLEAR_ERRORS,
    SET_ERRORS,
    POST_SCREAM,
    POST_COMMENT,
    LOADING_UI,
    STOP_LOADING_UI
} from '../types'
import axios from 'axios'


//Post a scream
export const postScream = (newScream) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/postScream', newScream)
        .then (res => {
            dispatch({
                type: POST_SCREAM,
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

//Get all screams
export const getScreams = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios.get('/getScreams')
        .then(res => {
            dispatch({
                type: SET_SCREAMS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_SCREAMS,
                payload: []
            })
        })
}


//Get a scream
export const getScream = (screamId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/getScream/${screamId}`)
      .then((res) => {
        dispatch({
          type: SET_SCREAM,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };


//Comment on a scream
export const postComment = (screamId, commentData) => (dispatch) => {
  axios
    .post(`/scream/${screamId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: POST_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors())
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}


//Upvote a comment
export const upvoteComment = (commentId) => (dispatch) => {
    axios.get(`/comment/${commentId}/upvote`)
        .then(res => {
            dispatch({
                type: UPVOTE_COMMENT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


//Remove upvote from a comment
export const removeUpvote = (commentId) => (dispatch) => {
    axios.get(`/comment/${commentId}/removeUpvote`)
        .then(res => {
            dispatch({
                type: REMOVE_UPVOTE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


//Downvote a comment
export const downvoteComment = (commentId) => (dispatch) => {
    axios.get(`/comment/${commentId}/downvote`)
        .then(res => {
            dispatch({
                type: DOWNVOTE_COMMENT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


//Remove downvote from a comment
export const removeDownvote = (commentId) => (dispatch) => {
    axios.get(`/comment/${commentId}/removeDownvote`)
        .then(res => {
            dispatch({
                type: REMOVE_DOWNVOTE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


//Delete a scream
export const deleteScream = (screamId) => dispatch => {
    axios.delete(`/scream/${screamId}/delete`)
        .then(() => {
            dispatch({ type: DELETE_SCREAM, payload: screamId })
        })
        .catch(err => console.log(err))
}


export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}