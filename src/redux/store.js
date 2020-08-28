import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import jobseekerReducer from './reducers/jobseekerReducer'
import recruiterReducer from './reducers/recruiterReducer'
import recruiterDataReducer from './reducers/recruiterDataReducer'
import jobseekerDataReducer from './reducers/jobseekerDataReducer'
import uiReducer from './reducers/uiReducer'
import communityDataReducer from './reducers/communityDataReducer'

const initialState ={}

const middleware = [thunk]

const reducers = combineReducers({
    jobseeker: jobseekerReducer,
    recruiter: recruiterReducer,
    jobseekerData: jobseekerDataReducer,
    recruiterData: recruiterDataReducer,
    communityData: communityDataReducer,
    UI: uiReducer
})

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )

export default store