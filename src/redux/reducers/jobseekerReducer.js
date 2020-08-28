import { 
    SET_JOBSEEKER, 
    SET_AUTHENTICATED, 
    SET_UNAUTHENTICATED,
    LOADING_JOBSEEKER,
    POST_PROJECT,
} from '../types'

const initialState = {
    authenticated: false,
    jobseekerCredentials: {},
    skills: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_JOBSEEKER:
            return{
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case LOADING_JOBSEEKER:
            return{
                ...state,
                loading: true
            }
        case POST_PROJECT:
            return{
                ...state,
                skills: [
                    action.payload,
                    ...state.skills
                ]
            }
        default:
            return state
    }
}