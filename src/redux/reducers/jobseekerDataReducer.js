import { SET_JOBPOSTS, LOADING_DATA, SET_JOB, APPLY_JOB } from '../types'

const initialState = {
    jobPosts: [],
    jobPost: {},
    jobApplications: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return{
                ...state,
                loading: true
            }
        case SET_JOBPOSTS:
            return{
                ...state,
                jobPosts: action.payload,
                loading: false
            }
        case SET_JOB:
            return {
                ...state,
                jobPost: action.payload
            }
        case APPLY_JOB:
            return{
                ...state,
                jobPost: {
                    ...state.jobPost,
                    jobApplications: [action.payload, ...state.jobPost.jobApplications]
                }
            }
        default:
            return state
    }
}