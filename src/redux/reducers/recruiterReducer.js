import { 
    SET_RECRUITER, 
    SET_AUTHENTICATED, 
    SET_UNAUTHENTICATED,
    LOADING_RECRUITER
} from '../types'

const initialState = {
    authenticated: false,
    recruiterCredentials: {},
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
        case SET_RECRUITER:
            return{
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case LOADING_RECRUITER:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}