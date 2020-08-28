import { 
    SET_SCREAMS,
    SET_SCREAM, 
    UPVOTE_COMMENT, 
    REMOVE_UPVOTE,  
    DOWNVOTE_COMMENT, 
    REMOVE_DOWNVOTE, 
    LOADING_DATA, 
    DELETE_SCREAM, 
    DELETE_COMMENT,
    POST_SCREAM,
    POST_COMMENT
} from '../types'

const initialState = {
    screams: [],
    scream: {},
    comments: [],
    comment: {},
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_SCREAMS:
            return{
                ...state,
                screams: action.payload,
                loading: false
            }
        case SET_SCREAM:
        return {
            ...state,
            scream: action.payload
        }
        case DELETE_SCREAM:
            let indexScream = state.screams.findIndex(scream => scream.screamId === action.payload)
            state.screams.splice(indexScream, 1)
            return{
                ...state
            }
        case UPVOTE_COMMENT:
        case REMOVE_UPVOTE:
            let index = state.comments.findIndex(
                (comment) => comment.commentId === action.payload.commentId
              );
              state.comments[index] = action.payload;
            return{
                ...state
            }
        case DOWNVOTE_COMMENT:
        case REMOVE_DOWNVOTE:
            index = state.comments.findIndex(
                (comment) => comment.commentId === action.payload.commentId
              );
              state.comments[index] = action.payload;
            return{
                ...state
            }
        case DELETE_COMMENT:
            index = state.comments.findIndex(comment => comment.commentId === action.payload)
            state.comments.splice(index, 1)
            return{
                ...state
            }
        case POST_SCREAM:
            return{
                ...state,
                screams: [
                    action.payload,
                    ...state.screams
                ]
            }
        case POST_COMMENT:
            return{
                ...state,
                scream: {
                    ...state.scream,
                    comments: [action.payload, ...state.scream.comments]
                }
            }
        default:
            return state
    }
}