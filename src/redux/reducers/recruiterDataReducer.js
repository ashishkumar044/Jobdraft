import { SET_JOBPOSTS, LOADING_DATA, DELETE_JOB, POST_JOB, SET_JOB, DELETE_APPLICATION } from '../types'

const initialState = {
    jobPosts: [],
    jobPost: {},
    jobApplications: [],
    jobApplication: {},
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
        case DELETE_JOB:
            let index = state.jobPosts.findIndex(jobPost => jobPost.jobId === action.payload)
            state.jobPosts.splice(index, 1)
            return{
                ...state
            }
        case POST_JOB:
            return{
                ...state,
                jobPosts: [
                    action.payload,
                    ...state.jobPosts
                ]
            }
        case DELETE_APPLICATION:
            let appIndex = state
                    .jobApplications
                    .findIndex(jobApplication => jobApplication.applicationId === action.payload)
            state.jobApplications.splice(appIndex, 1)
            return{
                ...state
            }
        default:
            return state
    }
}